import React from "react";

const CustomToast = ({ message, type = "success" }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          type === "success" ? "bg-[#4cd964]" : "bg-[#ff453a]"
        }`}
      >
        {type === "success" ? (
          <svg
            className="h-3 w-3 fill-none stroke-white"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg
            className="h-3 w-3 fill-none stroke-white"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        )}
      </div>

      <span className="text-sm font-medium tracking-wide text-zinc-100">
        {message}
      </span>
    </div>
  );
};

export default CustomToast;