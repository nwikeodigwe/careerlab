import { useSearchParams } from "react-router";

const Callback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  console.log(code);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  );
};

export default Callback;
