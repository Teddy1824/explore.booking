<template>
  <section class="booking">
<div class="wrapper">
<div class="product-img">
  <img :src="destination.img[0]" height="420" width="327" class="s-img">
</div>
<div class="product-info">
  <div class="product-text">
    <h1 class="s-text">Harvest Vase</h1>
    <h2 class="s-text1">by studio and friends</h2>
    <p class="s-text2">Harvest Vases are a reinterpretation<br> of peeled fruits and vegetables as<br> functional objects. The surfaces<br> appear to be sliced and pulled aside,<br> allowing room for growth. </p>
  </div>
  <div class="product-price-btn">
    <p><span class="price">R78</span></p>
  </div>
</div>
    <div class="section-center">
       
                <div class="booking-form">
        <div class="container">
            <div class="row1 align-items-center justify-content-center" id="slide">
    <div class="col-md-6 col-lg-6">
                    <div class="form-header">
                        <h1>Make your reservation</h1>
                    </div>
                    

                    <form>
                        {{ id }}
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="date" required>
                                    <span class="form-label">Check In</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="date" required>
                                    <span class="form-label">Check out</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <select class="form-control" required>
                                        <option value="" selected hidden>no of rooms</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                    <span class="form-label">Rooms</span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <select class="form-control" required>
                                        <option value="" selected hidden>no of adults</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                    <span class="form-label">Adults</span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <select class="form-control" required>
                                        <option value="" selected hidden>no of children</option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                    <span class="form-label">Children</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="email" placeholder="Enter your Email">
                                    <span class="form-label">Email</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="tel" placeholder="Enter you Phone">
                                    <span class="form-label">Phone</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-btn">
                            <button class="submit-btn">Book Now</button>
                        </div>
                    </form>
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
 props: ['id'],

 mounted() {
    fetch('https://booking-system-explore-booking.herokuapp.com/places' + this.id, {
    })
 }
}
</script>

<style>
 .booking {
   background: url("https://images.unsplash.com/photo-1627616031178-6ba663540b98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80");
   color: #FFF;
   height: 100vh;
   /* position: relative; */
   background-size: cover;
 }
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 130px;
}

.s-img {
    height: 506px;
}

.product-img {
  float: left;
  /* height: 420px; */
  width: 327px;
}

.product-img .s-img {
  border-radius: 7px 0 0 7px;
}

.product-info {
  float: left;
  height: 506px;
  width: 327px;
  /* border-radius: 0 7px 10px 7px; */
  background-color: #ffffff;
}

.product-text {
  height: 300px;
  width: 327px;
  margin-top: 25px;
}

.product-text .s-text {
  margin: 0 0 0 38px;
  padding-top: 52px;
  font-size: 34px;
  color: #474747;
}

.product-text .s-text,
.product-price-btn .s-text2 {
  font-family: 'Bentham', serif;
}

.product-text .s-text {
  margin: 0 0 47px 38px;
  font-size: 13px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
}

.product-text .s-text2 {
  height: 125px;
  margin: 0 0 0 38px;
  font-family: 'Playfair Display', serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
}

.product-price-btn {
  height: 103px;
  width: 327px;
  margin-top: 17px;
  position: relative;
}

.product-price-btn .s-text2 {
  display: inline-block;
  position: absolute;
  top: -13px;
  height: 50px;
  font-family: 'Trocchi', serif;
  margin: 0 0 0 38px;
  font-size: 28px;
  font-weight: lighter;
  color: #474747;
}

.price {
  display: inline-block;
  height: 50px;
  font-family: 'Suranna', serif;
  font-size: 34px;
  color: black;
  margin-left: 118px;
}

.product-price-btn button {
  float: right;
  display: inline-block;
  height: 50px;
  width: 176px;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}

.product-price-btn button:hover {
  background-color: #79b0a1;
}

 .section {
    position: relative;
    height: 100vh;
}

.section .section-center {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

#booking {
    font-family: 'Raleway', sans-serif;
}

.reservation {
      position: relative;
    max-width: 642px;
    width: 100%;
    margin: auto;
    padding: 40px;
    overflow: hidden;
    background-image: url('https://i.imgur.com/8z1tx3u.jpg');
    background-size: cover;
    border-radius: 5px;
    z-index: 20;
}

.booking-form {
    position: relative;
    max-width: 642px;
    width: 100%;
    margin: auto;
    padding: 40px;
    overflow: hidden;
    background-image: url('https://i.imgur.com/8z1tx3u.jpg');
    background-size: cover;
    border-radius: 5px;
    z-index: 20;
}

.booking-form::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
}

.booking-form .form-header {
    text-align: center;
    position: relative;
    margin-bottom: 30px;
}

.booking-form .form-header h1 {
    font-weight: 700;
    text-transform: capitalize;
    font-size: 42px;
    margin: 0px;
    color: #fff;
}

.booking-form .form-group {
    position: relative;
    margin-bottom: 30px;
}

.booking-form .form-control {
    background-color: rgba(255, 255, 255, 0.2);
    height: 60px;
    padding: 0px 25px;
    border: none;
    border-radius: 40px;
    color: #fff;
    -webkit-box-shadow: 0px 0px 0px 2px transparent;
    box-shadow: 0px 0px 0px 2px transparent;
    -webkit-transition: 0.2s;
    transition: 0.2s;
}

.booking-form .form-control::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control:focus {
    -webkit-box-shadow: 0px 0px 0px 2px #ff8846;
    box-shadow: 0px 0px 0px 2px #ff8846;
}

.booking-form input[type="date"].form-control {
    padding-top: 16px;
}

.booking-form input[type="date"].form-control:invalid {
    color: rgba(255, 255, 255, 0.5);
}

.booking-form input[type="date"].form-control+.form-label {
    opacity: 1;
    top: 10px;
}

.booking-form select.form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.booking-form select.form-control:invalid {
    color: rgba(255, 255, 255, 0.5);
}

.booking-form select.form-control+.select-arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 32px;
    line-height: 32px;
    height: 32px;
    text-align: center;
    pointer-events: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
}

.booking-form select.form-control+.select-arrow:after {
    content: '\279C';
    display: block;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.booking-form select.form-control option {
    color: #000;
}

.booking-form .form-label {
    position: absolute;
    top: -10px;
    left: 25px;
    opacity: 0;
    color: #ff8846;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    height: 15px;
    line-height: 15px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
}

.booking-form .form-group.input-not-empty .form-control {
    padding-top: 16px;
}

.booking-form .form-group.input-not-empty .form-label {
    opacity: 1;
    top: 10px;
}

.booking-form .submit-btn {
    color: #fff;
    background-color: #e35e0a;
    font-weight: 700;
    height: 60px;
    padding: 10px 30px;
    width: 100%;
    border-radius: 40px;
    border: none;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1.3px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
}

.booking-form .submit-btn:hover,
.booking-form .submit-btn:focus {
    opacity: 0.9;
}

             
.white-mode {
    text-decoration: none;
    padding: 17px 40px;
    background-color: yellow;
    border-radius: 3px;
    color: black;
    transition: .35s ease-in-out;
    position: absolute;
    left: 15px;
    bottom: 15px
}
</style>