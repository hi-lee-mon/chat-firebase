import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../firebase/auth';

export const Login = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Navigate
  const navigate = useNavigate();

  // 関数
  const handleLogin = async () => {
    const isSccess = await login(email, password);
    console.log(isSccess)
    if (!isSccess) {
      setMessage("ログインに失敗しました。");
      return
    }
    navigate("/ChatRoom");
  }

  // jsx
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid", height: "auto", width: "20vw", minWidth: "300px" }}>
        <h5 style={{ color: "red" }}>{message}</h5>
        <div style={{ display: "grid", gap: "20px", textAlign: "center" }}>
          <h2>ログイン</h2>
          <div>
            <p style={{ margin: 0 }}>Email</p>
            <input type={"text"} value={email} onChange={({ target }) => setEmail(target.value)} style={{ width: "100%", boxSizing: "border-box" }} />
          </div>
          <div>
            <p style={{ margin: 0 }}>Password</p>
            <input type={"password"} value={password} onChange={({ target }) => setPassword(target.value)} style={{ width: "100%", boxSizing: "border-box" }} />
          </div>
          <button onClick={handleLogin} style={{ margin: "20px 0px 0px 0px" }}>ログイン</button>
          <Link to="/signin">アカウントを持っていませんか？</Link>
        </div>
      </div>
    </div>
  )
}
