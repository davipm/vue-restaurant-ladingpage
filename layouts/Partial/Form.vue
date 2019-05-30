<template>
  <section class="section contact-form">
    <div class="container">
      <form class="form" @submit.prevent="salveTitle">
        <h2 class="form-title">Want to get the latest Updates?</h2>
        <div class="form-content">
          <input
            type="email"
            id="email"
            class="form-control"
            :class="{'is-invalid': emailError }"
            v-model="title"
            placeholder="example@yourmail.com"
          >
          <button class="btn btn-primary">Subscribe <i class="far fa-paper-plane"></i></button>
        </div>
        <div v-if="emailError" class="invalid-feedback">
          Please choose a username.
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Form',
    data() {
      return {
        title: '',
        slug: '',
        emailError: false
      }
    },

    methods: {
      salveTitle() {
        if (this.title !== '') {
          axios
            .post('http://localhost:1337/posts', {
              Title: this.title,
              Slug: this.title.toLowerCase()
            })
            .then((res) => {
              console.log('the title is: ',res.data.Title);
            })
            .catch((error) => {
              console.log(error);
            })
        }

        else {
          document.getElementById('email').focus();
          this.emailError = true;
        }
      }
    }
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

  .is-invalid {
    border: 1px solid #dc3545;
    color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
    background-repeat: no-repeat;
    background-position: center right calc(0.375em + 0.1875rem);
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  .invalid-feedback {
    display: block;
  }

  @media (max-width: 576px) {
    .form {
      padding: 1rem;
      &-content {
        display: block;
      }
      &-control {
        width: 100%;
        margin-bottom: 15px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }

    .btn-primary {
      border-radius: 10px;
    }
  }
</style>
