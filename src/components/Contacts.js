import { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
import styles from "./Contacts.module.css";

import { connect } from "react-redux";
import {
  deletedItem,
  addNewToList,
  filterChange,
} from "../redux/contacts/Actions";

class Contacts extends Component {
  state = {
    items: [],
    filter: "",
  };

  handleSubmit = (term) => {
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = this.state.items.some(
      (item) => item.name === term.name
    );
    if (isDuplicate) {
      alert("Контакт: " + term.name + " уже существует ");
      return;
    }

    const newTodo = {
      id: uuid(),
      name: term.name,
      number: term.number,
    };
    this.props.addNewToList(newTodo);
  };

  render() {
    const { items, filter } = this.props;

    return (
      <div className="container">
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={styles.titleContact}>Contacts</h2>
        <div className={styles.block}>
          <Filter filter={filter} handleChange={this.props.handleChange} />
          <ContactsList items={items} handleDelete={this.props.handleDelete} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  const items = state.contacts.items;
  const filter = state.contacts.filter;
  console.log(filter);
  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredItems,
    filter: state.filter,
  };
};

const mapDispatch = {
  addNewToList,
  handleDelete: deletedItem,
  handleChange: filterChange,
};

export default connect(mapState, mapDispatch)(Contacts);
