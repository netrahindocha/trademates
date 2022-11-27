import './App.css';
import SideNav from './Components/SideNav';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
      <div className="flexRow">
        <SideNav />
        <TopBar />
      </div>
    </div>
  );
}

export default App;
