import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PostCard.module.css";
const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.image_wrapper}>
        <Image
          className={styles.image}
          priority
          src={`https:${post.fields.thumbnail.fields.file.url}`}
          layout="fill"
          alt="thumbnail"
        />
      </div>
      <div className="content">
        <Link href={`/${post.fields.slug}`}>
          <a>
            <h4 className="post_title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h4>
          </a>
        </Link>

        <p className={styles.excerts}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          dolorem cupiditate officia reprehenderit, vitae facere.
        </p>
      </div>
    </div>
  );
};

export default PostCard;
