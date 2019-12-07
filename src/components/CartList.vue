<template>
   <div class="container">
        <div class="cart">
            <table>
                <thead>
                    <tr>
                        <td width="400">PRODUCT DETAILS</td>
                        <td>UNITE PRICE</td>
                        <td>QUANTITY</td>
                        <td>SHIPPING</td>
                        <td>SUBTOTAL</td>
                        <td>ACTION</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="cart__item">
                                <img src="img/cart-1.png" alt="item">
                                <div class="cart__item-info">
                                    <h3>MANGO PEOPLE T-SHIRT</h3><br>
                                    <p>Color:<span>Red</span></p>
                                    <p>Size:<span>XS</span></p>
                                </div>
                            </div>
                        </td>
                        <td>
                            $150
                        </td>
                        <td>
                            <input type="number" name="quntity" id="quantity">
                        </td>
                        <td>FREE</td>
                        <td>$300</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart__item">
                                <img src="img/cart-2.png" alt="item">
                                <div class="cart__item-info">
                                    <h3>MANGO PEOPLE T-SHIRT</h3><br>
                                    <p>Color:<span>Red</span></p>
                                    <p>Size:<span>XS</span></p>
                                </div>
                            </div>
                        </td>
                        <td>
                            $150
                        </td>
                        <td>
                            <input type="number" name="quntity" id="quantity" value="2">
                        </td>
                        <td>FREE</td>
                        <td>$300</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart__item">
                                <img src="img/cart-3.png" alt="item">
                                <div class="cart__item-info">
                                    <h3>MANGO PEOPLE T-SHIRT</h3><br>
                                    <p>Color:<span>Red</span></p>
                                    <p>Size:<span>XS</span></p>
                                </div>
                            </div>
                        </td>
                        <td>
                            $150
                        </td>
                        <td>
                            <input type="number" name="quntity" id="quantity">
                        </td>
                        <td>FREE</td>
                        <td>$300</td>
                        <td>x</td>
                    </tr>
                </tbody>
             
            </table>
        </div>
        <div class="container">
            <div class="shop-buttons">
                <div class="shop-buttons__clear">CLEAR SHOPPING CART</div>
                <div class="shop-buttons__continue">CONTINUE SHOPPING</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CartList'
}
</script>

<style lang="sass">
.cart 
    display: flex
    width: 100%
    min-height: 200px
    margin: 30px 0
    table
        width: 100%
        tr 
            border: 2px
            input
               width: 50px 
               height: 35px 
               padding-left: 8px
               text-align: center
               box-sizing: border-box
               font-size: 14px
        td 
            text-align: center
            border-bottom: 2px solid $grey_color_3
            padding: 15px 5px
            &:first-of-type 
                text-align: left
    &__item
        display: flex
        img 
            width: 100px 
            height: 115px
        h3
            font-size: 14px
            width: 100%
    &__item-info
        display: flex
        flex-flow: column
        margin: 10px 
        p 
            font-size: 14px
            font-weight: 300
            span
                color: $grey_color_3
                margin-left: 5px 

.shop-buttons 
    display: flex
    width: 100%
    justify-content: space-between
    margin: 35px 0
    &__clear
        width: 235px
        height: 50px
        text-align: center
        line-height: 50px
        font-size: 14px
        border: 1px solid $grey-color_3
        cursor: pointer
        transition: .3s
        &:hover
            background-color: $grey_color_3
    &__continue
        width: 235px 
        height: 50px
        line-height: 50px
        text-align: center
        font-size: 14px
        border: 1px solid $grey-color_3
        cursor: pointer
        transition: .3s
        &:hover
            background-color: $grey_color_3
        
</style>