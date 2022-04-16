<template>
  <div>
    <input v-model="email" type="email" autocomplete="username" required />

    <input v-model="password" type="password" required />

    <button :disabled="!valid" @click="login">
      Login
    </button>

    <button @click="forgetPassword">
      Forget Password
    </button>

    <div v-model="snackbar">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data: () => ({
    valid: true,
    name: "",
    password: "",
    email: "",
    snackbar: false,
    errorMessage: ""
  }),

  methods: {
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          const authUser = {
            uid: userCredential.user.uid,
            email: userCredential.user.email
          };
          this.$store
            .dispatch("onAuthStateChangedAction", {
              authUser
            })
            .then(() => {
              this.$router.replace("/profile");
            })
            .catch(error => {
              console.log("User State error", error);
            });
        })
        .catch(error => {
          console.log("Login error", error);
          this.snackbar = true;
          this.errorMessage = error.message;
        });
    },
    forgetPassword() {
      console.log("clicked on forget password");
      this.$router.push("/auth/resetpassword");
    }
  }
};
</script>
