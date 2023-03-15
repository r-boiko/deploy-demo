import Users from "./components/Users";
import { usersClassStore } from "./components/Users/storeClass";
// import { usersFuncStore } from "./components/Users/storeFunc";
import "antd/dist/reset.css";
import "./App.css";

function App() {
  return (
    <div className="App" data-testid='app'>
      <Users store={usersClassStore} />
    </div>
  );
}

export default App;
