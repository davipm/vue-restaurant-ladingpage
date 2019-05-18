<template>
  <div class="big-card">
    <div class="big-card-body">
      <h2 class="title">When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
      <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
    </div>
    <div class="big-card-footer">
      <button class="btn btn-secondary"><i class="fas fa-play"></i></button>
      <small class="small-text">Watch our story</small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BigCard'
  }
</script>

<style scoped lang="scss">
  .big-card {
    display: block;
    position: relative;
    width: 70%;
    margin: auto;
    padding: 2.5rem;
    text-align: center;
    background: #FFF url("../assets/img/bg-card.png") no-repeat 0 0/cover;
    color: #FFF;
    border-radius: 15px;
  }

  .text {
    display: block;
    margin: 1rem auto;
    width: 70%;
  }

  .btn-secondary {
    display: block;
    margin: auto;
    height: 50px;
    width: 50px;
    text-align: center;
    background: transparent;
    border: 2px solid #FFF;
    border-radius: 50%;
  }

  .small-text {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
</style>
