import ReactDOM from "react-dom";

import styles from "../../styles/Notification.module.css";

function Notification({ values }) {
  let activeClass = `${styles.notif}` + ` ${styles[values.status]}`;

  return ReactDOM.createPortal(
    <div className={activeClass}>
      <div>{values.title}</div>
      <div>{values.message}</div>
    </div>,
    document.getElementById("notifications")
  );
}

export default Notification;
