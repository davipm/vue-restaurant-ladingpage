<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <nav class="footer-navbar">
            <a href="" class="footer-nav-brand">Victorya</a>
            <ul class="footer-nav">
              <li class="footer-nav-item">
                <a href="" class="footer-nav-link">Menu</a>
              </li>
              <li class="footer-nav-item">
                <a href="" class="footer-nav-link">Package</a>
              </li>
              <li class="footer-nav-item">
                <a href="" class="footer-nav-link">About us</a>
              </li>
              <li class="footer-nav-item">
                <a href="" class="footer-nav-link">Contact us</a>
              </li>
            </ul>
          </nav>
          <div class="social">
            <ul class="social-list">
              <li class="social-item">
                <a href="" class="social-link"><i class="fab fa-facebook-square"></i></a>
              </li>
              <li class="social-item">
                <a href="" class="social-link"><i class="fab fa-instagram"></i></a>
              </li>
              <li class="social-item">
                <a href="" class="social-link"><i class="fab fa-twitter-square"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  .footer {
    display: block;
    position: relative;
    padding: 60px 0 30px;
    &-navbar {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 0;
      border-top: 1px solid #AEB2B4;
      border-bottom: 1px solid #AEB2B4;
    }
    &-nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;
      &-brand {
        display: block;
        margin-right: 3rem;
        font-size: 2rem;
        color: #452268;
        &:hover {
          text-decoration: none;
        }
      }
      &-link {
        display: block;
        position: relative;
        padding: .5rem 1rem;
        font-weight: bold;
        color: #AEB2B4;
        -webkit-transition: all .15s ease-in-out;
        -moz-transition: all .15s ease-in-out;
        -ms-transition: all .15s ease-in-out;
        -o-transition: all .15s ease-in-out;
        transition: all .15s ease-in-out;
        &:hover {
          color: #452268;
          text-decoration: none;
        }
      }
    }
    /*
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 1295px;
      height: 1295px;
      right: -400px;
      bottom: -400px;
      background: transparent url("../../assets/img/footer-bg.png") no-repeat 0 0/cover;
      z-index: 9999;
    }
    */
  }

  .social-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  }

  .social-link {
    display: block;
    margin-right: 15px;
    font-size: 2rem;
    text-align: center;
    color: #452268;
  }
</style>
