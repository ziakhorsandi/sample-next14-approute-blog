import styles from './footer.module.css';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MYLOGO</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
        maiores?
      </div>
    </div>
  );
};

export default Footer;
