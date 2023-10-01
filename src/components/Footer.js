import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerItem1}>
        <span>Kwestie prawne</span>
      </div>
      <div className={classes.footerItem2}>
        <span>Centrum ochrony prywatności</span>
      </div>
      <div className={classes.footerItem3}>
        <span>Polityka prywatności</span>
      </div>
      <div className={classes.footerItem4}>
        <span>Ustawienia plików cookie</span>
      </div>
      <div className={classes.footerItem5}>
        <span>O reklamach</span>
      </div>
      <div className={classes.footerItem6}>
        <span>© 2023 Podróba Mutify WM</span>
      </div>
    </footer>
  );
}

export default Footer;
