import * as React from "react";

import * as components from "virtual:demos";

import "./styles/globals.css";
import "./styles/tailwind.css";

export function App() {
  const { component, ...demos } = components;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <div className="mb-4 text-center">
        <h1 className="font-extrabold font-mono text-primary">Registry</h1>
        <p className="italic">
          this is a registry running using `registry-sdk` and styled by tailwind
        </p>
      </div>

      <div className="m-16 flex flex-col justify-start border border-gray-500 p-4 pr-16">
        <h2 className="font-extrabold font-mono text-primary">
          {component.title}
        </h2>
        <p className="mb-4 italic">{component.description}</p>

        <div className="mt-4 flex flex-col space-y-4">
          {Object.entries(demos).map(([name, demo]) => (
            <div key={name}>
              <h3 className="mb-1 font-bold">{name}</h3>
              <component.component {...demo.props} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
