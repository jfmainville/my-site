import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div>Admin</div>
      <div>
        <button type="submit">
          <a href="/api/auth/logout">Logout</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
