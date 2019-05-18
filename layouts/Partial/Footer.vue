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
                <a href="" class="footer-nav-link">Menu</a>
              </li>
              <li class="footer-nav-item">
                <a href="" class="footer-nav-link">Menu</a>
              </li>
              <li class="footer-nav-item">
                <a href="" class="footer-nav-link">Menu</a>
              </li>
            </ul>
          </nav>
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
    padding: 90px 0 150px;
    background: #FFF url("../../assets/img/footer-bg.png") no-repeat 50% 50%/500px;
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
  }
</style>
