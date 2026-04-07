import Link from "next/link";
import { LinkedInIcon, GithubIcon, EmailIcon } from "@/components/icons";

const SocialButtons = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Link href="https://linkedin.com/in/jorgearayadev" target="_blank">
        <LinkedInIcon />
      </Link>
      <Link href="https://github.com/jorgearaya474" target="_blank">
        <GithubIcon />
      </Link>
      <Link href="mailto:jorgearaya474@gmail.com" target="_blank">
        <EmailIcon />
      </Link>
    </div>
  );
};

export default SocialButtons;
