import CtaButton from "@/components/ui/CtaButton";
import ContactForm from "@/components/ui/ContactForm";

const ContactBanner = () => {
  return (
    <section id="contact" className="bg-surface py-8 lg:py-20 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <h2>Let’s Build Something Meaningful</h2>
            <p className="leading-relaxed space-y-2">
              Have a project in mind or just want to connect? 
              I’m always open to new ideas, collaborations, and interesting challenges.  
              Let’s create something thoughtful and impactful together.
            </p>
            <div className="pt-6 border-t border-white/10 flex flex-col gap-2 text-md font-secondary">
              <span>Heredia, Costa Rica</span>
              <a className="underline" href="mailto:jorgearaya474@gmail.com">jorgearaya474@gmail.com</a>
              <span>Available for remote work · Replies within 24 hours</span>
            </div>
          </div>
          <ContactForm/>
        </div>
        
      </div>
    </section>
  );
};

export default ContactBanner;
