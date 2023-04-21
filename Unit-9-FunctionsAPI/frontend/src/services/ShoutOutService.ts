import ShoutOut from "../models/ShoutOut";
import axios from "axios";

const baseUrl = "https://us-central1-shoutoutslab.cloudfunctions.net/api";

export function fetchShoutOuts():Promise<ShoutOut[]> {
  return axios.get<ShoutOut[]>(`${baseUrl}/shoutouts`)
  .then(res => res.data)
}

export function addShoutOut(shoutOut:ShoutOut):Promise<ShoutOut> {
  return axios.post<ShoutOut>(`${baseUrl}/shoutouts`, shoutOut).then(res => res.data);
}

export function fetchShoutOutsTo(user: string):Promise<ShoutOut[]> {
  return axios.get<ShoutOut[]>(`${baseUrl}/shoutouts`, {
    params: { to: user }
  })
  .then(res => res.data)
}