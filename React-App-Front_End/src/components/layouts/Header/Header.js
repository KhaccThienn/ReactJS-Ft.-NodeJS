/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import headerStyle from "./header.module.css";

const cx = classNames.bind(headerStyle);

function Header() {
    return (
        <>
            <nav className={cx("navbar navbar-expand-sm navbar-light bg-light")}>
                <Link className={cx("navbar-brand")} to={"/"}>Navbar</Link>
                <button className={cx("navbar-toggler d-lg-none")} type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={cx("collapse navbar-collapse")} id="collapsibleNavId">
                    <ul className={cx("navbar-nav mr-auto mt-2 mt-lg-0")}>
                        <li className={cx("nav-item active")}>
                            <Link className={cx("nav-link")} to={"/"}>Home</Link>
                        </li>
                        <li className={cx("nav-item")}>
                            <Link className={cx("nav-link")} to={"/about"}>About</Link>
                        </li>
                        <li className={cx("nav-item")}>
                            <Link className={cx("nav-link")} to={"/category"}>Category</Link>
                        </li>
                        <li className={cx("nav-item dropdown")}>
                            <Link className={cx("nav-link dropdown-toggle")} to={"/"} id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</Link>
                            <div className={cx("dropdown-menu")} aria-labelledby="dropdownId">
                                <Link className={cx("dropdown-item")} to={"/login"}>Login</Link>
                                <Link className={cx("dropdown-item")} to={"/register"}>Register</Link>
                            </div>
                        </li>
                    </ul>
                    <form className={cx("form-inline my-2 my-lg-0")}>
                        <input className={cx("form-control mr-sm-2")} type="text" placeholder="Search" />
                        <button className={cx("btn btn-outline-success my-2 my-sm-0")} type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header