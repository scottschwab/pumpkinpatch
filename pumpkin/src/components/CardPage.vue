<template>
  <div class="card-expansion">
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Pumpkins</div>
      </md-card-header>
      <md-card-content>
        <Pumpkins />
      </md-card-content>
    </md-card>
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Gourds</div>
      </md-card-header>
      <md-card-content>
        <Gourds />
      </md-card-content>
    </md-card>
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Other</div>
      </md-card-header>
      <md-card-content>
        <Other />
      </md-card-content>
    </md-card>
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Total</div>
      </md-card-header>
      <md-card-content>
        <Total />
      </md-card-content>
    </md-card>
  </div>
</template>


<style lang="css" scoped>
.md-card {
  width: 480px;
  height: 360px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
}
</style>

<script>
import Pumpkins from "@/components/tabs/pages/Pumpkins.vue";
import Gourds from "@/components/tabs/pages/Gourds.vue";
import Other from "@/components/tabs/pages/Other.vue";
import Total from "@/components/tabs/pages/Total.vue";

export default {
  name: "CardPage",
  components: {
    Pumpkins,
    Gourds,
    Other,
    Total
  },
  props: {}
};
</script>



