import { DropdownMenu } from "radix-ui";
import { Link } from "react-router";

export const User = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="h-10 w-10 rounded-full bg-gray-400/5"
        asChild
      >
        <button className="IconButton" aria-label="Customise options">
          M
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="text-white rounded mr-4 shadow-lg border border-gray-700 bg-[#111a22] flex flex-col py-3"
          sideOffset={10}
        >
          <div className="flex items-center gap-3 py-3 px-2">
            <div className="h-10 w-10 rounded-full bg-gray-400/5"></div>
            <div>
              <h2>John Doe</h2>
              <p className="text-sm text-gray-500">
                Fullstack software engineer
              </p>
            </div>
          </div>
          <DropdownMenu.Separator className="h-[1px] bg-gray-700" />
          <Link
            to="/dashboard/profile"
            className="px-2 py-3 hover:bg-gray-700/10"
          >
            Profile
          </Link>
          <Link
            to="/dashboard/settings"
            className="px-2 py-3 hover:bg-gray-700/10"
          >
            Settings
          </Link>
          <Link to="/auth/logout" className="px-2 py-3 hover:bg-gray-700/10">
            Logout
          </Link>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
