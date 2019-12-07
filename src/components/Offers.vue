<template>
    <div class="sales-info">
        <div class="container">
            <div class="sales-info__left-block">
                <div class="square-block">
                    <img src="../assets/img/suitMan.png" alt="Man">
                    <div class="white-block">
                        <p class="white-block__black-text">HOT DEAL</p>
                        <p class="white-block__pink-text">FOR MEN</p>
                    </div>
                </div>
                <div class="rectangle-block">
                    <img src="../assets/img/wallet.png" alt="wallet" class="float-right">
                    <div class="white-block">
                        <p class="white-block__black-text">LUXIROUS & TRENDY</p>
                        <p class="white-block__pink-text">ACCESORIES</p>
                    </div>
                </div>
            </div>
            <div class="sales-info__right-block">
                <div class="rectangle-block">
                    <img src="../assets/img/dressWoman.png" alt="woman">
                    <div class="white-block">
                        <p class="white-block__black-text">30% OFFER</p>
                        <p class="white-block__pink-text">WOMEN</p>
                    </div>
                </div>
                <div class="square-block">
                    <img src="../assets/img/child.png" alt="child">
                    <div class="white-block">
                        <p class="white-block__black-text">NEW ARRIVALS</p>
                        <p class="white-block__pink-text">FOR KIDS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Offers'
}
</script>

<style lang="sass">

.sales-info 
    width: 100%  
    min-height: 400px  
    margin: 50px 0  
.sales-info__left-block 
    width: 50%  
    display: flex  
    flex-flow: column  
    justify-content: center  
.sales-info__right-block 
    width: 50%  
    display: flex   
    flex-flow: column  
    justify-content: center  
.square-block 
    position: relative  
    display: flex  
    width: 560px  
    height: 560px  
    margin: 10px 0  
.rectangle-block 
    position: relative  
    display: flex  
    width: 560px  
    height: 260px  
    margin: 10px 0  
    background-color: #dadad2  
.white-block 
    min-width: 175px  
    height: 80px  
    position: absolute  
    background-color: #ffffff  
    top: 25px  
    left: 0  
.white-block__black-text 
    font-size: 18px  
    font-weight: 900  
    color: #222222  
    margin: 10px 15px 0 15px  
.white-block__pink-text 
    font-size: 30px  
    font-weight: 900  
    color: #f16d7f  
    margin: 0 15px 5px 15px  

</style>