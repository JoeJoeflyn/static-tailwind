import React from "react";
import "/src/styles/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <footer>
        <p className="text-center font-bold text-xl">
          Copyright 2021 Web Warrior
        </p>
      </footer>
    </div>
  );
}
