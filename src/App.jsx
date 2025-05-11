import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-grey d-flex flex-column">
      <NavBar />
      <Footer />
    </div>
  )
}

export default App
