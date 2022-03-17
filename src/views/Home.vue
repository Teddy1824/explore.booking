<template>
  <section class="header">
     <div class="overlay">
         <!-- <div class="row"> -->
        <!-- </div> -->
      </div>
 
    <div class="container">
      <div class="text">
        <h1 class="display-1">Welcome to <span>Explore.Booking</span>,<br/> where you can book your next vacation with ease.<br/> Please feel free to check some of our most visited locations.</h1>
        </div>
    </div>
                                    
<router-link to="/user/login"><div class='btn first'>Explore</div></router-link>
        </section>
</template>

<script>
export default {

}
</script>

<style>
 .header{
    background: url("https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") center center fixed;
    color: #FFF;
    height: 100vh;
    position: relative;
    background-size: cover;
}
.header .overlay{
    background: rgba(0, 0, 0, 0.58);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: hidden;
}

.text {
  position: absolute;
  bottom: 200px;
  left: 16px;
}

span {
    font-family: 'Montserrat';
}

.display {
  text-align: left;
}

.display-1 {
  font-size: 5rem;
  font-family: system-ui;
}

.btn {
  position: absolute;
  bottom: 160px;
  left: 16px;
  cursor: pointer;
  padding: 10px 30px;
  font-size: 0.85em;
  transition: all 0.25s ease-in-out;
  border: 1px solid white;
}

.first {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  color: white;
}

.first:hover {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
  background: #c7c7c7;
  color: black;
}
</style>