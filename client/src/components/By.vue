<template>
    <div class="by">
        <p>Created by <a href="https://github.com/BetaHuhn">BetaHuhn</a></p>
    </div>
</template>

<script>
  export default {
    name: 'By',
  }
</script>

<style scoped>
  .by{
    text-align: center;
    position: fixed;
    bottom: 20px;
    left: 2rem;
    z-index: 1;
  }
  .by a{
    text-decoration: none;
    color: var(--red);
    font-weight: 600;
  }
</style>
