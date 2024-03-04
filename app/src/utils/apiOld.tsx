import axios from 'axios';
//import NavigationService from '../../NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage'
const cred = require('../auth0-credentials');
const API_URL = cred.API_URL;
import { useStores } from '../stores';
import { useServices } from '@app/services';


function inst(){
  const { auth } = useStores();
  const { navio } = useServices();
  
  let instance = axios.create({
    baseURL: API_URL,
  });
  
  //instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1FTXdPVFZHTlRKQk1FUTNOVE5HT1RSRVJVVTBSa05HTURBd01qZzFOelEzUkRCQ01FUXhNQSJ9.eyJodHRwczovL3NjaGVtYXMuY2hhcnRhdWRpdHMuY29tL3JvbGVzIjpbIk51cnNlIiwiTnVyc2UiXSwiaHR0cHM6Ly9zY2hlbWFzLmNoYXJ0YXVkaXRzLmNvbS9lbWFpbCI6ImdpYnNvbi01QGhvdG1haWwuY29tIiwiaHR0cHM6Ly9zY2hlbWFzLmNoYXJ0YXVkaXRzLmNvbS91c2VySWQiOjg1LCJodHRwczovL3NjaGVtYXMuY2hhcnRhdWRpdHMuY29tL2ltZyI6bnVsbCwiaHR0cHM6Ly9zY2hlbWFzLmNoYXJ0YXVkaXRzLmNvbS9mYWNpbGl0aWVzIjpbeyJpZCI6NCwibmFtZSI6IkNvbGxleXZpbGxlIn0seyJpZCI6NSwibmFtZSI6IktlbGxlciJ9XSwiaHR0cHM6Ly9zY2hlbWFzLmNoYXJ0YXVkaXRzLmNvbS9mbmFtZSI6IkNocmlzdG9waGVyMiIsImh0dHBzOi8vc2NoZW1hcy5jaGFydGF1ZGl0cy5jb20vbG5hbWUiOiJiZWxrbmFwIiwiaHR0cHM6Ly9zY2hlbWFzLmNoYXJ0YXVkaXRzLmNvbS9kZWZhdWx0RmFjaWxpdHkiOjQsImh0dHBzOi8vc2NoZW1hcy5jaGFydGF1ZGl0cy5jb20vcGhvbmVOdW1iZXIiOiI1MTI1MDcwODk1IiwiaXNzIjoiaHR0cHM6Ly9lcnRvb2xzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YzBkZTI5ZGY3ZTc4NDJjMzBkOTZkNDgiLCJhdWQiOlsiZXJ0b29scy1hcGktZGV2IiwiaHR0cHM6Ly9lcnRvb2xzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE1OTQ3Nzc4MjgsImV4cCI6MTU5NDgxMzgyOCwiYXpwIjoiZ2k3UW1neFJVTjEzOWVOd093NmdrcXZwV2FldHpiZXkiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiZ3R5IjoicGFzc3dvcmQifQ.PeSBDGK_8ITxhgnQUouV5mVGbr174T5EPifzJAuP3R_a5w-UiWsHOUhrrKsfP-oUwe2iMoGjL1MrCPsN4h3R_Hq27tUBG9JTFfYVzZDpmGaw13WcZK-INliuN7zASWk-Jd7Q8XuZvFjwpqv_3ETOteOJPi9KNdxUeiSCB4mM1o4VSqDoGvgrvK0UB-CNTQtw4Ps8-Iqte1pwvkWsvAzMO5oOF69LjRpYMNe7EDY5LD3w77U12R_FlNQp-4vu1nPMPK0f8NrnPy_tLbJxxWcgCKit6n_FbF2AYd4dMQIHzFb-SJUD4sC8WJLvJs_EmTt_yx18BrE9kgRB8mi52QNUsw';
  instance.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('access_token')
      
      if (token) {
        config.headers.Authorization = "Bearer "+token
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  );
  // instance.interceptors.request.use(
  //   async (config) => {
  //     const test = await AsyncStorage.getItem('access_token');
  //     
      
  //     return config;
  //   },
  //   error => Promise.reject(error)
  // );
  
  instance.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401) {
      auth.logout()
      navio.setRoot('stacks', 'AuthFlow');
      AsyncStorage.removeItem('access_token')
      //RootNavigation.navigate('SignOut');
    }
    return error;
  });

  return instance;
}


export default inst;
