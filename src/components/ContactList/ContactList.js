import PropTypes from "prop-types";
import ContactsListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactsList = ({ items, handleDelete }) => {
  return (
    <>
      <ul className={styles.ul}>
        {items.map((item) => (
          <ContactsListItem
            key={item.id}
            item={item}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactsList;
