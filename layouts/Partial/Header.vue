<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">Victorya</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li
              class="nav-item"
              v-for="(item, index) in menus"
              :key="index"
            >
              <nuxt-link
                class="nav-link"
                :to="item.link">
                {{ item.title }}
              </nuxt-link>
            </li>
            <!--
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">About us</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Contact us</nuxt-link>
            </li>
            -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        menus: [
          { title: 'Package', link: '/' },
          { title: 'About us', link: '/' },
          { title: 'Contact us', link: '/' },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: absolute;
    display: block;
    padding: 30px 0;
    width: 100%;
    background: transparent;
    z-index: 1;
  }

  .navbar-brand {
    display: block;
    margin-right: 3rem;
    font-size: 36px;
    color: #452268;
  }

  .nav-link {
    display: block;
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 6px;
    margin-right: 1.5rem;
    color: #ABADAE;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    &:hover {
      color: #452268;
    }
  }
</style>
