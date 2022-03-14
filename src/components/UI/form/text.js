import styles from "./text.module.css";

const Text = (props) => {
  return (
    <input
      type="text"
      className={`${props.className} ${styles.text} text_ui`}
      placeholder={`${props.placeholder ? props.placeholder : ""}`}
      id={`${props.id}`}
      name={`${props.name}`}
    />
  );
};
export default Text;
