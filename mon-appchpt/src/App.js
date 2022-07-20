import "./App.css";
import Sidebar from "./Component/Sidebar";
import CustomNavbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./Component/Form";
const Stylecont = { textContent: "center" };
function App() {
  return (
    <div className="App">
      <div Style={Stylecont}>
        <CustomNavbar />
        <Sidebar />
        <SignIn />
      </div>
    </div>
  );
}
export default App;
