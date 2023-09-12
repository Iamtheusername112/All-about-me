function Footer() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Francis Iwu
      </a>
      <a
        href="mailto:webcifar@gmail.com"
        className="text-sm md:text-md hover:text-indigo-500"
      >
        iwufrancischisom20@gmail.com <br />
        https://www.linkedin.com/in/francis-iwu-878973238/
      </a>
      <p className="text-xs mt-2 text-gray-500">
        © Creative {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
