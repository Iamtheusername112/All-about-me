function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
          Hi there!!, I am Francis
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          👨‍💻 Full-Stack Web Developer Enthusiast <br /> Passionate about
          crafting digital experiences that are not only functional but also
          aesthetically pleasing. With a foundation in both front-end and
          back-end technologies, I bring a holistic approach to web development,
          ensuring seamless integration of design and functionality.
        </p>
        <a
          href="#works"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
        >
          See my projects
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
