import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
export type LoginResponse = {
  token: string;
};

export const loginApi = () => 'https://reqres.in/api/loginz';

export const homeApi = () => 'https://reqres.in/api/users?delay=8';

export async function login(email: string, pin: string) {
  const loginApiUrl = loginApi();

  // Define your request body
  const requestBody = {
    email: 'eve.holt@reqres.in',
    password: '123456',
  };

  // const requestBody = {
  //   email: email,
  //   password: pin,
  // };

  try {
    // Send POST request with request body
    const response: AxiosResponse<LoginResponse> = await axios.post(
      loginApiUrl,
      requestBody,
    );
    console.log(response.data, 'asdsa');

    return response.data || {};
  } catch (error) {
    console.log(error);
    // throw new Error(
    //   `Error in 'axiosPostJsonData(${loginApiUrl})': ${error.message}`,
    // );
  }
}

export async function getHomeData() {
  const loginApiUrl = homeApi();

  try {
    // Send POST request with request body
    const response: AxiosResponse<LoginResponse> = await axios.get(loginApiUrl);
    console.log(response.data, 'asdsa');

    return response.data || {};
  } catch (error) {
    throw new Error(
      `Error in 'axiosPostJsonData(${loginApiUrl})': ${error.message}`,
    );
  }
}
