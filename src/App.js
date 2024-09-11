import TodoContext from './TodoContext';
import Todopage from './page/Todopage';

function App() {
  return (
   <TodoContext>
      <Todopage/>
  </TodoContext>
  );
}

export default App;
