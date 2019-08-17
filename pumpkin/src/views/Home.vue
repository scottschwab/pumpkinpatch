<template>
  <div class="home">
    <CardPage />
  </div>
</template>

<script>
// @ is an alias to /src
import CardPage from "@/components/CardPage.vue";
//import StepperPage from "@/components/StepperPage.vue";
//import TabsPage from "@/components/TabsPage.vue";
export default {
  name: "home",
  components: {
    CardPage
  }
};
</script>
