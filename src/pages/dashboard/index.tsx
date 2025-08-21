import { Chat } from "./chat";
import { Recommendation } from "./recommendations";

const index = () => {
  return (
    <div className="relative gap-1 px-6 flex flex-1 justify-center py-5 max-h-[calc(100vh-60px)] overflow-y-hidden">
      <Chat />
      <Recommendation />
    </div>
  );
};

export default index;
