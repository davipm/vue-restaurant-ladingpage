<template>
  <div id="app">
    <Header/>
    <nuxt/>
    <Footer/>
    <Dev/>
  </div>
</template>

<script>
  import Header from './Partial/Header.vue'
  import Footer from './Partial/Footer'
  import Dev from '../components/Dev'
  export default {
    name: 'default',
    components: {
      Header,
      Footer,
      Dev
    }
  }
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    color: #AEB2B4;
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    overflow-x: hidden;
  }

  .section {
    display: block;
    position: relative;
    padding: 60px 0;
  }

  .btn-primary {
    display: inline-block;
    //margin-right: 30px;
    padding: 1rem 2.5rem;
    font-weight: bold;
    color: #FFF;
    background-color: #F98169;
    border: none;
    cursor: pointer;
    border-radius: 0;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  }

  .button-text {
    margin-right: 30px;
  }

  .btn-round {
    display: inline-block;
    padding: 1rem 1.3rem;
    text-align: center;
    border-radius: 50%;
  }
</style>
