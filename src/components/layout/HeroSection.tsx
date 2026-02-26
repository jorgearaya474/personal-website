interface HeroSectionProps {
  heading: string;
  className: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, className }) => {
  return (
    <div className={`gradient-bg-alt relative ${className}`}>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 pt-32 pb-10 md:pt-20 min-h-64 md:min-h-[400px]">
          <div className="flex flex-col justify-center gap-4 align-middle z-10">
            <h1 className="font-primary font-black text-white text-4xl md:text-6xl lg:text-6xl">
              {heading}
              <span className="text-accent">.</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent to-background absolute bottom-0 w-full h-40"></div>
    </div>
  );
};

export default HeroSection;
