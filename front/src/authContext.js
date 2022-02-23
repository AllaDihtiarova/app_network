import { createContext } from "react";

const authContext = createContext(
  {
    authenticated: false,
    firstName: '',
    lastName: '',
    birthday: Date(),
    createDate: Date(),
    gender: '',
  }
);

export default authContext;