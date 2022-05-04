<template>
  <div class="demo-container">
    <component :is="componentName" />
  </div>
</template>

<script>
  export default {
    props: {
      componentName: { type: String, required: true }
    }
  }
</script>

<style>
.demo-container {
    margin: 3em;
}
</style>