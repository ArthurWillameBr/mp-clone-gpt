import { cn } from "@/utils/cn";
import Image from "next/image";
import Markdown from "react-markdown";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatMessagesProps {
  messages: Message[];
  isLoading?: boolean;
}

export const ChatMessages = ({
  isLoading = false,
  messages,
}: ChatMessagesProps) => {
  return (
    <main className="flex flex-col w-full h-full justify-center items-center overflow-y-auto">
      {messages?.map((message, index) => (
        <MessageBlock key={index} message={message} isLoading={false} />
      ))}
      {isLoading && (
        <MessageBlock message={{ role: "assistant", content: "" }} isLoading={false} />
      )}
    </main>
  );
};

const MessageBlock = ({
  message,
  isLoading = false,
}: {
  message: Message;
  isLoading?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex justify-center text-white bg-background-chat px-4 py-8 w-full",
        message.role === "user" && "bg-background-light"
      )}
    >
      <div className="w-full max-w-[833px] flex">
        <Image
          src={`/images/${message.role}-icon.svg`}
          width={36}
          height={36}
          alt={message.role}
          className="mr-4 self-start"
        />

        {isLoading ? (
          <Image
            src="/images/loading.svg"
            width={36}
            height={36}
            alt="Animação"
            className="mr-4"
          />
        ) : (
            <Markdown>
                {message.content}
            </Markdown>
        )}
      </div>
    </div>
  );
};
