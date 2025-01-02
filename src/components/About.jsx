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
            Hey there! My name is Marwa, a dedicated web developer with a
            passion for creating intuitive and visually captivating websites and
            apps. My journey into development started after delving into the
            digital marketing industry, where I gained valuable experience in
            building digital marketplaces, enhancing sales strategies, and
            working with e-commerce platforms.
            <br /> <br />
            <p>
              This experience sparked my interest in web development, and I
              transitioned to coding websites and apps from scratch. Whether I’m
              building dynamic websites or sharing what I’ve learned through
              blogging, I love turning ideas into meaningful connections. Let’s
              create something that informs, inspires, and leaves an impact{" "}
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
