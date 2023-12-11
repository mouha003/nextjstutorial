import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
          Quae, molestias cum! Incidunt laborum explicabo dolores eos, 
          eveniet harum autem rem corporis repellendus reiciendis voluptatem 
          hic libero quo atque dolorem tempore.
          Quae, molestias cum! Incidunt laborum explicabo dolores eos...
          </p>
          <div className={styles.author}>
            <Image 
              src=""
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
            <Image 
              src=""
              alt=''
              width={40}
              height={40}
              className={styles.image}
            />
          </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolor voluptates alias impedit vero suscipit veniam eos repellendus, 
         atque voluptatum nam, obcaecati labore, praesentium quia ipsam minus 
         reprehenderit neque ipsa tempore.
        </p>
      </div>

    </div>
  )
}

export default BlogPost