class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.length > 0) {
      this.actionProvider.greet(message);
    }
  }
}

export default MessageParser;
