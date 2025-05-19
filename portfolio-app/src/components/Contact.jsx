import React, { useState } from 'react';
import "../styles/layout.css";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message) {
      alert('メールアドレスとメッセージを入力してください。');
      return;
    }

    const savedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    const newEntry = {
      id: Date.now(),
      email,
      message,
    };
    localStorage.setItem('contactMessages', JSON.stringify([...savedMessages, newEntry]));

    setEmail('');
    setMessage('');
    alert('メッセージを送信しました。');
  };

  return (
    <section id="contact" className="gray1 py-5 container">
      <h3 className="str2">Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="str2">
          <label htmlFor="emailInput" className="form-label">Eメールアドレス</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="str2">
          <label htmlFor="messageTextarea" className="form-label">メッセージ</label>
          <textarea
            className="form-control"
            id="messageTextarea"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">送信</button>
      </form>
    </section>
  );
};

export default Contact;
