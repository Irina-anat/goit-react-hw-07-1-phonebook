import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
import { useGetContactsQuery } from 'redux/contactsSlice';


export const App = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  console.log('data', contacts); //(4) [{…}, {…}, {…}, {…}]
  console.log('error', error);
  console.log('isLoading', isLoading);

 // const state = useSelector(state => state);
 //console.log(state); //{contacts: {…}}
  
  return (
    <div className={css.container__phonebook}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList contacts={contacts} />
      </Section>
    </div>
  );
};
