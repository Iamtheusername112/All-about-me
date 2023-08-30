import PropTypes from "prop-types";

function SectionTitle({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500"
    >
      {children}
    </h1>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired, // Validates 'children' as a React node
  id: PropTypes.string, // Validates 'id' as a string (optional)
};

export default SectionTitle;
