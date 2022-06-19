import { useRef } from "react";
import styles from "../../styles/Contact.module.css";
import { error, pending, success } from "../../helpers/notification-utils";

function ContactForm({ setNotif }) {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postBody = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      message: messageRef.current.value,
    };

    if (
      emailRef.current.value &&
      nameRef.current.value &&
      messageRef.current.value
    ) {
      setNotif(pending);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postBody),
        });

        const data = await response.json();

        console.log(data);

        if (data.error) {
          setNotif(error);
        }

        if (data.data) {
          setNotif(success);
        }

        emailRef.current.value = "";
        nameRef.current.value = "";
        messageRef.current.value = "";
      } catch (err) {
        setNotif(error);
      }

      setTimeout(() => {
        setNotif(null);
      }, 2000);
    }
  };
  return (
    <section className={styles.contact}>
      <h1>How can I help?</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.upperForm}>
          <div className={styles.inputDiv}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} required />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor="name">Name</label>
            <input id="name" ref={nameRef} required />
          </div>
        </div>

        <div style={{ padding: "10px" }}>
          <label htmlFor="message">Message</label>
          <textarea rows={5} id="message" ref={messageRef} />
        </div>

        <button>Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
