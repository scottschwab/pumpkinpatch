<template>
  <div class="home">
    <md-tabs md-elevation="4">
      <md-tab id="tab-pumpkins" md-label="Pumpkins">
        <Pumpkins />
      </md-tab>
      <md-tab id="tab-gourds" md-label="Gourds">
        <Gourds />
      </md-tab>
      <md-tab id="tab-other" md-label="Other">
        <Other />
      </md-tab>
      <md-tab id="tab-total" md-label="Total">
        <Total />
      </md-tab>
      <md-tab id="tab-about" md-label="About">
        <About />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Pumpkins from "@/components/tabs/pages/Pumpkins.vue";
import Gourds from "@/components/tabs/pages/Gourds.vue";
import Other from "@/components/tabs/pages/Other.vue";
import Total from "@/components/tabs/pages/Total.vue";
import About from "@/components/tabs/pages/About.vue";

export default {
  name: "TabsPage",
  components: {
    Pumpkins,
    Gourds,
    Other,
    Total,
    About
  },
  props: {}
};
</script>




