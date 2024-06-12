"use client";

import { ReactElement, useState } from "react";
import { KeyInstructions } from "./_components/key-instructions";
import { ChatInput } from "./_components/chat-input";
import { Sidebar } from "./_components/sidebar";
import { ChatMessages, Message } from "./_components/chat-messagens";

function Home(): ReactElement {
  const [ApiKey, setApiKey] = useState<string>("");

  const placeholder = !!ApiKey ? "Digite um OI " : "Digite sua chave da API";

  const messages = [
    { role: "user", content: "# Oi, tudo bem?" },
    { role: "assistant", content: "Olá, **tudo bem e você?** " },
  ] as Message[];

  return (
    <div className="flex">
      <Sidebar isVisible={!!ApiKey} />
      <main className="w-full h-screen flex flex-col justify-between mt-10">
        <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center">
          CloneGPT
        </h1>

        {!!ApiKey ? (
          <ChatMessages messages={messages} isLoading={false} />
        ) : (
          <KeyInstructions />
        )}

        <ChatInput onSubmitMessage={setApiKey} placeholder={placeholder} />
      </main>
    </div>
  );
}

export default Home;
