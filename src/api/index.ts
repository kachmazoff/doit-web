import axios from "axios";
import * as axiosConfig from "./axiosConfig";

const getTimeline = () => {
  return [];
};

const getUserParticipations = (username: string) =>
  axios.get(`/api/users/${username}/participants`).then((res) => res.data);

export { getTimeline, getUserParticipations, axiosConfig };
