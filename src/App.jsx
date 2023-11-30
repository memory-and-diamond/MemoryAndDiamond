import styles from "./style";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Home, Footer } from "./components";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
