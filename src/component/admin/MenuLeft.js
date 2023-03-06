import React from "react";
import styles from "./PageAdmin.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
export default function MenuLeft() {
  return (
    <>
      <div className={clsx(styles.admin_left)}>
        <ul>
          <li className={clsx(styles.homepage)}>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>Thống Kê</li>
          <li>
            <Link to="/user">Người Dùng</Link>
          </li>
          <li>
            <Link to="/film">Phim</Link>
          </li>
          <li>
            <Link to="/theater">Rạp</Link>
          </li>
          <li>Logout</li>
        </ul>
      </div>
    </>
  );
}
