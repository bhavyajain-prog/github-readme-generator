"use client";

import { useState } from "react";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";

export default function Home() {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [previewKey, setPreviewKey] = useState(0);

  const handleGenerate = () => {
    setPreviewKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              GitHub Profile README Generator
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Create beautiful, dynamic SVG badges for your GitHub profile
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <FormSection
              name={name}
              caption={caption}
              onNameChange={setName}
              onCaptionChange={setCaption}
              onGenerate={handleGenerate}
            />
          </div>

          {/* Preview Section */}
          <div className="order-1 lg:order-2">
            <PreviewSection
              name={name}
              caption={caption}
              previewKey={previewKey}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
