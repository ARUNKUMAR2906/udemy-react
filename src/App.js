import Navbar from "./components/navbar";
import Category from "./components/category";
import Sale from "./components/sales";
import Cards from "./components/cards";
import Topic from "./components/topics";
import Popular from "./components/popular";
import Footer from "./components/footer";
const App = ()=>{
  return(
    <>
      <Navbar/>
      <Category/>
      <Sale/>
      <Cards/>
      <Topic/>
      <Popular/>
      <Footer/>
    </>
  )
}

export default App;
