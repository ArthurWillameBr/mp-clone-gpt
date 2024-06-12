"use client";

import { ReactElement, useState } from "react";
import { KeyInstructions } from "./_components/key-instructions";
import { ChatInput } from "./_components/chat-input";
import { Sidebar } from "./_components/sidebar";

function Home(): ReactElement {
  const [ApiKey, setApiKey] = useState<string>("");

  return (
    <div className="flex">
      <Sidebar isVisible />
 <main className="w-full h-screen p-10 flex flex-col justify-between">
      <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center">
        CloneGPT
      </h1>

      <KeyInstructions />
      <ChatInput
        onSubmitMessage={setApiKey}
        placeholder="Digite sua chave da API"
      />
    </main>
    </div>
   
  );
}

export default Home;
