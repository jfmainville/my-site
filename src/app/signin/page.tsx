import styles from "./page.module.scss";

export default async function SignInPage() {
  return (
    <div className={styles.Signin}>
      <div className={styles.Container}>
        <a href="/api/auth/login">Login</a>
      </div>
    </div>
  );
}
