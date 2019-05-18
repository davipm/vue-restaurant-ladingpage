<template>
  <section class="section contact-form">
    <div class="container">
      <form class="form">
        <h2 class="form-title">Want to get the latest Updates?</h2>
        <div class="form-content">
          <input type="text" class="form-control" placeholder="example@yourmail.com">
          <button class="btn btn-primary">Subscribe <i class="far fa-paper-plane"></i></button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Form'
  }
</script>

<style scoped lang="scss">
  .form {
    display: block;
    position: relative;
    padding: 4rem;
    text-align: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    background: #FFF;
    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-title {
      color: #0C3653;
      margin-bottom: 3rem;
    }
    &-control {
      display: block;
      width: 60%;
      height: 56px;
      border: none;
      border-radius: 10px;
      background: #F9FBFB;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      &:focus {
        box-shadow: none;
      }
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -36px;
      left: -36px;
      width: 150px;
      height: 150px;
      background: #FFF url("../../assets/img/form-bg-1.png") no-repeat 0 0/cover;
      z-index: -1;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      right: -36px;
      bottom: -36px;
      width: 150px;
      height: 150px;
      background: #FFF url("../../assets/img/form-bg-1.png") no-repeat 0 0/cover;
      z-index: -1;
    }
  }

  .btn-primary {
    font-weight: normal;
    box-shadow: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>
