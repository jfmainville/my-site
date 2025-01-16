import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div>Admin</div>
      <div>
        <button type="submit">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
