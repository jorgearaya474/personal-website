import HeroSection from "@/components/layout/HeroSection";
import CheckMarkIcon from "@/components/icons/checkMarkIcon";
import { ImageItem } from "@/types/types";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
	title: "Contact Jorge | jorgearaya.com",
	description:
		"Contact Jorge Araya, a web developer focused on thoughtful, well-crafted digital experiences.",
	keywords: ["contact web developer", "hire developer costa rica", "wordpress expert"],
};

export default function Contact() {
	return (
		<>
			<HeroSection heading="Get in Touch" className="" />
			<div className="container py-8 lg:py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div>
						<h2 className="mb-6">Let’s connect</h2>

						<p className="mb-4 text-lg leading-relaxed text-justify">
							If you have something in mind — an idea, a project, or even just a question —
							I’d be happy to hear about it.
						</p>

						<p className="mb-4 text-lg leading-relaxed text-justify">
							I believe good work starts with a good conversation. Understanding the context,
							the goals, and what truly matters before writing a single line of code.
						</p>

						<p className="mb-6 text-lg leading-relaxed text-justify">
							Whether you’re looking for a long-term collaboration or simply exploring possibilities,
							feel free to reach out.
						</p>

						<div className="my-8 p-6 rounded-lg bg-surface">
							<h3 className="mb-3">What you can expect</h3>
							<ul className="space-y-3">
								<li className="flex gap-2 items-center">
									<CheckMarkIcon className="w-5 h-5" />
									Clear and direct communication.
								</li>

								<li className="flex gap-2 items-center">
									<CheckMarkIcon className="w-5 h-5" />
									Thoughtful, well-structured development.
								</li>

								<li className="flex gap-2 items-center">
									<CheckMarkIcon className="w-5 h-5" />
									A collaborative and transparent process.
								</li>
							</ul>
						</div>

						<p className="italic">
							Based in Costa Rica 🇨🇷 — open to working and collaborating worldwide.
						</p>
					</div>

					<div>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	);
}