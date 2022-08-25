import { signIn } from "@/src/apis/users";
import Router from "next/router";
export default function useSignin() {
  return {
    signIn: async (email: string, password: string) => {
      const user = await signIn(email, password);
      if (user.success) {
        const now = new Date();
        const jwt_token = {
          token: user.data?.token,
          expiry: now.getTime() + 1000 * 60 * 60 * 24 * 30,
        };
        localStorage.setItem("jwt", JSON.stringify(jwt_token));
        Router.push("gameplay");
      } else {
        alert(JSON.stringify(user));
      }
    },
  };
}
