import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";


function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="HTML" description="backbone of the web" />
        <Card title="css" description="design layer of the web" />
        <Card title="JS" description="makes web pages interactive." />
        <Card title="React" description="creates dynamic, scalable, and efficient UIs with reusable components." />
      </div>
      <Footer />
    </>
  )
}

export default App