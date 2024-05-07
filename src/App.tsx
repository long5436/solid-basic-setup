import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button class="btn">Button</button>
      <button class="btn btn-neutral">Neutral</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-link">Link</button>
    </>
  );
}

export default App;
