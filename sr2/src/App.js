
import './App.css';
import { Books } from './main/Books';
import { Header } from './header/header';
import { Aside } from './aside/aside';
import { Footer } from './footer/footer';

function App() {
  return (
    <>
      <Header/>
      <Books/>
      <Aside/>
      <Footer/>
    </>
  );
}

export default App;

