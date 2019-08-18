<template>
  <div>
    <md-input v-model="countout" type="number" min="0" id="countid" @change="computetotal"></md-input>
    <span class="filler">{{ prefix }}</span>
    <label for="countid">{{ label }} each</label>
    <span class="rowtotal">&nbsp;is $ {{ total }}</span>
  </div>
</template>

<script>
//import { EventBus } from "@/main.js";

export default {
  name: "row",
  props: {
    countof: { type: String, default: "0" },
    cost: { type: String, default: "0" },
    label: { type: String, default: "n/a" },
    prefix: { type: String, default: " " }
  },
  methods: {
    computetotal: function() {
      this.total = parseFloat(this.$props.cost) * parseInt(this.countout);
      this.$emit("rowchanged", {
        label: this.$props.label,
        countof: this.countout,
        total: this.total
      });
    }
  },
  data() {
    let countout = 0;
    let total = 0;

    return {
      labelout: this.$props.label,
      countout: countout,
      total: total
    };
  }
};
</script>