import React from "react";

export default function Submit({ value, busy }) {
  return (
    <button
      type="submit"
      className="w-full rounded dark:bg-white bg-secondary dark:text-secondary text-white hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer h-10 flex items-center justify-center"
    >
      {busy ? <span className="sr-only">Loading...</span> : value}
    </button>
  );
}
