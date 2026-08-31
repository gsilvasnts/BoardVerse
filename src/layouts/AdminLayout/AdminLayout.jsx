import { Outlet } from "react-router-dom";

import AdminHeader from "../../components/AdminHeader/AdminHeader";
import Footer from "../../components/Footer/Footer";

import styles from "./AdminLayout.module.css";

function AdminLayout() {
  return (
    <div className={styles.layout}>
      <AdminHeader />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AdminLayout;
