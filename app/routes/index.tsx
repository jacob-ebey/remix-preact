import { useState } from "preact/hooks";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <h2>Counter Island</h2>
      <p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>
    </div>
  );
}
