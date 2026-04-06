import PropTypes from 'prop-types';

function ListeCourses({ elements }) {
  return (
    <div className="courses-list">
      <h3>📝 Ma liste</h3>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;