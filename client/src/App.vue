<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      window.scrollTo(0, 0)
    }
  }
</script>

<style >
  :root{
    --primary: #8a97a8;
    --bg: #3a506b;
    --bg-dark: #243242;
    --bg-light: #4f6c91;
    --font: #fff;
    --red: #ff4848;
    --green: #7dc859;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: var(--font);
    background-color: var(--bg);
  }

  #app {
    height: 100%;
    background-color: var(--bg);
    position: relative;
  }
  main {
    height: 100%
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  @keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }
</style>