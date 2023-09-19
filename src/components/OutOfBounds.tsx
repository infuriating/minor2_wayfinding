"use client";

import React from "react";

export default function OutOfBounds() {
  return (
    <div className="fixed flex h-screen w-screen items-center justify-center">
      <button onClick={() => location.reload()} className="text-center">
        <p className="text-6xl font-bold text-red-500">Out of bounds</p>
        <p className="text-6xl font-bold text-red-500 underline">
          Please refresh the page.
        </p>
      </button>
    </div>
  );
}
