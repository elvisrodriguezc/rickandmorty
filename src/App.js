import './App.css';
import { AppContext } from './context/AppContext'
import { useInitialState } from './hooks/useInitialState';
import { AppUI } from './AppUI';

function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <AppUI />
      </div>
    </AppContext.Provider>
  );
}

export default App;
