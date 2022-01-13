import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { basicSignin } from '../firebase/auth';

export const Signin = () => {
  // state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Navigate
  const navigate = useNavigate();

  // 関数
  const handleSignin = async () => {
    const { isSuccess, user } = await basicSignin(email, password);
    if (!isSuccess || user === null) {
      setMessage("アカウント登録に失敗しました")
      return;
    }
    updateProfile(user, {
      displayName: username
    })
    navigate("/ChatRoom");
  }

  // jsx
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid", height: "auto", width: "20vw", minWidth: "300px" }}>
        <h5 style={{ color: "red" }}>{message}</h5>
        <div style={{ display: "grid", gap: "20px", textAlign: "center" }}>
          <h2>サインイン</h2>
          <div>
            <p style={{ margin: 0 }}>Username</p>
            <input value={username} onChange={({ target }) => setUsername(target.value)} style={{ width: "100%", boxSizing: "border-box" }} />
          </div>
          <div>
            <p style={{ margin: 0 }}>Email</p>
            <input value={email} onChange={({ target }) => setEmail(target.value)} style={{ width: "100%", boxSizing: "border-box" }} />
          </div>
          <div>
            <p style={{ margin: 0 }}>Password</p>
            <input type={"password"} value={password} onChange={({ target }) => setPassword(target.value)} style={{ width: "100%", boxSizing: "border-box" }} />
          </div>
          <button onClick={handleSignin} style={{ width: "100%" }}>サインイン</button>
          <Link to="/">すでにアカウントを持っていますか？</Link>
        </div>
      </div>
    </div>
  )
}
