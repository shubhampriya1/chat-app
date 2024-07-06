import { fetcher } from "@/lib/fetcher";

export class AuthService {
  static async Login(payload) {
    return await fetcher({
        method:'POST',
      url: "http://localhost:5000/api/user/login",
      data: payload,
    });
  }
}
//try catch handle fetcher;
//