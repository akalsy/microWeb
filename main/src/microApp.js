import store from "./store";

const microApps = [
  {
    name: "microVue",
    entry: process.env.VUE_APP_SUB_VUE,
    activeRule: "/micro-vue",
  },
  {
    name: "micro-react",
    entry: process.env.VUE_APP_SUB_REACT,
    activeRule: "/micro-react",
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState, // 下发getGlobalState方法
    },
  };
});

export default apps;
