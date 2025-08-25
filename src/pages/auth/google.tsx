import { BsGoogle } from "react-icons/bs";
import { auth } from "./utils/Auth";
interface Props {
  text: string;
}

export const Google = ({ text }: Props) => {
  return (
    <button
      className="relative text-blue-500 border-1 border-blue-500 rounded-lg h-14"
      onClick={() => auth.signInWithGoogle()}
    >
      <BsGoogle className="absolute left-10 top-1/2 -translate-y-1/2 text-2xl" />
      {text} with Google
    </button>
  );
};
