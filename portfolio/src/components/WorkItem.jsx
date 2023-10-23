import PropTypes from "prop-types";

function WorkItem({ imgUrl, title, tech, workUrl, status }) {
  return (
    <a
      href={workUrl}
      target="_blank"
      rel="noreferrer"
      className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="work"
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
          <p> Project Status: {status} </p>
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

WorkItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  workUrl: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default WorkItem;
