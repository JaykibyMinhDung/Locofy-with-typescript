import { FunctionComponent } from "react";
import styles from "./AdminLoginPlugin.module.css";

const AdminLoginPlugin: FunctionComponent = () => {
  return (
    <div className={styles.adminLoginPlugin}>
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <div className={styles.image2} />
          <b className={styles.atcGroup}>ATC Group</b>
        </div>
        <div className={styles.gr2Parent}>
          <div className={styles.gr2}>
            <div className={styles.input}>
              <div className={styles.whatIsYour}>What is your name?</div>
              <div className={styles.username}>Username</div>
            </div>
            <div className={styles.input}>
              <div className={styles.yourEmail}>Your Email</div>
              <div className={styles.username}>Password</div>
            </div>
          </div>
          <div className={styles.forgotPassword}>Forgot Password?</div>
          <div className={styles.buttonLarge}>
            <div className={styles.primaryColor} />
            <div className={styles.redColor} />
            <div className={styles.outlinePrimaryColor} />
            <div className={styles.disabledColor} />
            <div className={styles.grayText}>LOGIN</div>
            <div className={styles.blackText1}>LOGIN</div>
            <div className={styles.blackText2}>LOGIN</div>
            <div className={styles.yellowText}>LOGIN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPlugin;
