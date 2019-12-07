<template>
    <div class="prefooter">
        <div class="container">
            <div class="company-info">
                <router-link to="/" tag="div" class="header__logo">
                    <div class="logo__picture">
                        <img src="../assets/img/logo.png" alt="logo">
                    </div>
                    <div class="logo__text">
                        BRAN<span class="pink-letter">D</span>
                    </div>
                </router-link>
                <p>
                    Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
                <p>
                    Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                </p>
            </div>
            <div class="web-map">
                <div class="links-block">
                    <p>
                        COMPANY
                    </p>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">How It Works</a>
                    <a href="#">Contact</a>
                </div>
                <div class="links-block">
                    <p>
                        INFORMATION
                    </p>
                    <a href="#">Tearms & Condition</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">How to Buy</a>
                    <a href="#">How to Sell</a>
                    <a href="#">Promotion</a>
                </div>
                <div class="links-block">
                    <p>
                        SHOP CATEGORY
                    </p>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Child</a>
                    <a href="#">Apparei</a>
                    <a href="#">Brows All</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BotNav',
}
</script>

<style lang="sass">
.prefooter 
    width: 100%  
    margin: 55px 0  
  
.company-info 
    width: 30%  
    p 
        font-weight: 300  
        font-size: 14px  
        line-height: 20px    

  
.company-info p:first-of-type 
    margin: 15px 0   
  
.web-map 
    display: flex  
    justify-content: center  
    width: 70%  
    margin-top: 30px  
  
.links-block 
    width: 30%  
    display: flex  
    flex-flow: column  
    p 
        color: $pink_color  
        font-size: 18px  
        font-weight: 900  
        margin-bottom: 25px  
    a
        color: #898989  
        font-size: 16px  
        font-weight: 400  
        text-decoration: none  
        margin-bottom: 15px  
        max-width: 150px  
        &:hover
            color: $pink_color
</style>