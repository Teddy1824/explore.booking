<template>
<div class="container1">
  <div class="navbar">
            <div class="navbar navbar-default">
            <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <div class="navlogo col-lg-2">
            <router-link class="navbar-brand" to="/">Explore.Booking</router-link>
            </div>   
            </div>
            
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div class="move container">
              <div class="col-lg-8">
              <ul class="nav navbar-nav nav-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/places">Explore!</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
              <div class="search-wrap">
                <input ref="input" class="search-input" placeholder="Search">
              <router-link to='/user/login'><button class='loginBtn'>Login</button></router-link>
              </div>
                </div>
              </div>
            </div>
            </div>
      </div>
   <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.container1{
  width: 100%;
  background-color: gray;
}

.navbar {
  min-height: 50px;
  margin-bottom: 0px;
  background-color: gray
}

.navbar-default {
	background-color:transparent !important;
	border-color:transparent;
	background-image:none;
	box-shadow:none;	
}
.navbar-default .navbar-brand{
    font-size: 30px;
    font-weight: bold;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
}

.navbar-default .navbar-nav>li>a {
   font-size:20px; 
   color:#fff; 
    border-bottom: 1px solid transparent
}
.navbar-default .navbar-nav>li:hover a{
    color: #fff;
     border-bottom: 1px solid #FFF
}

.navbar-toggle {
      margin:10px 0; 
      background:#c7c7c7; 
      color:#FFF;
}

.col-lg-8 {
    font-family: system-ui;
    margin-left: end;
}

.navbar-nav navbar-right{
  color:#FFF;
}

.search-wrap {
  /* position: relative; */
  /* z-index: 2; */
  top: 14px;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 10px;
}
.search-wrap .search-icon {
  position: absolute;
  left: 10px;
  color: #c7c7c7;
  font-size: 20px;
  line-height: 30px;
}
.search-wrap .clear-icon {
  position: absolute;
  right: 13px;
  cursor: pointer;
  line-height: 30px;
  transition: transform 0.3s;
}
@media (hover: hover) {
  .search-wrap .clear-icon:hover {
    transform: rotate(-90deg);
  }
}
.search-wrap .search-input {
  /* width: 100%; */
  height: 30px;
  /* background: rgba(199, 199, 199, 0.15); */
  border-radius: 100px;
  border: none;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  color: #000000;
  outline: none;
  padding: 0 10px 0 40px;
  transition: padding 0.3s ease-in-out, background 0.1s ease;
}
.search-wrap .search-input.active {
  background: #0c4a64;
  box-shadow: none;
  padding-left: 10px;
}
@media (hover: hover) {
  .search-wrap .search-input:not(.active):hover {
    background: #FFF;
  }
}
.search-wrap ::-moz-placeholder {
  color: #c7c7c7;
  font-family: "Montserrat", sans-serif;
  opacity: 1;
}
.search-wrap :-ms-input-placeholder {
  color: #c7c7c7;
  font-family: "Montserrat", sans-serif;
  opacity: 1;
}
.search-wrap ::placeholder {
  color: #000000;
  font-family: "Montserrat", sans-serif;
  opacity: 1;
}

.history-wrap {
  position: relative;
  top: -15px;
  background: #0c4a64;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  overflow: hidden;
  padding: 15px 0 5px;
  transition: height 0.3s ease;
  z-index: 1;
}
.history-wrap.empty {
  padding: 0;
}
.history-wrap .history-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  cursor: pointer;
  padding: 0 10px;
  transition: all 0.5s ease, background 0.1s ease;
}
@media (hover: hover) {
  .history-wrap .history-item:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}
.history-wrap .history-item div {
  width: calc(100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-wrap {
  position: absolute;
  top: 50%;
  left: 0;
  margin: 20px;
  transform: translateY(-50%);
}
.content-wrap .content {
  background-color: rgba(90, 90, 90, 0.2);
  border-radius: 20px;
  color: #1d1f23;
  letter-spacing: 1px;
  padding: 10px 20px;
}
@media (hover: hover) {
  .content-wrap .content:hover {
    box-shadow: 0px 1px 6px 1px rgba(32, 33, 36, 0.28);
  }
}

.highlight {
  color: #ea4335;
  font-weight: 500;
}

.reference {
  color: #4b4c4e;
  font-size: 12px;
  margin-top: 10px;
  text-align: right;
}

.slide-x-transition-enter-active, .slide-x-transition-leave-active {
  transition: transform ease-in-out 0.3s, opacity ease-in-out 0.3s;
}
.slide-x-transition-enter-from, .slide-x-transition-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}

.list-transition-enter-from, .list-transition-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.list-transition-leave-active {
  position: absolute;
}

.loginBtn {
  width: 10rem;
  height: 3rem;
  font-size:115%;
  background-color: #fd6347;
  color: white;
  font-family: system-ui;
  border-style: none;
  transition: all .1s ease-in-out;
  border-radius: 75px;
  margin-left: 5px;
}
.loginBtn:hover {
  text-size: 100%;
  box-shadow: 1px 1px 1px 1px gray;
  transform: scale(1.01);
}

.route-enter-from {
    opacity: 0.5;
    transform: translateX(100px);
  }

  .route-enter-active {
    transition: all 0.3s ease-out;
  }

  .route-leave-to {
    opacity: 1;
    transform: translateY(-100px);
  }

  .route-leave-active {
    transition: all 0.3s ease-in;
  }
</style>