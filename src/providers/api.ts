import axios, {AxiosResponse} from 'axios';
export type LoginResponse = {
  token: string;
};

export const loginApi = () => 'https://reqres.in/api/login';

export const homeApi = () => 'https://reqres.in/api/users?delay=8';

export async function login(email: string, pin: string) {
  const loginApiUrl = loginApi();

  const requestBody = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };

  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      loginApiUrl,
      requestBody,
    );

    //TODO: set token to storage

    return response.data || {};
  } catch (error) {
    if (error.response.status === 400) {
      throw new Error(error.response.status);
    }
  }
}

export async function getHomeData() {
  const loginApiUrl = homeApi();

  try {
    const response: AxiosResponse<LoginResponse> = await axios.get(loginApiUrl);

    return response.data || {};
  } catch (error) {
    alert(error);
  }
}
