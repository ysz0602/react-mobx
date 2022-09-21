import { makeAutoObservable, computed } from "mobx";

class CounterStore {
  // 1、定义数据
  count = 0;
  list = [1, 2, 3, 4, 5, 6];
  constructor() {
    // 2、把数据弄成响应式
    makeAutoObservable(this);
  }
  get filterList() {
    return this.list.filter((item) => item > 2);
  }
  addList = () => {
    this.list.push(7, 8, 9);
  };

  // 3、定义action函数(修改数据)
  addCount = () => {
    this.count++;
  };
}
// 4、实例化 然后导出给react使用
// const counterStore = new CounterStore()
export { CounterStore };
