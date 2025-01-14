import styles from "./index.module.scss";
import { signOut } from "@/auth";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div>Admin</div>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/signin" });
          }}
        >
          <button type="submit">Logout</button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
