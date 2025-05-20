const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="bg-zinc-800/50 p-7 rounded-2xl
        md:p-12"
        >
          {" "}
          <p
            className="text-zinc-300 mb-4 md:mb-8
        md:text-xl md:max-w-[60ch]"
          >
            Hi 👋 I’m Marwa, a web developer with a foundation in computer
            science and a passion for building intuitive, visually engaging
            websites and apps. That early exposure, combined with hands-on
            experience in digital marketing, building digital marketplaces,
            optimizing e-commerce strategies, and driving growth naturally led
            me to web development.
            <br /> <br />
            <p>
              Over time, I transitioned from customizing platforms to coding
              full websites and apps from scratch, turning ideas into impactful
              digital experiences.{" "}
            </p>
          </p>
          <div
            className="flex flex-wrap items-center gap-4
        md:gap-8"
          >
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <span className="text-zinc-400 text-sm md:text-lg">
                  {label}
                </span>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
