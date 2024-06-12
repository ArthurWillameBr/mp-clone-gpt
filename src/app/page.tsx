import { ReactElement } from "react";
import { KeyInstructions } from "./_components/key-instructions";
import { ChatInput } from "./_components/chat-input";

function Home(): ReactElement {
  return (
    <main className="w-full h-screen p-10">
      <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center">
        CloneGPT
      </h1>

      <KeyInstructions /> 
      <ChatInput placeholder="Digite sua chave da API"/>
    </main>
  );
}

export default Home;
