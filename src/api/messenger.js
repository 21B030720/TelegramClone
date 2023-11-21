import axios from "axios";
const URL = 'https://conversations.messagebird.com/v1/';

export const getAllConversations = async() => {
    const {data} = await axios.get(URL);
    return data;
}