import clsx from "clsx";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  response?: { type: "success" | "error"; message: string } | null;
}
export const Response = ({ response }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (response) {
      setIsOpen(true);
    }
  }, [response]);
  return (
    <>
      {response && isOpen && (
        <div
          className={clsx(
            "relative  p-5 border  text-xs rounded-sm",
            {
              "text-red-500 bg-red-500/5 border-red-500":
                response.type === "error",
            },
            {
              "text-green-500 bg-green-500/5 border-green-500":
                response.type === "success",
            }
          )}
        >
          {response.message}
          <button
            className="absolute top-1/2 -translate-y-1/2 right-2"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>
      )}
    </>
  );
};
