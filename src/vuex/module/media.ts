// 存储当前屏幕可用宽度
interface StateType {
  inner_width: number;
  commit: (mutation: string, type: any) => void;
}

export default {
  state: {
    inner_width: window.innerWidth,
  },
  getters: {
    inner_width(state: StateType) {
      return state.inner_width;
    },
  },
  mutations: {
    change_inner_width(state: StateType, inner_width: number) {
      state.inner_width = inner_width;
    },
  },
  actions: {
    change_inner_width_action(state: StateType, type: number) {
      state.commit('change_inner_width', type);
    },
  },
};
