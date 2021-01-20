import axios from "axios";
import { API_URLS } from "../const";

export const getRepos = () => axios.get(API_URLS.GET_REPOS);
