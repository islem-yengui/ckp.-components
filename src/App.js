import logo from './logo.svg';
import './App.css';
import Address from './Profile/Address';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';

function App() {
  return (
    <div className="App">
     <ProfilePhoto />
     <FullName />
     <Address />

    </div>
  );
}

export default App;
