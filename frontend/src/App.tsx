import { useInitialTheme } from "hooks/useInitialTheme";
import { Main } from "pages";

function App() {
  useInitialTheme();
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
