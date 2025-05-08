import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "images/project-1.png",
    title: "Coffee Shop",
    tags: ["HTML", "SCSS", "Development"],
    projectLink: "https://coffeebeans-shop.netlify.app/",
  },
  {
    imgSrc: "images/project-2.png",
    title: "Habit App",
    tags: ["Reactjs", "mysql", "nodejs"],
    projectLink: "https://habitlink.netlify.app/",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Band-site",
    tags: ["BEM", "CSS", "HTML"],
    projectLink: "https://bandsitev2.netlify.app/",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "Brainflix",
    tags: ["Javascript", "SCSS", "HTML", "Development"],
    projectLink: "https://marwa-mohamed-brainflix.onrender.com/",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "Minimal Weather App",
    tags: ["API", "ReactJs", "SCSS"],
    projectLink: "https://github.com/marwam7d33/Simple-Weather-App/tree/main",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2">My Projects Highlights</h2>
        <div className="grid gap-x-4 gap-y-5  grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
