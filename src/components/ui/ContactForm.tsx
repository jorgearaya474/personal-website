"use client";

import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbdaqzyd");

  if (state.succeeded) {
    return (
      <div className="max-w-2xl p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        <h3 className="text-2xl font-primary font-bold mb-4">
          Message sent ✨
        </h3>
        <p className="text-white/70">
          Thanks for reaching out. I’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-white/60">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="bg-white/5 border border-white/10 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-accent 
                       focus:border-accent focus:bg-white/10
                       transition-all duration-300"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-white/60">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="bg-white/5 border border-white/10 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-accent 
                       focus:border-accent focus:bg-white/10
                       transition-all duration-300"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-white/60">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="bg-white/5 border border-white/10 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-accent 
                       focus:border-accent focus:bg-white/10
                       resize-none
                       transition-all duration-300"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="text-xl font-bold font-primary rounded-xl text-foreground px-5 py-3 bg-accent hover:bg-primary hover:text-accent transition-colors transition-transform duration-300 hover:scale-105"
        >
          {state.submitting ? "Sending..." : "Send message"}
        </button>

      </form>
    </div>
  );
};

export default ContactForm;