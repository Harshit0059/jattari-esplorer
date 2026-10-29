
import SuggestionForm from "@/components/SuggestionForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex rounded-full bg-soft-accent px-4 py-2 text-sm font-semibold text-primary">
              Contact & Feedback
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Help us make
              <span className="block text-primary">Jattari Explorer better</span>
            </h2>

            <p className="mt-5 leading-8 text-muted">
              Have a suggestion, correction, or question about this guide?
              Use the form to share your feedback.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-foreground">Local information</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Share information that could help residents and visitors.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-foreground">Corrections & suggestions</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Help identify outdated details or suggest improvements.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-5 sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-foreground">
              Send a suggestion
            </h3>
            <SuggestionForm />
            <p className="mt-4 text-xs leading-5 text-muted">
              Demo form only. Messages are not sent or saved until a backend
              or authorized form service is connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
