<template>
  <div class="navbar">
 <section class="header">
     <div class="overlay">
         <!-- <div class="row"> -->
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
            <a class="navbar-brand" href="#">Explore.Booking</a>
            </div>   
            </div>
            
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div class="move container">
              <div class="col-lg-8">
              <ul class="nav navbar-nav nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Venues</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
              <div class="search-wrap">
                <input ref="input" v-model="searchText" class="search-input" placeholder="Search" :class="{ active }" @focus="onFocus" @blur="onBlur" @keyup.enter="onEnter">
              </div>
                </div>
              </div>
        <!-- </div> -->
      </div>
    </div>
  </div>                
</div>
    <div class="container">
      <div class="text">
        <h1 class="display-1">Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit. <br>Phasellus scelerisque dui quis sapien auctor, <br>a pellentesque lorem vehicula. Etiam vel metus tincidunt, <br>eleifend felis a, finibus ex. Nam a metus.</h1>
        </div>
    </div>
                                    
<div class='btn first'>Explore</div>
        </section>
      </div>
  
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
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -msn-background-size: cover;
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

.header .navbar-default {
	background-color:transparent !important;
	border-color:transparent;
	background-image:none;
	box-shadow:none;	
}
.header .navbar-default .navbar-brand{
    font-size: 30px;
    font-weight: bold;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
}

.header .navbar-default .navbar-nav>li>a {
   font-size:20px; 
   color:#fff; 
    border-bottom: 1px solid transparent
}
.header .navbar-default .navbar-nav>li:hover a{
    color: #fff;
     border-bottom: 1px solid #FFF
}


.header .navbar-toggle {
      margin:10px 0; 
      background:#c7c7c7; 
      color:#FFF;
}

.col-lg-8 {
    font-variant: small-caps;
    margin-left: end;
}

.header .navbar-nav navbar-right{
  color:#FFF;
}

.text {
  position: absolute;
  bottom: 89px;
  left: 16px;
}

.display {
  text-align: left;
}

.search-wrap {
  position: relative;
  z-index: 2;
  top: 14px;
  flex-wrap: wrap;
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
  background: rgba(199, 199, 199, 0.15);
  border-radius: 100px;
  border: none;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  color: #ffffff;
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
    background: rgba(199, 199, 199, 0.3);
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
  color: #c7c7c7;
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

.btn {
  position: absolute;
  bottom: 40px;
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