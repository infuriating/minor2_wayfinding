"use client";

import React, { useState, useEffect } from "react";

export default function PageTransition() {
  let [transition, setTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTransition(false);
    }, 1500);
  }, []);

  return (
    <>
      {transition && (
        <div className="fixed z-50 grid h-screen w-screen grid-rows-6">
          <div
            className="animate-transitionOut h-full w-full bg-neutral-800"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-neutral-900"
            style={{ animationDelay: "50ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-neutral-800"
            style={{ animationDelay: "100ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-neutral-900"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-neutral-800"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="animate-transitionOut h-full w-full bg-neutral-900"
            style={{ animationDelay: "250ms" }}
          ></div>
        </div>
      )}
    </>
  );
}
