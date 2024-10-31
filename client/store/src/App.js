import logo from './logo.svg';
import './App.css';
// import NewPage from './newPage';
// import ResponsiveAppBar from './nav.js'
// import ButtonAppBar from './componentes/navBar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './componentes/home';
import News from './componentes/news';
import Counter from './componentes/counter';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home name="Mohammed"/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/counter' element={<Counter/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App; // export => يُستخدم لتصدير الوظائف، الكائنات، أو المتغيرات من ملف بحيث يمكن استخدامها في ملفات أخرى.
