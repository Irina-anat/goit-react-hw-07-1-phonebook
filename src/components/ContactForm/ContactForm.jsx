import {useAddContactMutation, useGetContactsQuery,} from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  console.log(contacts);
  const [addContact] = useAddContactMutation();
  //console.log(result)

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const lowerCaseName = name.toLowerCase();
    const isContactExist = contacts.some(
      contact =>
        (contact.name.toLowerCase() === lowerCaseName &&
          contact.phone === number) ||
        contact.phone === number ||
        contact.name.toLowerCase() === lowerCaseName
    );
    if (!isContactExist) {
      const result = await addContact({ name: name, phone: number });
      if (result.data) {
        Notify.success(`The contact ${name}  has been successfully added.`);
      } else {
        Notify.error('An error occurred while adding the contact.');
      }
    } else {
      Notify.warning(
        `Contact with that ${name} or ${number} is already present in the phone book.`
      );
    }
    form.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+( [A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+)?"
            title="Enter last name or first name or both last name and first name"
            required
            // value={contacts.name}
          />
        </label>
        <label>
          <input
            type="tel"
            name="number"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
            required
            // value={contacts.number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

Notify.init({
  width: '450px',
  fontSize: '20px',
  position: 'center-top',
  closeButton: false,
});
