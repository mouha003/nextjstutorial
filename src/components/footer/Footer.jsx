import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {

  return (
    <div className={styles.container}>
        <div>©2024 YT Fashion. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15}  className={styles.icon} alt='Wellness Therapy Facebook'/>
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt='Wellness Therapy Instagram'/>
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt='Wellness Therapy Twitter'/>
          <Image src="/4.png" width={15} height={15} className={styles.icon}  alt='Wellness Therapy Youtube'/>
        </div>
    </div>
  )
}

export default Footer;