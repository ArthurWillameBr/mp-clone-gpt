import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

export interface SidebarProps {
  isVisible: boolean;
}

export const Sidebar = ({ isVisible }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth < 768);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isVisible && (
        <>
          <button onClick={handleClick} className="flex items-center justify-center left-4 top-4 z-10 absolute bg-background-dark border border-border p-2 rounded-md">
            <Image
              src="/images/open-menu.svg"
              width={25}
              height={16}
              alt="Abrir/Fechar "
            />
          </button>

          <div
            className={cn(
              "bg-black/60 w-screen h-screen fixed visible lg:hidden transition-all duration-300 opacity-0",
              isOpen && "opacity-100"
            )}
          ></div>

          <nav
            className={cn(
              "fixed z-10 w-0 lg:relative h-screen bg-background-dark p-0 transition-all duration-300 flex flex-col overflow-hidden opacity-0",
              isOpen && "visible w-[288px] lg:w-[377px] p-4 opacity-100"
            )}
          >
            <div className="flex justify-between gap-4">
              <h3 className="border border-border p-2 rounded-md text-base text-gray basis-4/5 text-center font-semibold">
                Lista de conversas
              </h3>
              <button onClick={handleClick} className="flex items-center justify-center bg-background-dark border border-border p-2 rounded-md basis-1/5 ">
                <Image
                  src="/images/open-menu.svg"
                  width={25}
                  height={16}
                  alt="Abrir/Fechar "
                />
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
};
