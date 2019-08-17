<template>
  <div class="home">
    <md-steppers md-alternative :md-active-step="this.$store.state.current_step">
      <md-step id="step-pumpkins" md-label="Pumpkins">
        <Pumpkins />
      </md-step>
      <md-step id="step-gourds" md-label="Gourds">
        <Gourds />
      </md-step>
      <md-step id="step-other" md-label="Other">
        <Other />
      </md-step>
      <md-step id="step-total" md-label="Total">
        <Total />
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import Pumpkins from "@/components/tabs/pages/Pumpkins.vue";
import Gourds from "@/components/tabs/pages/Gourds.vue";
import Other from "@/components/tabs/pages/Other.vue";
import Total from "@/components/tabs/pages/Total.vue";

export default {
  name: "StepperPage",
  components: {
    Pumpkins,
    Gourds,
    Other,
    Total
  },
  props: {}
};
</script>




