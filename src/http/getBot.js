import axios from 'axios';
const BOT_URL = process.env.REACT_APP_BOT_URL;

const getBot = async (text, uuid) => {
    let res;
    try {
        res = await axios.post(BOT_URL, {
            text,
            uuid,
        });
    } catch (err) {
        console.error('err');
    }
    return res;
};

export { getBot };
