import { observer } from "mobx-react-lite";
import { useStore } from "./store/index";
function App() {
  const { counterStore } = useStore();
  return (
    <div className="App">
      {counterStore.count}
      <button onClick={counterStore.addCount}>+</button>
    </div>
  );
}
// 包裹App
export default observer(App);
