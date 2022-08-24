import type { NextPage } from "next";

import useCheckLogin from "@/src/hooks/useCheckLogin";

const Home: NextPage = () => {
  useCheckLogin();

  return <div></div>;
};

export default Home;
