import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";

interface Props {
  isSaved: boolean;
  onClick: () => void;
  className: string;
}

export const Save = ({ isSaved, onClick, className }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {isSaved ? (
        <FaBookmark className="text-white text-2xl" />
      ) : (
        <CiBookmark className="text-white text-2xl" />
      )}
    </button>
  );
};
