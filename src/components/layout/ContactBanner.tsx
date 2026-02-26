import CtaButton from "@/components/ui/CtaButton";
import ContactForm from "@/components/ui/ContactForm";

const ContactBanner = () => {
  return (
    <section id="contact" className="bg-surface py-8 lg:py-24 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <h2>Let’s Connect</h2>
            <p className="leading-relaxed">
              If you have a project in mind, are looking for a collaborator,
              or simply want to start a conversation, I’d be glad to hear from you.
              I approach every project with care, clarity, and long-term thinking.
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-2 text-md font-secondary">
              <span>Heredia, Costa Rica</span>
              <a className="underline" href="mailto:jorgearaya474@gmail.com">
                jorgearaya474@gmail.com
              </a>
              <span>Usually replies within 24 hours</span>
            </div>
          </div>
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default ContactBanner;
