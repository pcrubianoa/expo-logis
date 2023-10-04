import React from "react";
import { useStorageState } from "@/utils/storage-utils";
import AuthContext from "./authentication.context";
import { router } from "expo-router";

export function SessionProvider(props: { children: React.ReactNode }) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: async (user,pass) => {

          const response = await fetch("https://api.logis.com.co/v1/secure", {
            method: 'POST',
            body: JSON.stringify({
                'user': user,
                'pass': pass,
                'application': 'bares'
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                  console.log("ok");
                  setSession("xxx");
                }
              })

          console.log("guardar apiKey");
          router.push("/one");
        },
        signOut: () => {
          setSession(null);
          console.log("borrar apiKey");
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
