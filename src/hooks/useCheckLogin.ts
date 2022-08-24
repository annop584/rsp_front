import { getSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function useCheckLogin() {
  const [isLogin, setisLogin] = useState<boolean>(false);

  const checkSession = async () => {
    const session = await getSession();
    if (session) {
      Router.push("/gameplay");
      setisLogin(true);
    } else {
      Router.push("/login");
      setisLogin(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return { isLogin: isLogin };
}
