import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data }) {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <div>
        <p>{data.name}</p>
        <p>{data.number}</p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(data))}
      >
        Delete
      </button>
    </div>
  );
}
