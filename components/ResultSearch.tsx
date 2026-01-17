"use client";

import { useState } from "react";
import { results } from "@/data/results";

export default function ResultSearch() {
  const [roll, setRoll] = useState("");

  const filtered = results.filter((r) =>
    r.roll.toLowerCase().includes(roll.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Enter Roll No"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        style={{ padding: 10, marginBottom: 20, width: "100%" }}
      />

      <div className="grid">
        {filtered.map((r) => (
          <div key={r.id} className="card">
            <h3>{r.name}</h3>
            <p>Roll: {r.roll}</p>
            <p>{r.semester}</p>
            <a href={r.link} target="_blank">View Result</a>
          </div>
        ))}
      </div>
    </>
  );
}