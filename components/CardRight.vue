<template>
  <div class="item">
    <div class="row">
      <div class="col-md-6 img-content">
        <img src="../assets/img/card-right-img.jpg" alt="" class="item-img">
      </div>
      <div class="col-md-6">
        <div class="item-content">
          <div class="item-body">
            <h2 class="item-title">The best comfort food will always be greens, cornbread, and fried chicken.</h2>
            <p class="item-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
          </div>
          <div class="item-footer">
            <button class="btn btn-primary">Know More About Us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardRight'
  }
</script>

<style scoped lang="scss">
  .item {
    display: block;
    position: relative;
    margin-bottom: 4rem;
    &-content {
      display: block;
      position: relative;
      padding-top: 5rem;
    }
    &-img {
      display: block;
      width: 90%;
      max-width: 100%;
      height: auto;
      margin-right: auto;
      border-bottom-right-radius: 9rem;
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
      // media query small
      @media (max-width: 576px) {
        width: 100%;
        margin-right: 0;
      }
    }
    &-title {
      margin-bottom: 1.5rem;
      font-size: 2.5rem;
      font-weight: 300;
      color: #452268;
    }
    &-text {
      margin-bottom: 2.5rem;
    }
  }
</style>
