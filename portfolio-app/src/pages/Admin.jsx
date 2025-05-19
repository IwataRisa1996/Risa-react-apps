import React, { useState, useEffect } from "react";

const Admin = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);

  const correctPassword = "RisaIwata";

  useEffect(() => {
    if (authenticated) {
      const storedMessages = localStorage.getItem("contactMessages");
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    }
  }, [authenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("パスワードが違います");
    }
  };

  //  削除処理
  const handleDelete = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1); // 指定インデックスを削除
    setMessages(newMessages); // 状態を更新
    localStorage.setItem("contactMessages", JSON.stringify(newMessages)); // ストレージも更新
  };

  return (
    <div className="container py-5">
      {!authenticated ? (
        <form onSubmit={handleLogin}>
          <h3>管理者ログイン</h3>
          <input
            type="password"
            className="form-control my-3"
            placeholder="パスワードを入力"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">ログイン</button>
        </form>
      ) : (
        <div>
          <h3>送信されたメッセージ一覧</h3>
          {messages.length === 0 ? (
            <p>まだメッセージはありません。</p>
          ) : (
            <ul className="list-group mt-3">
              {messages.map((msg, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                  <div>
                    <strong>{msg.email}</strong><br />
                    {msg.message}
                  </div>
                  <button className="btn btn-sm btn-danger ms-3" onClick={() => handleDelete(index)}>
                    削除
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
