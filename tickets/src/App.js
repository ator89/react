
import './App.css';

import {Button} from "react-bootstrap"
import { Entry } from './page/entry/Entry.page';

function App() {
  return (
    <div className="App">
      <Entry/>
      <Button>Guardar</Button>
    </div>
  );
}

export default App;
