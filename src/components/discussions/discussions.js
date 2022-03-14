import { useState } from "react";
import { BsFunnel, BsStar, BsStarFill, BsSearch } from "react-icons/bs";
import Avatar from "../UI/avatar/avatar.js";
import Text from "../UI/form/text.js";
import styles from "./discussions.module.css";
import DiscussionItem from "./discussion-item.js";
import ProfileData from "../../data/profile";
import DiscussionsData from "../../data/discussion";

const { profile } = ProfileData;
const { discussions } = DiscussionsData;

const Discussions = () => {
  const [star, setStar] = useState(false);
  return (
    <>
      <div className={styles.headerActions}>
        <BsFunnel />
        {star && (
          <BsStarFill
            onClick={() => {
              setStar((star) => !star);
            }}
          />
        )}
        {!star && (
          <BsStar
            onClick={() => {
              setStar((star) => !star);
            }}
          />
        )}
        <BsSearch />
      </div>
      <hr />
      <div className={styles.headerField}>
        <Avatar src={profile.img} className={styles.profileAvatar_img} />
        <Text placeholder="Create a new discussion" />
      </div>
      <div className={`${styles.discussion_container} ${star && styles.noPosts_container}`}>
        {star && <h3 className={styles.no_posts}>No posts available</h3>}
        {!star &&
          discussions &&
          discussions.map((discussion) => {
            return <DiscussionItem key={discussion.id} {...discussion} />;
          })}
      </div>
    </>
  );
};

export default Discussions;
