import { api } from "api";

export class LoginService {

  static async make(email, password) {
    const data = await api;

    return email === data.email && password === data.password;
  }

};