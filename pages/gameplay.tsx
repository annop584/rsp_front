import React from "react";
import { signOut } from "next-auth/react";
import useCheckLogin from "@/src/hooks/useCheckLogin";
import Loader from "@/components/Loader";

type Props = {};

export default function Gameplay({}: Props) {
  const { isLogin } = useCheckLogin();
  return (
    <>
      {isLogin ? (
        <>
          <div>
            <h3>Gameplay</h3>
            <button onClick={() => signOut()}>Sign out</button>
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
