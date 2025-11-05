"use client";

interface FormSectionProps {
  name: string;
  caption: string;
  onNameChange: (name: string) => void;
  onCaptionChange: (caption: string) => void;
  onGenerate: () => void;
}

export default function FormSection({
  name,
  caption,
  onNameChange,
  onCaptionChange,
}: FormSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Customize Your Profile
      </h2>

      <div className="space-y-6">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        {/* Caption Input */}
        <div>
          <label
            htmlFor="caption"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Caption{" "}
            <span className="text-gray-400 dark:text-gray-500 text-xs">
              (optional)
            </span>
          </label>
          <input
            id="caption"
            type="text"
            value={caption}
            onChange={(e) => onCaptionChange(e.target.value)}
            placeholder="Bonker"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
