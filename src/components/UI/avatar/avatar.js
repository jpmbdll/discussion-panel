import styles from "./avatar.module.css";
const Avatar = (props) => {
  return (
    <div className={`${styles.avatar_container} ${props.className}`}>
      <img
        src={props.src ? require(`../../../assets/${props.src}.jpg`) : null}
        alt={props.alt}
      ></img>
    </div>
  );
};

export default Avatar;
