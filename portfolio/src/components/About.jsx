import myImg from "../images/kem.jpg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          I am a dedicated Full Stack Web Developer, proficient in crafting both
          frontend and backend solutions for Websites and Web Applications,
          driving the overall success of the product. Explore some of my
          projects in the Projects section. I am eager and open to new
          opportunities, ready to embrace different technology stacks and
          enhance my skillset. Adapting and learning are key elements of my
          approach to ensure I contribute effectively to any project. I am open
          to Job opportunities where I can contribute, learn and grow. If you
          have a good opportunity that matches my skills and experience then do
          not hesitate to contact me.
        </p>
        <a
          href="mailto:webcifar.com"
          className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          iwufrancischisom20@gmail.com
        </a>
      </div>

      <img
        src={myImg}
        alt="Francis"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
