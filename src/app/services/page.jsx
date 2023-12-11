import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Services = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Service</h1>
      <div className={styles.items}>
        <Link href="/portfolio/physiotherapie" className={styles.item}>
          <span className={styles.title}>Physiotherapie</span>
        </Link>
        <Link href="/portfolio/aromatherapie" className={styles.item}>
          <span className={styles.title}>Aromatherapie</span>
        </Link>
        <Link href="/portfolio/osteopathie" className={styles.item}>
          <span className={styles.title}>Osteopathie</span>
        </Link>
        
        <Link href="/services/reflexologie" className={styles.item}>
          <span className={styles.title}>Reflexologie</span>
        </Link>

        {/* <Link href="/services/cloud-development" className={styles.item}>
          <span className={styles.title}>Unani</span>
        </Link>

        <Link href="/services/cloud-development" className={styles.item}>
          <span className={styles.title}>Phytotherapie</span>
        </Link>

        <Link href="/services/cloud-development" className={styles.item}>
          <span className={styles.title}>Sablotherapie</span>
        </Link>
        
        <Link href="/services/cloud-development" className={styles.item}>
          <span className={styles.title}>Homeopathie</span>
        </Link>
        
        <Link href="/services/cloud-development" className={styles.item}>
          <span className={styles.title}>Acupuncture</span>
        </Link>

        <Link href="/services/cloud-development" className={styles.item}>
          <span className={styles.title}>Acupression</span>
        </Link>

        <Link href="/services/cloud-development" className={styles.item}>
          <span className={styles.title}>Ventousotherapie</span>
        </Link> */}

      </div>
    
    </div>
  )
}

export default Services;