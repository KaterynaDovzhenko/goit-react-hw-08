import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";

export default function ContactsPage() {
  return (
    <>
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      <ContactList></ContactList>
    </>
  );
}
