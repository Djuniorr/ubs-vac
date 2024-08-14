import { createRoot } from "react-dom/client";
import App from "./App";

//pega dentro do index.html o id root: linha 10
const root = createRoot(document.querySelector("#root"));

root.render(<App />);