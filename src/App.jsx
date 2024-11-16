import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Users />
      <Footer />
    </div>
  );
}
