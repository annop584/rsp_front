import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import useCheckLogin from "@/src/hooks/useCheckLogin";
import Loader from "@/components/Loader";
import RSPsymbol from "@/components/RSPsymbol";
import { RSP_TYPE } from "@/src/constants/gameplay";
import styles from "@/styles/pages/Gameplay.module.scss";

type Props = {};

export default function Gameplay({}: Props) {
  const [nowRSP, setnowRSP] = useState<number | null>(null);
  const [yourScore, setyourScore] = useState<number>(0);
  const [highScore, sethighScore] = useState<number>(0);
  const [randomRSPenemy, setrandomRSPenemy] = useState<number>(RSP_TYPE.RIDDLE);
  const { isLogin } = useCheckLogin();

  const selectRSP = (selected_rsp: number) => {
    setnowRSP(selected_rsp);
  };

  useEffect(() => {
    //get highScore
    //get yourScore
  }, []);

  return (
    <div className={styles.container}>
      {isLogin ? (
        <>
          <div className={styles.header_layout}>
            <h3>Gameplay {nowRSP}</h3>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
          <div className={styles.gameplay_content_wrap}>
            <div className={styles.show_score_layout}>
              <h2>
                Your Score : <span>{yourScore}</span> turn
              </h2>
              <h2>
                High Score : <span>{highScore}</span> turn
              </h2>
            </div>
            <hr></hr>
            <div className={styles.rps_selection_vertical_layout}>
              <h1>🤖</h1>
              <RSPsymbol type={randomRSPenemy} />
            </div>
            <div className={styles.rps_selection_horizon_layout}>
              <RSPsymbol type={RSP_TYPE.ROCK} selectRspFunc={selectRSP} />
              <RSPsymbol type={RSP_TYPE.SCISSORS} selectRspFunc={selectRSP} />
              <RSPsymbol type={RSP_TYPE.PAPER} selectRspFunc={selectRSP} />
            </div>
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
}
