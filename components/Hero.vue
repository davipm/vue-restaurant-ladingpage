<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-6">
          <div class="hero-container">
            <h2 class="hero-title">Good food choices are good investments.</h2>
            <p class="hero-text">There is a powerful need for symbolism, and that means the architecture must have something that appeals to the human heart.</p>
            <div class="footer-buttons">
              <button class="btn btn-primary">Order Now</button>
              <span class="button-text">Watch our story</span>
              <button class="btn btn-primary btn-round"><i class="fas fa-play"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Hero',
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .hero {
    display: block;
    position: relative;
    min-height: 100%;
    padding: 150px 0;
    background: #FFF url("../assets/img/bg-hero.png") no-repeat 0 0/cover;
    &-container {
      display: block;
      position: relative;
      padding-top: 4rem;
    }
    &-title {
      font-size: 3rem;
      font-weight: 300;
      color: #255A7E;
    }
    &-text {
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-weight: 300;
      color: #255A7E;
    }
  }

  .btn-primary {
    margin-right: 30px;
  }

  @media (max-width: 576px) {
    .footer-buttons {
      display: flex;
      flex-direction: column;
      text-align: center;

      .btn-primary,
      .button-text {
        margin-right: 0;
      }

      .button-text {
        margin-top: 15px;
        margin-bottom: 15px;
      }

      .btn-round {
        display: block;
        width: 60px;
        height: 60px;
        margin: auto;
      }
    }
  }
</style>
