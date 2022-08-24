import React from "react";
import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "@/styles/Home.module.scss";
import useCheckLogin from "@/src/hooks/useCheckLogin";
import Loader from "@/components/Loader";
type Props = {};

export default function Login({}: Props) {
  const { isLogin } = useCheckLogin();
  const SignInSocial = (provider: string) => {
    if (provider == "google") {
      signIn(provider, {
        callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL,
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      {!isLogin ? (
        <>
          <div>
            <h1 className={styles.title}>Home</h1>
            <button
              onClick={() => {
                SignInSocial("google");
              }}
            >
              SignIn
            </button>
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
}
