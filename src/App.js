import React from 'react';
import { addResponseMessage, Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { v4 as uuidv4 } from 'uuid';
import { getBot } from './http/getBot';


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
    }).catch((err) => {
      console.error("Error", err);
    });

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