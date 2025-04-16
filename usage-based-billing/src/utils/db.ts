// Normally, you would connect to your database to fetch the user from the API key
// In this example, we have a hard coded user object

export interface User {
  id: number;
  name: string;
  subscription_id: string;
  api_key: string;
}

const users: User[] = [
  {
    name: "",
    id: 1,
    api_key: "",
    subscription_id: "",
  },
];

export const getUser = (api_key: string) => {
  return users.find((user) => user.api_key === api_key);
};
