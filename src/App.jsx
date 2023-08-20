import "./App.css";
import {
  Header,
  Testimonies,
  AboutUs,
  Sales,
  FeaturesOne,
  FeaturesTwo,
  Signup,
  Footer,
} from "./containers";
function App() {
  return (
    <div className="app">
      <Header />
      <Testimonies />
      <AboutUs />
      <Sales />
      <FeaturesOne />
      <FeaturesTwo />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
