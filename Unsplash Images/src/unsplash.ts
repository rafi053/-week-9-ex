import axios from 'axios'
import { Image } from './types/Image'

const VITE_API_KEY  = "pNH9M-quBKA52025QbBKG66nEmn8crAF2psE6399fVo";
const VITE_BASE_URL = "https://api.unsplash.com/photos"

export const fetchImage = async (): Promise<Image[]>=> {

    try {
        const res = await axios.get(VITE_BASE_URL,{
            params: {
                client_id: VITE_API_KEY
            }
        });

        return res.data
    } catch (error) {
        console.log(error);


    }

    return [];

}



