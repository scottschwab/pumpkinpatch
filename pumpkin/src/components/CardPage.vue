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

    <md-dialog :md-active.sync="loginDialog" class="logindialog">
      <md-dialog-title>Login</md-dialog-title>
      <md-input v-model="password"></md-input>
      <div class="loginbutton">
        <md-button class="md-primary" @click="checkLogin">Login</md-button>
      </div>
    </md-dialog>
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
import Pumpkins from "./Pumpkins.vue";
import Gourds from "./Gourds.vue";
import Other from "./Other.vue";
import Total from "./Total.vue";

export default {
  name: "CardPage",
  components: {
    Pumpkins,
    Gourds,
    Other,
    Total
  },
  methods: {
    checkLogin() {
      if (this.validLogin == this.password) {
        this.loginDialog = false;
      }
    }
  },

  mounted: function() {
    this.$nextTick(function() {
      this.loginDialog = true;
    });
  },

  props: {},

  data: () => ({
    loginDialog: false,
    password: "***",
    validLogin: "candycorn"
  })
};
</script>
