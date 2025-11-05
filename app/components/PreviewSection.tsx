"use client";

import { useState } from "react";
import { ThemeName } from "@/app/lib/svg-themes";

interface PreviewSectionProps {
  name: string;
  caption: string;
  theme: ThemeName;
}

export default function PreviewSection({
  name,
  caption,
  theme,
}: PreviewSectionProps) {
  const [copied, setCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const generateMarkdownCode = () => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const params = new URLSearchParams();

    params.append("name", name || "John Doe");
    if (caption) params.append("caption", caption);
    if (theme && theme !== "gradient") params.append("theme", theme);

    return `![GitHub Profile](${baseUrl}/api/generate?${params.toString()})`;
  };

  const generateImageUrl = () => {
    const params = new URLSearchParams();
    const displayName = name || "John Doe";

    params.append("name", displayName);
    if (caption) {
      params.append("caption", caption);
    }
    if (theme) {
      params.append("theme", theme);
    }

    return `/api/generate?${params.toString()}`;
  };

  const handleCopy = async () => {
    const code = generateMarkdownCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Preview
      </h2>

      <div
        className="relative bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 min-h-[280px] flex items-center justify-center group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={generateImageUrl()}
          alt="GitHub Profile Preview"
          className="max-w-full h-auto rounded-lg shadow-md"
        />

        {isHovering && (
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 font-medium"
          >
            {copied ? (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
