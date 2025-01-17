import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div>Admin</div>
      <div>
        <button className={styles.LogoutButton} type="submit">
          <a href="/api/auth/logout">Logout</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
