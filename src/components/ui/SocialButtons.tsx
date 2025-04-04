import Link from "next/link";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";
import EmailIcon from "../icons/EmailIcon";

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
