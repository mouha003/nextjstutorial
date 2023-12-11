import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText} >
          <h1 className={styles.imgTitle}> Wellness Therapy </h1>
          <h2 className={styles.imgDescription}>Clasical Vintage Traditional Therapy Center</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item} >
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.Description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Deserunt quae unde voluptatum? Possimus repellat repudiandae 
            id voluptatum facilis temporibus, quidem, laboriosam iure
             aliquam similique totam mollitia, saepe quibusdam unde aliquid.
             <br/>
             <br/>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Deserunt quae unde voluptatum? Possimus repellat repudiandae 
            id voluptatum facilis temporibus, quidem, laboriosam iure
             aliquam similique totam mollitia, saepe quibusdam unde aliquid.
             </p>
        </div>
        <div className={styles.item} >
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.description}>
            Deserunt quae unde voluptatum? Possimus repellat repudiandae 
            id voluptatum facilis temporibus, quidem, laboriosam iure
             aliquam similique totam mollitia, saepe quibusdam unde aliquid.
             - Creative Illustarion
             <br />
             <br /> - Dynamic Websites
             <br/>
             <br/> - Fast and Handy 
             <br/>
             <br/> - Mobile Apps
          </p>

          <Button url="contact" text="Contact Us"/>
        </div>
      </div>
      
    </div>
  )
}

export default About;