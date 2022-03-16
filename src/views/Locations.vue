<template>
  <section class="header2">
      <!-- <div class="container" style="padding-top: 10px">
    <div class="row">
      <div v-for="place in places" :key="place.id" class="col-sm">
        
        <div class="card" style="width: 20rem;">
          <img class="card-img-top" v-bind:src="place.img" v-bind:alt="card.title">
          <div class="card-block">
            <h4 class="card-title">{{place.place}}</h4>
            <p class="card-text">{{place.description}}</p>
            <a href="#" class="btn btn-primary">Button</a>
          </div>
        </div>
        
      </div>
    </div>
  </div> -->
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" v-for="place in places" :key="place.id">
    <div class="cards" v-if="places.length">
    <div class="cards__item">
    <div class="card">
      <div class="card__image">
        <img :src="place.img">
      </div>
      <div class="card__content">
        <div class="card__title">{{ place.place }}</div>
        <p class="card_text">{{ place.category }}</p>
        <p class="card_text">{{ place.location }}</p>
        <p class="card__text">{{ place.description }}</p>
        <button class="btn1 btn1--block card__btn">Button</button>
      </div>
    </div>
  </div>
    </div>
    </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
      return {
          locations: null
      }
  },
  mounted() {
     fetch('https://booking-system-explore-booking.herokuapp.com/places', {
      //  headers: {
      //    Authorization: `Bearer ${localStorage.getItem('jwt')}`
      //  }
     })

  .then(res => res.json())
  .then(json => {
      console.log(json);
  this.locations = json;
  })
  .catch(err => console.log(err));
  },
}
</script>


<style>
 .header2{
    background: url("https://images.unsplash.com/photo-1563286130-945bc9d7803c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2112&q=80") center center fixed;
    color: #FFF;
    height: 100vh;
    position: relative;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -msn-background-size: cover;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
.btn1 {
  background-color: white;
  border: 1px solid #cccccc;
  color: #696969;
  padding: 0.5rem;
  text-transform: lowercase;
}
.btn1--block {
  display: block;
  width: 100%;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards__item {
  display: flex;
  padding: 1rem;
}
@media (min-width: 40rem) {
  .cards__item {
    width: 50%;
  }
}
@media (min-width: 56rem) {
  .cards__item {
    width: 33.3333%;
  }
}
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.card:hover .card__image {
  filter: contrast(100%);
}
.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}
.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
}
.card__image::before {
  /* content: ""; */
  display: block;
  padding-top: 56.25%;
}
@media (min-width: 40rem) {
  .card__image::before {
    padding-top: 66.6%;
  }
}
/* .card__image--fence {
  background-image: url(https://unsplash.it/800/600?image=59);
} */
.card__title {
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.card__text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}
</style>