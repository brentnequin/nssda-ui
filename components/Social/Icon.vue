<template>
  <b-button class="social-icon-button" :href="to">
    <b-icon class="social-icon" :icon="icon" />
  </b-button>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    icon: {
      type: String,
      default: 'question-circle'
    },
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.social-icon-button {
    background-color: transparent;
    border: none;
}

.social-icon {
    color: #212529;
}
</style>
