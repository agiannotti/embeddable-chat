import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { getBot } from './http/getBot';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const uuid = uuidv4();

  // useEffect(() => {
  //   getBot(() => {

  //     addResponseMessage('Hello, how can I help you?');
  //   })
  // }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    getBot(newMessage, uuid).then((res) => {
      addResponseMessage(res.data.directives[0].payload.text);
    });
    // Now send the message throught the backend API
  };
  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="x-chat-ui"
        subtitle="embedded chat" />
    </div>
  );
}

export default App;