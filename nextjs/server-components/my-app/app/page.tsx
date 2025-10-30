"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <p>I am a client component</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
