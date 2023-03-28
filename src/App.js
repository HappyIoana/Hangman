// Import the two components to be rendered on this page:
import Body from "./components/Body";
import Header from "./components/Header";
// Create a function component that returns the header and body components:
function App() {
  return (
    <div className="main-container">
      <Header />
      <Body />
    </div>
  );
}

export default App;
