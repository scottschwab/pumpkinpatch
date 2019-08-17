<template>
  <div class="tab">
    <md-content class="md-scrollbar">
      <md-list>
        <md-list-item v-for="item in this.$store.state.gourds" :key="item">
          <row :label="item[0]" :cost="item[1]" :countof="item[2]" />
        </md-list-item>
      </md-list>
    </md-content>
  </div>
</template>

<script>
// @ is an alias to /src
import row from "@/components/row.vue";
export default {
  name: "Gourds",
  components: { row }
};
</script>
