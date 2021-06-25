import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ handleChange, filter }) => {
  return (
    <div className={styles.block}>
      <label className={styles.title} htmlFor="filter">Find contacts by name:</label>
      <input
        id="filter"
        name="filter"
        type="text"
        className={styles.input}
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
