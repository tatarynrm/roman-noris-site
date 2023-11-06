import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
export const TOKEN = process.env.REACT_APP_BOT_TOKEN
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
