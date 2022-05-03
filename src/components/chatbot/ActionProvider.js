// ActionProvider starter code
import axios from "axios";
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = async (message) => {
    const messageObj = {
      msg: message,
    };
    const { data } = await axios.post("/api/chatbot/", messageObj);
    const resp = this.createChatBotMessage(data.msg);
    this.addMessageToState(resp);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
