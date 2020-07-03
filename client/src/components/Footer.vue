<template>
  <footer>
    <div class="footer">
      <ul class="nav noselect">
        <li><a class="link-prim" href="/">HOME</a></li>
        <li>
          <router-link class="link-prim" to="/privacy">PRIVACY</router-link>
        </li>
        <li>
          <router-link class="link-prim" to="/inprint">INPRINT</router-link>
        </li>
        <li><a class="link-prim" href="mailto:webmaster@mxis.ch">CONTACT</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style scoped>
  footer {
    width: 100%;
    background-color: var(--bg-dark);
    position: absolute;
  }

  .footer {
    max-width: 400px;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    font-size: 15px;
    padding: 0px 10px;
  }

  .nav {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    font-weight: 600;
  }

  .nav li {
    margin: 1rem;
  }

  .link-prim {
    text-decoration: none;
    color: var(--primary);
    font-weight: 600;
  }

  .link-red {
    text-decoration: none;
    color: var(--red);
    font-weight: 600;
  }
</style>