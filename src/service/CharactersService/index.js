import axios from 'axios';

export class CharactersService {

    static async getAll(url) {
        if(!url) return;

        return await axios.get(url);
    }

    static async getById(id) {
        if(!id) return;

        return await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}character/${id}`);
    }
    
}