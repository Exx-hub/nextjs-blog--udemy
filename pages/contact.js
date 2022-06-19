import { useState } from "react";
import Notification from "../components/layout/Notification";
import ContactForm from "../components/ui/ContactForm";

function ContactPage() {
  const [notif, setNotif] = useState(null);
  return (
    <>
      <ContactForm setNotif={setNotif} />
      {notif && <Notification values={notif} />}
    </>
  );
}

export default ContactPage;
