<template>
  <section class="section food">
    <div class="container">
      <h3 class="food-title">Explore Our Foods</h3>
      <p class="food-subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
      <div class="food-content">
        <div class="row">
          <div class="col-md-4">
            <nuxt-link to="/" class="card-food-lik">
              <div class="card">
                <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
                <div class="card-body">
                  <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <nuxt-link to="/" class="card-food-lik">
              <div class="card">
                <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
                <div class="card-body">
                  <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <nuxt-link to="/" class="card-food-lik">
              <div class="card">
                <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
                <div class="card-body">
                  <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <nuxt-link to="/" class="card-food-lik">
              <div class="card">
                <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
                <div class="card-body">
                  <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <nuxt-link to="/" class="card-food-lik">
              <div class="card">
                <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
                <div class="card-body">
                  <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <nuxt-link to="/" class="card-food-lik">
              <div class="card">
                <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
                <div class="card-body">
                  <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="food-footer">
        <button class="btn btn-primary">Explore all food</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Foods'
  }
</script>

<style scoped lang="scss">
  .food {
    display: block;
    position: relative;
    padding-top: 0;
    &-title {
      margin-bottom: 1.5rem;
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
    &-footer {
      margin-top: 3rem;
      text-align: center;
    }
  }

  .card {
    position: relative;
    border: none;
    margin-bottom: 2rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &-food-lik {
      color: #AEB2B4;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }

    .img-fluid {
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    }

    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #452268;
    }

    .price {
      color: #F98169;
    }

    &:hover {
      box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
    }
  }
</style>
