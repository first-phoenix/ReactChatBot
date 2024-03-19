import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './components/BotAvatar';
import StartBtn from './components/StartBtn';
import StartSlow from './components/StartSlow';
import DipslayImage from './components/DipslayImage';


const botName = 'CGS Gennie';

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`, {
        widget: "startBtn"
    })],
    botName: botName,
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "startSlow",
            widgetFunc: (props) => <StartSlow {...props} />,
        },
        {
            widgetName: "finalImage",
            widgetFunc: (props) => <DipslayImage {...props} />,
        },
    ], 
    customStyles: {
        botMessageBox: {
        backgroundColor: '#376B7E',
        },
        chatButton: {
        backgroundColor: '#5ccc9d',
        },
    },
};

export default config;