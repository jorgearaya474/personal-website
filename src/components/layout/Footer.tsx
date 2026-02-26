import Link from "next/link";
import SocialButtons from "@/components/ui/SocialButtons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-16 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          <div className="font-secondary text-lg text-center md:text-left">
            © {currentYear} — Crafted with ☕ by me
          </div>

          <div className="grid grid-cols-2 gap-8">
            <nav>
              <ul className="flex flex-col gap-4 text-md font-secondary tracking-wide">
                <li>
                  <Link href="/projects" className="hover:text-accent transition">
                    Personal Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-col gap-4 text-md font-secondary tracking-wide">
                <li>
                  <Link href="https://linkedin.com/in/jorgearayadev" target="_blank" className="hover:text-accent transition">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/jorgearaya474" target="_blank" className="hover:text-accent transition">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="mailto:jorgearaya474@gmail.com" className="hover:text-accent transition">
                    Email
                  </Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;