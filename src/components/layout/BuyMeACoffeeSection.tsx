import CtaButton from "../ui/CtaButton";

interface BMACSectionProps {
  title: string;
  text: string;
}

const BuyMeCoffeeSection: React.FC<BMACSectionProps> = ({ title, text }) => {
  return (
    <div className="container py-6 lg:py-28">
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 border border-teal-50/20 rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-4xl">☕</div>
            <div className="!m-0">
              <h3 className="font-primary text-xl font-bold text-white">
                {title}
              </h3>
              <p className="font-secondary text-white text-lg">{text}</p>
            </div>
          </div>
          <CtaButton
            href="https://buymeacoffee.com/jorgearayadev"
            target="_blank"
            text="☕ Buy me a coffee"
            title="Buy me a coffee"
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyMeCoffeeSection;
