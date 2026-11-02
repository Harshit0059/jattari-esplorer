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
      className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="suggestion-name"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Your Name
          </label>
          <input
            id="suggestion-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label
            htmlFor="suggestion-email"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Email Address
          </label>
          <input
            id="suggestion-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label
            htmlFor="suggestion-message"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Your Suggestion
          </label>
          <textarea
            id="suggestion-message"
            name="message"
            rows={4}
            placeholder="Share your suggestion about Jattari..."
            required
            className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Submit Suggestion
        </button>

        <p className="text-xs leading-5 text-muted">
          Demo form only. Your message will not be saved or sent because a
          backend is not connected yet.
        </p>
      </div>
    </form>
  );
}
