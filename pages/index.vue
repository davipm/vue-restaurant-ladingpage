<template>
  <div class="home">
    <Hero/>
    <About/>
    <Foods/>
    <Recipes/>
    <Form/>
  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import About from '../components/About'
  import Foods from '../layouts/Partial/Foods'
  import Recipes from '../layouts/Partial/Recipes'
  import Form from '../layouts/Partial/Form'
  export default {
    name: 'index',
    components: {
      Hero,
      About,
      Foods,
      Recipes,
      Form
    }
  }
</script>
