// 存储当前皮肤
interface StateType {
  skin: string;
  commit: (mutation: string, type: any) => void;
}

export default  {
  state: {
    skin: 'snow_theme',
  },
  getters: {
    skin(state: StateType) {
      return state.skin;
    },
  },
  mutations: {
    change_skin(state: StateType, skin: string) {
      state.skin = skin;
    },
  },
  actions: {
    change_skin_action(state: StateType, type: string) {
      state.commit('change_skin', type);
    },
  },
};
