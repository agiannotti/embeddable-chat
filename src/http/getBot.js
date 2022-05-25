import axios from 'axios';

const getBot = async (text, uuid) => {
    let res;
    try {
        res = await axios.post(`https://bot.xaqt.com/api/web`, {
            text,
            uuid,
        });
    } catch (err) {
        console.error('err');
    }
    return res;
};

export { getBot };
