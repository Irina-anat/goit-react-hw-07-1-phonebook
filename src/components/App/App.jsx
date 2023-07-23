import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
//import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
//import { useEffect } from 'react';
//import { selectError, selectIsLoading } from 'redux/selectors';
//import { fetchContacts } from 'redux/operation';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const App = () => {

  
  const { data, error, isLoading } = useGetContactsQuery();

  if (isLoading) {
    console.log('Запит завантажується.');
  } else if (error) {
    console.log('Сталася помилка під час отримання даних.');
  } else {
    console.log('Дані:', data);
  }


 /* const dispatch = useDispatch(); //щоб отримати посилання на компонент
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);*/

 
  return (
    <div className={css.container__phonebook}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {/*isLoading && !error && <b>Request in progress...</b>*/}
        <ContactList />
      </Section>
    </div>
  );
};
