import { Route, Routes } from 'react-router-dom';
import { ChatRoom } from './components/ChatRoom';
import { Login } from './components/Login';
import { Signin } from './components/Signin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/ChatRoom" element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
