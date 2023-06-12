import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/pexel.jpeg"
          fill={true}
          alt="pexel-image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Who are we?
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              dignissimos tempore fugiat ducimus exercitationem perspiciatis
              nostrum consequuntur delectus, pariatur quam praesentium,
              explicabo ea eaque dolorem. Dolores ipsam quasi inventore veniam
              veritatis dolorem accusantium culpa dolor? Natus ut maxime dolore
              architecto beatae. Ab magni esse consequatur quae porro cum
              <br />
              <br />
              suscipit perspiciatis. Dolore expedita error ex. Quo pariatur
              magnam, sunt ipsa rerum quod excepturi magni. Consequatur eius
              temporibus at alias voluptatem? Minima dolorum ducimus doloribus
              minus quidem laboriosam natus neque maiores perspiciatis cum enim,
              quisquam explicabo facere. Consectetur accusamus repellat
              exercitationem quod consequuntur, error incidunt alias laborum
              corrupti vitae quos molestias vel eligendi dignissimos atque nemo
              esse? Animi officiis repellat reprehenderit vel asperiores
              accusamus, aliquam facere corrupti nam ad eaque dicta.
            </p>
          </h1>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>
            What we do?
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              dignissimos tempore fugiat ducimus exercitationem perspiciatis
              <br />
              <br />
              suscipit perspiciatis. Dolore expedita error ex. Quo pariatur
              magnam, sunt ipsa rerum quod excepturi magni. Consequatur eius
              temporibus at alias voluptatem? Minima dolorum ducimus doloribus
              minus quidem laboriosam natus neque maiores perspiciatis cum enim.
            </p>
            <Button url="/contact" text="Contact" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
