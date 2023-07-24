import { useDeleteContactMutation } from 'redux/contactsSlice';
import css from './ContactList.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  console.log(contacts);
  const [deteleContact, {isLoading}] = useDeleteContactMutation();

  //const dispatch = useDispatch();
  //console.log(contacts)
  //const filterContacts = useSelector(selectFilter);
  // console.log(filterContacts);
  /*const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );*/
  //console.log(visibleContacts)


  return (
    <ul>
      {contacts &&
        contacts.map(({ name, phone, id }) => (
          <li className={css.contact__list} key={id}>
            <p>{name}</p>
            <p>{phone}</p>
            <button
              value={id}
              onClick={() =>
                deteleContact(id) &&
                Notify.failure(`Contact successfully deleted.`)}
              type="button"
              disabled={isLoading}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
     // number: PropTypes.string.isRequired,
    })
  ),
};
    

