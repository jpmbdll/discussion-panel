import styles from "./discussion-item.module.css";
import Avatar from "../UI/avatar/avatar";
import { GoGlobe, GoKebabVertical } from "react-icons/go";
import { BsReply, BsStar, BsStarFill, BsBookmark } from "react-icons/bs";
import { MdOutlineAddReaction } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
const DiscussionItem = ({
  id,
  img,
  fullName,
  publishedDate,
  isPublic,
  hasBookmark,
  hasSnapshot,
  snapshot,
  message,
  actions,
}) => {
  return (
    <div
      className={styles.discussionItem_container}
      id={`${id}-${publishedDate}`}
    >
      <div className={styles.header}>
        <Avatar src={img} className={styles.discussionAvatar} />
        <span className={styles.name}>{fullName} {isPublic && <GoGlobe />}</span>
        <span className={styles.published}>{publishedDate}</span>
        <span className={styles.menu}>
          <GoKebabVertical />
        </span>
      </div>
      <div className={styles.body}>
        <p className={styles.msg}>{message} </p>
        {hasSnapshot && snapshot && (
          <a target="_blank" href={require(`../../assets/${snapshot}`)}>
            <img
              src={require(`../../assets/${snapshot}`)}
              alt={`${snapshot}`}
              className={styles.snapshot}
            />
          </a>
        )}
        {hasBookmark && (
          <div className={styles.applyBookmark}>
            <BsBookmark /> Apply bookmark
          </div>
        )}
      </div>
      <div className={styles.actions}>
        <div>
          <BsReply />
          <span>{actions.replies}</span>
        </div>
        <div>
          <MdOutlineAddReaction />
          <span>{actions.reacts}</span>
        </div>
        <div>
          <FiShare2 />
          <span>{actions.shares}</span>
        </div>
        <div>{actions.starred ? <BsStarFill /> : <BsStar />}</div>
      </div>
    </div>
  );
};

export default DiscussionItem;
