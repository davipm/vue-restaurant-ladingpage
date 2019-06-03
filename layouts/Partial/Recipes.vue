<template>
  <section class="section recipes">
    <div class="container-fluid">
      <h2 class="recipes-title">{{ title }}</h2>
      <div class="recipes-content">
        <no-ssr>
          <carousel :responsive="{ 0: {items: 1,nav: false}, 768: {items: 1, nav: false}, 960: {items: 4, nav: false}}" :nav="false">
            <div class="card" v-for="(item, index) in items" :key="index">
              <div class="card-overlay"></div>
              <img :src="item.img" :alt="item.alt" class="img-fluid">
              <div class="card-body">
                <h5 class="card-title" v-text="item.title">Ham Sandwich <span class="price">$10.50</span></h5>
                <p class="card-text" v-text="item.text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                <button class="btn btn-primary"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
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
        title: 'Our Popular Recipes',
        items: [
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Crinkle Top Brownies',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr….',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Crinkle Top Brownies',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr….',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Crinkle Top Brownies',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr….',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Crinkle Top Brownies',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr….',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Crinkle Top Brownies',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr….',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Crinkle Top Brownies',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr….',
            link: '/'
          },
          {
            img: require('../../assets/img/img-1.png'),
            alt: 'Image Card',
            title: 'Crinkle Top Brownies',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr….',
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
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;

    &-overlay {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #0B314B;
      opacity: 0;
      border-radius: 6px;
      -webkit-transition: all .15s ease-in-out;
      -moz-transition: all .15s ease-in-out;
      -ms-transition: all .15s ease-in-out;
      -o-transition: all .15s ease-in-out;
      transition: all .15s ease-in-out;
    }

    &-body {
      opacity: 0;
      color: #FFF;
      position: absolute;
      bottom: 0;
      -webkit-transition: all .15s ease-in-out;
      -moz-transition: all .15s ease-in-out;
      -ms-transition: all .15s ease-in-out;
      -o-transition: all .15s ease-in-out;
      transition: all .15s ease-in-out;
    }

    &:hover &-body {
      opacity: 1;
    }

    &:hover &-overlay {
      opacity: .66;
    }

    .img-fluid {
      border-radius: 6px;
    }

    .btn-primary {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: .5rem 2rem;
      border-bottom-right-radius: 6px;
    }
  }

  .container-fluid {
    padding-right: 0;
    padding-left: 10px;
  }
</style>
