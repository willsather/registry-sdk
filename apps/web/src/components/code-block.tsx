"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  title: string;
  code: string;
}

export function CodeBlock({ title, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Determine language based on file extension or title
  const getLanguage = () => {
    if (title.includes(".ts") || title.includes("typescript"))
      return "typescript";
    if (title.includes(".js")) return "javascript";
    if (title.includes(".jsx") || title.includes(".tsx")) return "jsx";
    if (
      title.includes("terminal") ||
      title.includes("bash") ||
      title.includes("sh")
    )
      return "bash";
    return "text";
  };

  return (
    <div className="relative overflow-hidden rounded-md font-mono text-sm">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-gray-200">
        <span className="text-xs">{title}</span>
        <button
          type="button"
          onClick={copyToClipboard}
          className="text-gray-400 transition-colors hover:text-white"
          aria-label="Copy code"
        >
          {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
        </button>
      </div>

      <SyntaxHighlighter
        language={getLanguage()}
        style={dracula}
        customStyle={{ margin: 0, borderRadius: 0 }}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
