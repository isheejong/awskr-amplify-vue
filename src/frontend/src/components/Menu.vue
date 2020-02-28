<template>
  <div class="nav">
    <div class="main">
      <a class="item" v-on:click="home">Home</a>
      <a class="item" v-on:click="notes">Notes</a>
    </div>
    <div class="right">
      <a class="item" v-on:click="profile" v-if="user">Profile</a>
      <amplify-sign-out v-if="user"></amplify-sign-out>
    </div>
  </div>
</template>

<script>

import AmplifyStore from '../store/store';


export default {
  name: 'Menu',
  data () {
    return {}
  },
  computed: {
    user() { 
      return AmplifyStore.state.user
    }
  },
  methods: {
    home: function() {
        this.$router.push('/')
    },
    notes: function() {
        this.$router.push('/notes')
    },
    profile: function() {
        this.$router.push('/profile')
    },
    signOut: function() {
        this.$router.push('/auth/signOut')
    }
  }
}
</script>


