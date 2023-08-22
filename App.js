import React from "react";
import { ThemeProvider } from "./Context";
import Todo from "./Todo"; 

function App() {
  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  );
}

export default App;
