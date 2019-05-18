<template>
  <section class="section about">
    <div class="container">
      <CardRight/>
      <CardLeft/>
      <BigCard/>
    </div>
  </section>
</template>

<script>
  import CardRight from './CardRight'
  import CardLeft from './CardLeft'
  import BigCard from './BigCard'
  export default {
    name: 'About',
    components: {
      CardRight,
      CardLeft,
      BigCard
    }
  }
</script>

<style scoped lang="scss">
  .about {
    padding: 70px 0;
    background: #FFF url("../assets/img/bg-about.png") no-repeat 0 0/cover;
  }
</style>
