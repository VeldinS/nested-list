import './App.css'
import List from "./components/List";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBRL97VYfjA0WyP6ODK50I-zKewXvU8d6c",
    authDomain: "nested-list-e497f.firebaseapp.com",
    projectId: "nested-list-e497f",
    storageBucket: "nested-list-e497f.appspot.com",
    messagingSenderId: "946324038363",
    appId: "1:946324038363:web:07cf431ed06c89bea622fe",
    measurementId: "G-4BEWMSR32J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
          <div className="app-content">
              <h1 className="app-title">Nested List</h1>
              <List/>
          </div>
  )
}

export default App;
