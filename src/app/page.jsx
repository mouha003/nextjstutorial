import Image from 'next/image';
import styles from './page.module.css';
// import Hero from '../../public/hero.png'
import Slider1 from '../../public/slider1.jpg'
import Button from '@/components/Button/Button';
import Services from './services/page';
// import Slider2 from '../../public/slider2.jpg'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Full Circle Wellness to your Body, Mind and Spirit.</h1>
        <p className={styles.description}>Underdanding different types of Therapy treatments to awaken your natural state of health.</p>
        <Button url="/services" text="Learn More"/>
      </div>
      
      <div className={styles.item}>
        <Image src={Slider1} alt='hero img' className={styles.img}/>
      </div>
    </div>
    <Services />
    </>
  )
}
