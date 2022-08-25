import Router from "next/router";
export default function useSignout() {
  return {
    signOut: async () => {
      console.log("kuyy");

      localStorage.removeItem("jwt");
      Router.push("login");
    },
  };
}
