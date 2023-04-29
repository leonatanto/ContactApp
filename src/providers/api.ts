import axios, {AxiosResponse} from 'axios';
export type LoginResponse = {
  token: string;
};

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
};

export const loginApi = () => 'https://reqres.in/api/login';

export const homeApi = () => 'https://reqres.in/api/users?delay=8';

export const contactApi = () => 'https://contact.herokuapp.com/contact';
//TODO: pecah jd env

export async function getContactList() {
  const contactApiUrl = contactApi();

  try {
    const response: AxiosResponse<LoginResponse> = await axios.get(
      contactApiUrl,
    );

    return response.data || {};
  } catch (error) {
    alert(error);
  }
}

// Implement the function to delete a contact by ID
export async function deleteContact(id: string): Promise<void> {
  try {
    await axios.delete(`${contactApi()}/${id}`);
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
}

export async function getContactDetail(id: string): Promise<Contact | null> {
  const contactApiUrl = `${contactApi()}/${id}`;

  try {
    const response: AxiosResponse<Contact> = await axios.get(contactApiUrl);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching contact detail:', error);
    return null;
  }
}

export async function addContact(contactData: Contact): Promise<void> {
  try {
    const response = await axios.post(contactApi(), contactData);
    console.log(response.data); // Log the response data
  } catch (error) {
    throw new Error('Failed to add contact');
  }
}
