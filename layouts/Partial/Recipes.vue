<template>
  <section class="section recipes">
    <div class="container-fluid">
      <h2 class="recipes-title">Our Popular Recipes</h2>
      <div class="recipes-content">
        <no-ssr>
          <carousel :responsive="{ 0: {items: 1,nav: false}, 768: {items: 1, nav: false}, 960: {items: 4, nav: false}}" :nav="false">
            <div class="card" v-for="(item, index) in items" :key="index">
              <img :src="item.img" :alt="item.alt" class="img-fluid">
              <div class="card-body">
                <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                <p class="card-text" v-text="item.text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
              </div>
            </div>
            <!--
            <div class="card">
              <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
              <div class="card-body">
                <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
              </div>
            </div>
            <div class="card">
              <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
              <div class="card-body">
                <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
              </div>
            </div>
            <div class="card">
              <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
              <div class="card-body">
                <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
              </div>
            </div>
            <div class="card">
              <img src="../../assets/img/img-1.png" alt="" class="img-fluid">
              <div class="card-body">
                <h5 class="card-title">Ham Sandwich <span class="price">$10.50</span></h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
              </div>
            </div>
            -->
          </carousel>
        </no-ssr>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Recipes',
    data() {
      return {
        items: [
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Ham Sandwich <span class="price">$10.50</span>',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Ham Sandwich <span class="price">$10.50</span>',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Ham Sandwich <span class="price">$10.50</span>',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Ham Sandwich <span class="price">$10.50</span>',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Ham Sandwich <span class="price">$10.50</span>',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Ham Sandwich <span class="price">$10.50</span>',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Ham Sandwich <span class="price">$10.50</span>',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
            link: '/'
          },
        ]
      }
    }
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

  .card {
    display: block;
    position: relative;
    border: none;
    margin-right: 10px;
  }

  .container-fluid {
    padding-right: 0;
    padding-left: 10px;
  }
</style>
