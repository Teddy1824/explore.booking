<template>
  <section class="header2">
    
    
      <div v-if="locations" class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" v-for="destination in locations" :key="destination.id">
    <div class="cards__item" >
    <div class="card">
      <div class="card__image">
        <img :src="destination.img[0]"  title="Click below to see more">
      </div>
      <div class="card__content">
        <div class="card__title">{{ destination.place }}</div>
        <h2 class="card__text">{{ destination.category }}</h2>
        <h2 class="card__text">{{ destination.location }}</h2>
        <h2 class="card__text">{{ destination.description }}</h2>
        <h1 class="card__text">R{{ destination.price }}</h1>
        <router-link :to="{ name: 'Booking', params: { id: destination._id }}">
          <button class="btn1 btn1--block card__btn">Button</button>
          </router-link>
      </div>
    </div>
  </div>
    </div>
    </div>
<div v-else class="lds-ripple">
  <div></div>
  <div></div>
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
     })

  .then(res => res.json())
  .then(json => {
      console.table(json);
  this.locations = json;
  console.log(this.locations)
  })
  .catch(err => console.log(err));
  },
}
</script>


<style>

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-left: 50%;
  margin-top: 300px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid black;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  height: 100%;
  width: 100%;
  background-color: white;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

 .header2{
    background: url("https://images.unsplash.com/photo-1563286130-945bc9d7803c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2112&q=80") center center fixed;
    /* color: #FFF; */
    height: 100vh;
    /* position: relative; */
    background-size: cover;
}

img {
  height: auto;
  width: 100%;
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
  /* display: flex; */
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
    width: 100%;
  }
}
@media (min-width: 56rem) {
  .cards__item {
    width: 100%;
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
  flex-direction: column;
  padding: 1rem;
  text-align: center;
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

.card__title {
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.card__text {
  flex: 1 1 auto;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: black;
  font-family: system-ui;
}
</style>