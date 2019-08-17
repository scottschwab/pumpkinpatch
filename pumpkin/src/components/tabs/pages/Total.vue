<template>
  <div class="tab">
    <md-content>
      <div>
        <div>
          <span class="count">{{ pumpkin_count }}</span>
          <label for="subtotaltotal">&nbsp;pumpkins totals:&nbsp;</label>
          <span class="money,total">{{ pumpkin_total }}</span>
        </div>
        <div>
          <span class="count">{{ gourd_count }}</span>
          <label for="grandtotal">&nbsp;gourds totals:&nbsp;</label>
          <span class="money,total">{{ gourd_total }}</span>
        </div>
        <div>
          <span class="count">{{ other_count }}</span>
          <label for="grandtotal">&nbsp;other total:&nbsp;</label>
          <span class="money,total">{{ other_total }}</span>
        </div>
        <div>
          <span class="count">{{ grand_count }}</span>
          <label for="grandtotal">&nbsp;items total:&nbsp;</label>
          <span class="money,total">{{ grand_total }}</span>
        </div>
      </div>
    </md-content>
  </div>
</template>

<script>
// @ is an alias to /src
import { EventBus } from "@/main.js";

export default {
  name: "Total",
  components: {},
  methods: {
    compute_totals: function() {
      this.pumpkin_count = 0;
      this.pumpkin_total = 0;
      this.gourd_count = 0;
      this.gourd_total = 0;
      this.other_count = 0;
      this.other_total = 0;
      this.grand_count = 0;
      this.grand_total = 0;
      for (let entry in this.$store.state.pumpkins) {
        this.pumpkin_count = this.pumpkin_count + entry[1];
        this.pumpkin_total = this.pumpkin_total + entry[1] * entry[2];
      }
      for (let entry in this.$store.state.gourds) {
        this.gourd_count = this.gourd_count + entry[1];
        this.gourd_total = this.gourd_total + entry[1] * entry[2];
      }
      for (let entry in this.$store.state.other) {
        this.other_count = this.other_count + entry[1];
        this.other_total = this.other_total + entry[1] * entry[2];
      }
      this.grand_count =
        this.pumpkin_count + this.gourd_count + this.other_count;
      this.grand_total =
        this.pumpkin_total + this.gourd_total + this.other_total;
    }
  },
  mounted() {
    EventBus.$on("totalchanged", function() {
      console.log("hi");
      this.compute_totals();
    });
  },
  data: () => ({
    pumpkin_count: 0,
    pumpkin_total: 0,
    gourd_count: 0,
    gourd_total: 0,
    other_count: 0,
    other_total: 0,
    grand_count: 0,
    grand_total: 0
  })
};
</script>
