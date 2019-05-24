<template>
  <section class="section about">
    <div class="container">
      <CardRight/>
      <CardLeft/>
      <BigCard/>
      <!--<Test/>-->
    </div>
  </section>
</template>

<script>
  import CardRight from './CardRight'
  import CardLeft from './CardLeft'
  import BigCard from './BigCard'
  import Test from './Test'
  export default {
    name: 'About',
    components: {
      CardRight,
      CardLeft,
      BigCard,
      Test
    }
  }
</script>

<style scoped lang="scss">
  .about {
    padding: 70px 0;
    background: #FFF url("../assets/img/bg-about.png") no-repeat 0 0/cover;
  }
</style>
