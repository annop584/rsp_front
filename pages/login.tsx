import React, { useState } from "react";
import { useEffect } from "react";
import Router from "next/router";
import styles from "@/styles/pages/Login.module.scss";
import Loader from "@/components/Loader";
import useSignin from "@/src/hooks/useSignin";
import useChecksignin from "@/src/hooks/useChecksignin";
import Link from "next/link";
type Props = {};

export default function Login({}: Props) {
  const { signIn } = useSignin();
  const { isSignin } = useChecksignin();

  useEffect(() => {
    if (isSignin) {
      Router.push("/gameplay");
      console.log("loginn");
    } else {
    }
    console.log(isSignin);
  }, [isSignin]);

  return (
    <div>
      {isSignin == false && (
        <>
          <div className={styles.center}>
            <h1>🤘🏼 ✂️ 🧾</h1>
            <div className={styles.form}>
              <label>
                Email
                <br></br>
                <input type="text" />
              </label>
              <label>
                Password
                <br></br>
                <input type="text" />
              </label>
              <Link href="register">
                <a>register</a>
              </Link>
            </div>

            <p>
              {" "}
              <button
                onClick={() => {
                  signIn("annop584@gmail.com", "Annop1234");
                }}
              >
                <span>Login</span>
              </button>
            </p>
          </div>
        </>
      )}

      {isSignin == undefined && (
        <>
          <Loader />
        </>
      )}
    </div>
  );
}
