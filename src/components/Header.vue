<template>
    <div class="header">
        <div class="container">
            <router-link to="/" tag="div" class="header__logo">
                <div class="logo__picture">
                    <img src="../assets/img/logo.png" alt="logo">
                </div>
                <div class="logo__text">
                    BRAN<span class="pink-letter">D</span>
                </div>
            </router-link>
            <div class="header__search-window">
                <form action="" class="header-form">
                    <select name="Browse" id="" class="header-form__selector">
                        <option value="">Browse</option>
                        <option value="">One More</option>
                    </select>
                    <input type="text" name="" id="" class="header-form__input" placeholder="Search for Item...">
                    <button class="header-form__button">Search</button>
                </form>
            </div>
            <div class="header__account">
                <div class="account__pushcart">
                    <router-link to="/Cart" tag="a"><img src="../assets/img/shop.png" alt="pushcart"></router-link>
                </div>
                <div class="account__login">
                    <a href="#" class="login__link main-link">My Account <img src="../assets/img/arrow.png" class="small-arrow"></a>
                    <div class="login__link__level-2">
                        <a href="#" class="login__link">My Profile</a>
                        <a href="#" class="login__link">Settings</a>
                        <a href="#" class="login__link">Exit</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
}
</script>

<style lang="sass">  
.header 
    width: 100%  
    height: 100px
    display: flex  
    align-items: center  
    a 
        text-decoration: none
.header__logo 
    display: flex  
    flex-flow: row  
    width: 20%  
    align-items: center  
    cursor: pointer
    &:hover img
        transform: rotateY(180deg) scale(1.25)

.logo__picture 
    width: 55px  
    height: 65px  
    margin: 0 10px  
    img 
        width: 55px  
        height: 50px  
        transition: .5s
  
.logo__text 
    font-size: 27px  
    color: $grey_color_2  
    font-family: 'Lato', sans-serif  
    font-weight: 300  
  
.pink-letter 
    color: $pink_color  
    font-weight: 900  
  

.header__search-window 
    width: 60%  
    display: flex  
    align-items: center  
    justify-content: center 
  
.header-form__selector 
    height: 40px  
  
.header-form__input 
    height: 40px  
    margin-right: -5px  
    width: 270px  
    font-size: 16px  
    border: 1px solid lightgrey  
    padding-left: 10px  
  
.header-form__button 
    height: 42px  
    border: 1px solid lightgrey  
    width: 45px  
    line-height: 43px  
    background-color: #ffffff  
  

.header__account 
    width: 20%  
    display: flex  
    flex-flow: row  
    align-items: center  
  
.account__pushcart 
    width: 35px  
    height: 30px  
    margin-right: 25px  
    cursor: pointer
    img 
        width: 35px  
        height: 32px  
  
.account__login 
    position: relative  
  
.login__link 
    background-color: $pink_color  
    padding: 10px 30px  
    text-decoration: none  
    color: white  
    cursor: pointer  
    &:hover
        background-color: lightgrey  
  
.login__link__level-2 
    display: flex  
    flex-flow: column  
    width: 155px  
    min-height: 50px  
    position: absolute  
    top: 28px  
    left: 0px  
    border: 2px solid grey  
    border-top: none  
    box-sizing: border-box  
    opacity: 0  
    display: none  

.account__login:hover .login__link__level-2 
    display: flex  
    opacity: 1  
   
.small-arrow 
    width: 10px  
    height: 10px  
</style>