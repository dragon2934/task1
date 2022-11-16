import axios from 'axios';
import { restfulAPIBase } from '../const';


export const   getCooks = () =>{
        return axios.get(restfulAPIBase + "/GetCooks")
};
export const   getWaiters = () =>{
        return axios.get(restfulAPIBase + "/GetWaiters")
};
