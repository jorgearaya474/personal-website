import CtaButton from "../ui/CtaButton";

const ContactBanner = () => {
  return (
    <div className="container pb-8 lg:pb-[8rem]">
      <div className="flex flex-col gap-8 bg-zinc-800/60 p-8 md:p-16 rounded-xl relative overflow-hidden">
        <div className="max-w-3xl">
          <h2 className="font-primary text-3xl lg:text-5xl block font-black text-white text-left">
            Get in Touch
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-2">
            <p className="text-white text-xl font-secondary">
              Interested in collaborating or have questions about my work? Feel
              free to reach out using the options below. I'm always excited
              about new opportunities and ready to discuss how we can bring your
              next project to life together. I look forward to hearing from you!
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <CtaButton
                href="mailto:jorgearaya474@gmail.com"
                text="Send me an email"
                title="Contact Jorge Araya"
                className="w-full md:w-auto text-center"
              />
              <CtaButton
                href="https://linkedin.com/in/jorgearayadev"
                text="LinkedIn"
                title="Contact Jorge Araya"
                className="w-full md:w-auto text-center"
              />
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="300"
          height="300"
          x="0"
          y="0"
          viewBox="0 0 496.009 496.009"
          className="absolute opacity-5 right-7 bottom-7 fill-white/40"
        >
          <g>
            <path
              d="m475.015.815-464 151.617c-13.104 4.282-14.999 22.106-3.073 29.04l175.35 101.963a15.997 15.997 0 0 0 17.582-.986l49.292-36.606-36.606 49.292a16.002 16.002 0 0 0-.986 17.583l101.963 175.35c6.942 11.936 24.762 10.02 29.041-3.073l151.617-464c4.067-12.459-7.782-24.234-20.18-20.18zM324.249 441.112l-78.712-135.365 94.913-127.805a16.001 16.001 0 0 0-22.385-22.385L190.26 250.471 54.896 171.758 454.983 41.025zm-156.258-90.468L61.753 456.881c-6.248 6.247-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l106.238-106.237c6.25-6.247 16.381-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627zm-140.349 4.02c-6.249-6.249-6.249-16.379 0-22.627l41.92-41.921c6.248-6.249 16.379-6.249 22.627 0 6.249 6.249 6.249 16.379 0 22.627l-41.92 41.921c-6.247 6.247-16.379 6.248-22.627 0zm178.25 49.154c6.249 6.248 6.249 16.379 0 22.627l-41.921 41.92a15.947 15.947 0 0 1-11.313 4.687c-14.127 0-21.421-17.207-11.313-27.314l41.921-41.92c6.247-6.249 16.378-6.249 22.626 0z"
              opacity="1"
              data-original="#000000"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ContactBanner;
