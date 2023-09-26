"use client";

import React, { useState, useEffect } from "react";

export default function PageTransition() {
  let [transition, setTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTransition(false);
    }, 1750);
  }, []);

  return (
    <>
      {transition && (
        <div className="fixed z-50 grid h-screen w-screen grid-rows-6">
          <div
            className="animate-transitionOut h-full w-full bg-gradient-to-tr from-black to-neutral-900"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-gradient-to-tr from-neutral-900 to-neutral-800"
            style={{ animationDelay: "100ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-gradient-to-tr from-black to-neutral-900"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-gradient-to-tr from-neutral-900 to-neutral-800"
            style={{ animationDelay: "300ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-gradient-to-tr from-black to-neutral-900"
            style={{ animationDelay: "400ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-gradient-to-tr from-neutral-900 to-neutral-800"
            style={{ animationDelay: "500ms" }}
          ></div>
        </div>
      )}
    </>
  );
}
