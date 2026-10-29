
"use client";

import type { FormEvent } from "react";

export default function SuggestionForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    window.alert(
      "Thank you! This is a demo form. Your message has not been sent to a server."
    );

    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#0F5257]/10 bg-[#F7F8F5] p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="suggestion-name"
            className="mb-2 block text-sm font-semibold text-[#0B3D3E]"
          >
            Your Name
          </label>
          <input
            id="suggestion-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-[#0F5257]/20 bg-white px-4 py-3 text-[#0B3D3E] outline-none transition focus:border-[#287A6D] focus:ring-2 focus:ring-[#287A6D]/20"
          />
        </div>

        <div>
          <label
            htmlFor="suggestion-email"
            className="mb-2 block text-sm font-semibold text-[#0B3D3E]"
          >
            Email Address
          </label>
          <input
            id="suggestion-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-[#0F5257]/20 bg-white px-4 py-3 text-[#0B3D3E] outline-none transition focus:border-[#287A6D] focus:ring-2 focus:ring-[#287A6D]/20"
          />
        </div>

        <div>
          <label
            htmlFor="suggestion-message"
            className="mb-2 block text-sm font-semibold text-[#0B3D3E]"
          >
            Your Suggestion
          </label>
          <textarea
            id="suggestion-message"
            name="message"
            rows={4}
            placeholder="Share your suggestion about Jattari..."
            required
            className="w-full resize-y rounded-xl border border-[#0F5257]/20 bg-white px-4 py-3 text-[#0B3D3E] outline-none transition focus:border-[#287A6D] focus:ring-2 focus:ring-[#287A6D]/20"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#0F5257] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0B3D3E] focus:outline-none focus:ring-2 focus:ring-[#287A6D] focus:ring-offset-2"
        >
          Submit Suggestion
        </button>

        <p className="text-xs leading-5 text-gray-500">
          Demo form only. Your message will not be saved or sent because a
          backend is not connected yet.
        </p>
      </div>
    </form>
  );
}
