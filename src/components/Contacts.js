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
  handleDelete = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
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
    // this.setState((prevState) => {
    //   const newItems = [newTodo, ...prevState.items];
    //   return { items: newItems };
    // });
  };

  // =========================
  componentDidMount() {
    console.log("[componentDidMount]");
    const items = localStorage.getItem("items");
    if (items) {
      const parsedItems = JSON.parse(items);
      this.setState({ items: parsedItems });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[componentDidUpdate]");
    if (prevState.items !== this.state.items) {
      localStorage.setItem("items", JSON.stringify(this.state.items));
    }
  }

  render() {
    // const { filter } = this.state;
    // const formattedFilter = filter.toLowerCase().trim();
    // const filteredItems = items.filter((item) =>
    //   item.name.toLowerCase().includes(formattedFilter)
    // );
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
