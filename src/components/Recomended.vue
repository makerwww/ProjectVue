<template>
    <div class="goods-block">
        <div class="container justify-center">
            <div class="item-block">
                <img src="../assets/img/item1.png" alt="item">
                <p>Mango  People  T-shirt</p>
                <span>$52.00</span>
                <div class="good-hover-block">
                    <div class="good-hover-block__button">
                        <img src="../assets/img/shop.png" alt="pcart">
                        <span>Add to Cart</span>
                    </div>
                </div>
            </div>
            <div class="item-block">
                <img src="../assets/img/item2.png" alt="item">
                <p>Mango  People  T-shirt</p>
                <span>$52.00</span>
                <div class="good-hover-block">
                    <div class="good-hover-block__button">
                        <img src="../assets/img/shop.png" alt="pcart">
                        <span>Add to Cart</span>
                    </div>
                </div>
            </div>
            <div class="item-block">
                <img src="../assets/img/item3.png" alt="item">
                <p>Mango  People  T-shirt</p>
                <span>$52.00</span>
                <div class="good-hover-block">
                    <div class="good-hover-block__button">
                        <img src="../assets/img/shop.png" alt="pcart">
                        <span>Add to Cart</span>
                    </div>
                </div>
            </div>
            <div class="item-block">
                <img src="../assets/img/item4.png" alt="item">
                <p>Mango  People  T-shirt</p>
                <span>$52.00</span>
                <div class="good-hover-block">
                    <div class="good-hover-block__button">
                        <img src="../assets/img/shop.png" alt="pcart">
                        <span>Add to Cart</span>
                    </div>
                </div>
            </div>   
        </div>
         <div class="more-button">
            <button class="more-button__button">Browse All Products &rarr;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReccomendedItems',
}
</script>

<style lang="sass">
.goods-line 
    display: flex  
    width: inherit  
    flex-flow: row  
    flex-wrap: nowrap  
    justify-content: space-around  
    margin: 20px 0  
/* more goods button  */
.more-button 
    width: 100%  
    height: 60px  
    text-align: center  
    margin: 30px auto  
    cursor: pointer  
  
.more-button__button 
    width: 215px  
    height: 50px  
    color: #ffffff  
    background-color: $pink_color  
    border: 0px  
    font-size: 16px  
    cursor: pointer  
    transition: .3s  
    &:hover
        background-color: $grey_color_2  
</style>