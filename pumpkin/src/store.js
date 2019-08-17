import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pumpkins: [
      ["$6", 6, 0],
      ["$8", 8, 0],
      ["$10", 10, 0],
      ["$12", 12, 0],
      ["$14", 14, 0],
      ["$16", 16, 0],
      ["$18", 18, 0],
      ["$20", 20, 0],
      ["$24", 24, 0],
      ["$30", 30, 0]
    ],
    gourds: [
      ["large", 1, 0],
      ["small", 0.75, 0],
      ["winged large", 1.5, 0],
      ["winded small", 1, 0],
      ["gizmo", 3, 0]
    ],
    other: [
      ["pumpkin face stickers", 0.5, 0],
      ["tealight candles", 0.25, 0],
      ["spider kit", 0.5, 0],
      ["large mum", 5, 0],
      ["small mum", 12, 0]
    ],
    bake_sale: 0,
    donation: 0
  },
  mutations: {},
  actions: {}
});
