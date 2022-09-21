// 1、导入countStore
import { counterStore } from "./store/counter";
// 2、导入中间件连接mobx react 完成响应式变化
import { observer } from "mobx-react-lite";
function App() {
  return (
    <div className="App">
      {counterStore.count}
      {counterStore.filterList.join("-")}
      <button onClick={counterStore.addCount}>+</button>
      <button onClick={counterStore.addList}>修改数组</button>
    </div>
  );
}
// 包裹App
export default observer(App);
