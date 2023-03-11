import Home from './Home';
import Navbar from './Navbar';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />

      {/* inline css as a object */}
      <p hidden style={{
        'color': 'red',
        'backgroundColor': 'black'
      }}>Hidden One</p>
    </div>
  );
}

export default App;
