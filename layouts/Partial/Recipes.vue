<template>
  <section class="section recipes">
    <div class="container-fluid">
      <h2 class="recipes-title">Our Popular Recipes</h2>
      <div class="recipes-content">
        <no-ssr>
          <carousel>
            <img src="https://placeimg.com/200/200/any?1" alt="">

            <img src="https://placeimg.com/200/200/any?2" alt="">

            <img src="https://placeimg.com/200/200/any?3" alt="">

            <img src="https://placeimg.com/200/200/any?4" alt="">
          </carousel>
        </no-ssr>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Recipes',
  }
</script>

<style scoped lang="scss">
  .recipes {
    display: block;
    position: relative;
    padding-top: 0;
    &-title {
      margin-bottom: 3rem;
      text-align: center;
      font-size: 2rem;
      color: #452268;
    }
    &-subtitle {
      display: block;
      width: 70%;
      margin: 0 auto 2rem;
      text-align: center;
    }
  }
</style>
