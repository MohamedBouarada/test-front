import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sideBar';
import MainContent from './components/mainContent/mainContent';

function App() {
  const sidebarItems = ["Item 1", "Item 2", "Item 3"];
  const cards = [
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
  ];
  return (
    <div className="app">
      <Sidebar items={sidebarItems} />
      <MainContent title="Main Content Title" cards={cards} />
    </div>
  );
}

export default App;
