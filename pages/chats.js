import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="1064fb60-cf88-4f06-bbe9-75bbd766a386"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}