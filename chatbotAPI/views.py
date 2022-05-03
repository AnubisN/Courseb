from rest_framework.decorators import api_view, permission_classes
import os
from django.shortcuts import render
from django.conf import settings
import nltk
from nltk.stem.porter import PorterStemmer
lemmatizer = PorterStemmer()
import pickle
import numpy as np
from rest_framework import status
from rest_framework.response import Response

from keras.models import load_model
model = load_model(os.path.join(settings.MODELS,"model.h5"))
import json
import random
intents = json.loads(open(os.path.join(settings.MODELS,"data_course.json")).read())
words = pickle.load(open(os.path.join(settings.MODELS,"texts.pkl"),"rb"))
classes = pickle.load(open(os.path.join(settings.MODELS,"labels.pkl"),"rb"))

def clean_up_sentence(sentence):
    # tokenize the pattern - split words into array
    sentence_words = nltk.word_tokenize(sentence)
    # stem each word - create short form for word
    sentence_words = [lemmatizer.stem(word.lower()) for word in sentence_words]
    return sentence_words

# return bag of words array: 0 or 1 for each word in the bag that exists in the sentence
def bow(sentence, words, show_details=True):
    # tokenize the pattern
    sentence_words = clean_up_sentence(sentence)
    # bag of words - matrix of N words, vocabulary matrix
    bag = [0]*len(words)  
    for s in sentence_words:
        for i,w in enumerate(words):
            if w == s: 
                # assign 1 if current word is in the vocabulary position
                bag[i] = 1
                if show_details:
                    print ("found in bag: %s" % w)
    return(np.array(bag))

def predict_class(sentence, model):
    # filter out predictions below a threshold
    p = bow(sentence, words,show_details=False)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i,r] for i,r in enumerate(res) if r>ERROR_THRESHOLD]
    # sort by strength of probability
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    return return_list

def getResponse(ints, intents_json):
    tag = ints[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if(i['tag']== tag):
            result = random.choice(i['responses'])
            break
    return result

@api_view(['POST'])
def chatbot_response(request):
    msg = request.data["msg"]
    ints = predict_class(msg, model)
    res = getResponse(ints, intents)
    message = {'msg': res}
    return Response(message,status=status.HTTP_200_OK)