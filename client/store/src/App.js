import logo from './logo.svg';
import './App.css';
// import NewPage from './newPage';
// import ResponsiveAppBar from './nav.js'
// import ButtonAppBar from './componentes/navBar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './componentes/home';
import News from './componentes/news';
import Counter from './componentes/counter';
import LifecycleDemo from './componentes/life';
import ProductData from './componentes/productDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home name="Mohammed"/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/counter' element={<Counter/>} />
      <Route path='/life' element={<LifecycleDemo/>} />
      <Route path='/product' element={<ProductData/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App; // export => يُستخدم لتصدير الوظائف، الكائنات، أو المتغيرات من ملف بحيث يمكن استخدامها في ملفات أخرى.
