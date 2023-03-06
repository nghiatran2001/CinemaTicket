import clsx from "clsx";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={clsx(styles.footer_width)}>
        <div className={clsx(styles.footer_content)}>
          <div className={clsx(styles.footer_intro)}>
            <h2>GIỚI THIỆU</h2>
            <p>* VỀ CHÚNG TÔI</p>
            <p>* QUY CHẾ HOẠT ĐỘNG</p>
            <p>* CHÍNH SÁCH BẢO MẬT</p>
          </div>
          <div className={clsx(styles.footer_cinema)}>
            <h2>GÓC ĐIỆN ẢNH</h2>
            <p>* THỂ LOẠI PHIM</p>
            <p>* BÌNH LUẬN PHIM</p>
            <p>* PHIM HAY THÁNG</p>
          </div>
          <div className={clsx(styles.footer_support)}>
            <h2> HỖ TRỢ</h2>
            <p>* GÓP Ý</p>
            <p>* RẠP / GIÁ VÉ</p>
            <p>* TUYỂN DỤNG</p>
          </div>
          <div className={clsx(styles.footer_connect)}>
            <h2>KẾT NỐI VỚI CHÚNG TÔI</h2>
            <p>* Hotline: +84 933.833.733</p>
            <p>* Facebook: Cinema STU</p>
            <p>* Mail: cinemastu@gmail.com</p>
          </div>
        </div>
      </footer>
      <div className={clsx(styles.footer)}>
        <p>
          Công Ty Cổ Phần Phim Cinema STU, Tầng 6, 180 Cao Lỗ, Quận 8, Tp. Hồ
          Chí Minh Xem thêm tại: https://www.cinemastu.vn/
        </p>
      </div>
    </>
  );
};

export default Footer;
