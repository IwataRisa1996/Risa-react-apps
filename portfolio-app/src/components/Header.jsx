//ヘッダー
import React from "react";
import "../styles/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bluegray1 py-3 border-bottom">
      <div className="container-fluid d-flex align-items-center">
        <div className="me-auto">
          <h1 className="str1 mb-0">Risa Iwata</h1>
          <h4 className="str1">Portfolio</h4>
        </div>
        <nav>
          {/* リンクによりpath呼び出し */}
          <ul className="nav link-secondary">
            <li className="nav-item"><Link to="/" className="nav-link">HOME</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">お問い合わせ</Link></li>
            <li className="nav-item"><Link to="/works" className="nav-link">作った作品</Link></li>
            <li className="nav-item"><Link to="/admin" className="nav-link">管理画面</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;