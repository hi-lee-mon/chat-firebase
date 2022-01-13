import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../firebase/auth'

// TODO:ログイン時にメッセージを表示する

export const ChatRoom = () => {
  // state
  const [username, setUsername] = useState<string | null | undefined>("John Do");

  // Navigate
  const navigate = useNavigate();

  // ログアウト処理
  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <div>
      <h3>Home画面</h3>
      <div>ログイン中のユーザ名:<span style={{ fontWeight: "bold" }}>{username}</span></div>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  )
}
