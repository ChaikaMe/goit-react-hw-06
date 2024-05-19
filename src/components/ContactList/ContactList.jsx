import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filter = useSelector((state) => state.filters.filters.name);
  const visibleContacts = contacts.filter((contactItem) =>
    contactItem.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map((ContactItem) => (
        <li key={ContactItem.id}>
          <Contact data={ContactItem} />
        </li>
      ))}
    </ul>
  );
}
