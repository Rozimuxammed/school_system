import { ArrowLeft, Bell, MessageSquare, Search, Settings } from "lucide-react";
export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 mb-11">
      <div className="flex">
      <div className="flex items-center">
        <button className="p-3 rounded-lg bg-card">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 max-w-80 mx-4">
        <div className="flex items-center bg-[#EBEAEF] rounded-full px-4 py-3">
          <Search className="w-6 h-6 text-muted_foreground mr-2.5" />
          <input
            type="text"
            placeholder="Search"
            className="text-xl bg-transparent border-none outline-none w-full text-foreground placeholder-muted_foreground"
          />
        </div>
      </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="rounded-full bg-[#EBEAEF] p-3">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="rounded-full bg-[#EBEAEF] p-3">
          <MessageSquare className="w-5 h-5 text-gray-600" />
        </button>
        <button className="rounded-full bg-[#EBEAEF] p-3">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <image
            src="https://cdn.oaistatic.com/assets/sora-mutf8tav.webp"
            alt="Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
