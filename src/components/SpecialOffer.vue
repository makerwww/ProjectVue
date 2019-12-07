<template>
    <div class="special-offer-info">
        <div class="container align-center">
            <div class="special-offer-info__photo-block">
                <img src="../assets/img/top-layer.png" alt="offer">
                <div class="photo-block__text">
                    <p>30% <span class="pink-letter">OFFER</span></p>
                    <p>FOR WOMEN</p>
                </div>
            </div>

            <div class="special-offer-info__information">
                <div class="information__block">
                    <img src="../assets/img/car.png" alt="car" width="45" height="32">
                    <div class="information__text">
                        <h3>Free Delivery</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div class="information__block">
                    <img src="../assets/img/sale.png" alt="sale" width="40" height="40">
                    <div class="information__text">
                        <h3>Sales & discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div class="information__block">
                    <img src="../assets/img/crown.png" alt="crown" width="51" height="32">
                    <div class="information__text">
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpecOffer'
}
</script>

<style lang="sass">
.special-offer-info 
    width: 100%  
    margin: 80px 0  
    text-align: center  
  
.special-offer-info__photo-block 
    display: flex  
    position: relative  
    width: 70%  
    height: 490px  
    margin-right: 0  
    background: url(../assets/img/girl-offer.png)  
    background-size: cover  
  
.photo-block__text 
    min-width: 200px  
    position: absolute  
    top: 90px  
    left: 30px  
    p 
        color: white  
        font-weight: 900  
        font-size: 54px  
        &:last-of-type
            font-size: 32px  
            float: left  
  
.special-offer-info__images 
    display: flex  
    background-color: #222224  

  
.special-offer-info__information 
    display: flex  
    background-color: #222224  
    height: 490px  
    width: 30%  
    flex-flow: column  
    box-sizing: border-box  
    padding-top: 40px  
    color: white  
    align-items: center 
    h3 
        margin-bottom: 15px  
  
.information__block 
    align-items: center  
    display: flex  
    flex-flow: row  
    padding: 10px  
    img 
        margin: 0 25px  
        margin-top: -70px  
  
.information__text 
    display: flex  
    justify-content: flex-start  
    flex-flow: column  
    text-align: left  
    margin-right: 30px  
    p 
        font-weight: 300  
        font-size: 14px  
        line-height: 25px  
    h3 
        font-size: 20px  
</style>