"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const { isLoaded, isSignedIn } = useUser();
    const { isLoaded, userId } = useAuth();


  if (!isLoaded || !userId) return null;
  return (
    <div className="flex flex-col gap-4 items-start">
      <p>Counter {count}</p>
      <div className="flex gap-4">
        <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Dec</button>
      </div>
    </div>
  );
};

export default Counter;
