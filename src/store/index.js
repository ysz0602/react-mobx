import React from "react";
import { ListStore } from "./list.Store";
import { CounterStore } from "./counter.Store";
class RootStore {
  constructor() {
    // 对子模块进行实例化操作
    // 将来实例化根store的时候
    // 根store有两个属性 分别是counterStore和listStore
    this.counterStore = new CounterStore();
    this.listStore = new ListStore();
  }
}

// 实例化操作
const rootStore = new RootStore();

// 使用react context机制 完成统一方法封装
// 核心目的：让每个业务组件可以通过统一一样的方法获取store中的数据
// 查找机制：useContext优先从Provider value找 如果找不到 就会找
// createContext方法传递过来的默认参数
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);

export { useStore };
