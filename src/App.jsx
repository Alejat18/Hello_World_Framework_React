import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="Container">
      <h3 class="ContainerTitle">Hola mundo en React</h3>
    </div>
  );
}

export default App;