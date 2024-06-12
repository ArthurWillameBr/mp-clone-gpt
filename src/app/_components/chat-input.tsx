"use client";

import React, { useState } from "react";
import { Input } from "./ui/Input";
import Image from "next/image";

interface ChatInputProps {
  placeholder: string;
  onSubmitMessage: (key: string) => void;
}

export const ChatInput = ({ placeholder, onSubmitMessage }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onSubmitMessage(inputValue);
      setInputValue("");
    }
  }

  function handleClick() {
    onSubmitMessage(inputValue);
    setInputValue("");
  }

  return (
    <div className="flex justify-center w-full p-4 lg:p-10">
      <div className="relative max-w-[833px] w-full mb-4 lg:mb-10">
        <Input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <div className="absolute flex items-center right-6 top-1/2 -translate-y-1/2 cursor-pointer ">
          <button onClick={handleClick}>
            <Image
              src="/images/send-icon.svg"
              width={24}
              height={24}
              alt="send"
              quality={100}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
