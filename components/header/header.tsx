import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        {/* TOP BAR */}
        <div className={styles["header-top"]}>
          <div className={styles.logo}>VTVIndex</div>

          <div className={styles["top-actions"]}>
            <a>Truyền hình</a>
            <a>Tin mới nhất</a>
            <a>Lịch sự kiện</a>
            <a>Dữ liệu</a>
            <a>Tìm kiếm</a>
            <a>Thông báo</a>
          </div>
        </div>

        {/* MENU BAR */}
        <div className={styles["header-menu"]}>
          <nav className={styles.nav}>
            <a>Trang chủ</a>
            <a>Mới nhất</a>
            <a>Thời sự</a>
            <a>Thế giới</a>
            <a>Thị trường</a>
            <a>Doanh nghiệp</a>
            <a>Tài chính</a>
            <a>Bất động sản</a>
            <a>Kinh doanh</a>
            <a>Kinh tế</a>
            <a>Công nghệ</a>
            <a>Chuyên đề</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
