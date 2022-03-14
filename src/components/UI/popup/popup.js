import { BsXLg } from "react-icons/bs";
import styles from "./popup.module.css";

// For complex apps, popup state should be managed in a global state management
// send children as bodyProps
const Popup = (props) => {
  const { active, handleClose } = props;
  return (
    <div className={`${styles.popup} ${active && "active"}`}>
      {active && (
        <>
          <div className={styles.header}>
            {props.title}
            <BsXLg className={styles.close_icon} onClick={handleClose} />
          </div>
          {props.children}
        </>
      )}
    </div>
  );
};

export default Popup;
