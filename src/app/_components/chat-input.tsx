"use client"

import { useState } from "react";
import { Input } from "./ui/Input";

interface ChatInputProps {
  placeholder: string;
}

export const ChatInput = ({ placeholder}: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  return (
    <div className="flex justify-center w-full p-4 lg:p-10">
      <div className="relative max-w-[833px] w-full mb-4 lg:mb-10">
        <Input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={() => {} }
        />
      </div>
    </div>
  );
};
