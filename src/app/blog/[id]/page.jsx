import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus nostrum ullam enim tempora alias assumenda, porro
            ipsum autem non ipsa consequatur quas sed, asperiores veniam. Nam
            aliquam inventore quasi adipisci dolores, at ipsa est possimus
            numquam aliquid autem veniam expedita error facere sit quod tempore
            iure. Quos molestias tempora quisquam!
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem doloremque consequuntur at quam adipisci aperiam
          consectetur obcaecati dolorem dicta est, officiis earum dolor
          voluptates ullam. Asperiores dolorem, non assumenda earum voluptas
          nobis cum. Commodi reiciendis dolorem aliquam vitae, et neque sint
          aperiam amet dignissimos unde vel repellat ex vero laboriosam. Unde
          totam commodi, velit perspiciatis quis error aspernatur sunt soluta
          nulla aut magnam perferendis nostrum officiis reiciendis similique
          excepturi vero qui odit repellat reprehenderit dicta eius nemo? Minima
          quis libero fugit harum, dolor ducimus voluptatem earum ad! Placeat
          facilis culpa et sint vitae sed architecto. Labore quis quos ab
          suscipit rerum libero illum! Natus eius similique minus quod debitis
          ipsa soluta molestiae enim? Nostrum, error voluptate quaerat, vitae,
          corrupti assumenda expedita voluptas nulla eaque iusto nihil! Deserunt
          exercitationem omnis, dolores quidem ducimus assumenda voluptatem eos
          quod vero ipsum similique minima eaque odit esse delectus fugiat
          reprehenderit facere dignissimos illum doloribus enim. Et, facere quod
          laboriosam nostrum quisquam voluptates aperiam at, dicta aspernatur
          laborum iste accusamus ratione deleniti ut. Vel odit non velit
          blanditiis expedita. Dicta facilis dignissimos, hic, amet assumenda
          modi aspernatur esse sed iure saepe maxime cumque! Non adipisci,
          repudiandae illum deleniti minus beatae? Sint, culpa iste. Et, aut!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
