import * as React from "react";
import * as ReactDOMClient from "react-dom/client";

import { App } from "./app";

const container = document.getElementById("registry-root") as HTMLElement;

const root = ReactDOMClient.createRoot(container);
root.render(<App />);
