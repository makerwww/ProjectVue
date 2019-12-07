<template>
    <div class="container">
        <div class="shopping-info">
            <div class="shopping-info__adress">
                <p>SHIPPING ADRESS</p>
                <form action="#">
                    <select name="country" id="country">
                        <option value="Russia">Russia</option>
                        <option value="Bungladesh">Bungladesh</option>
                        <option value="France">France</option>
                        <option value="GB">Great Britain</option>
                        <option value="Ireland">Ireland</option>
                    </select>
                    <input type="text" name="State" id="state" placeholder="State">
                    <input type="text" name="Zip" id="zip" placeholder="Postcode/Zip">
                    <button>GET A QUOTE</button>
                </form>
            </div>
            <div class="shopping-info__coupon">
                <p>COUPON DISCOUNT</p>
                <form action="#">
                    <label for="coupon">
                        Enter your coupon code if you have one
                    </label>
                    <input type="text" name="coupon" id="coupon" placeholder="Coupon Number">
                    
                    <button>APPLY COUPON</button>
                </form>
            </div>
            <div class="shopping-info__total">
                <p>SUB TOTAL <span>$900</span></p>
                <p>GRAND TOTAL <span>$900</span></p>
                <hr>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Checkout'
}
</script>

<style lang="sass">
.shopping-info
    display: flex
    width: 100%
    min-height: 200px
    margin: 30px 0
    button
        width: 100px
        min-height: 35px
        font-size: 11px
        border: 1px solid $grey_color_3
        font-weight: 700
        background-color: #fff
        transition: .3s
        cursor: pointer
        margin: 10px 0
        padding: 5px
        &:hover
            background-color: $grey_color_3 
    &__adress
        display: flex 
        width: 33%
        flex-flow: column
        padding: 0 1%
        p 
            font-size: 16px 
            font-weight: 700
            margin: 15px 0
        form 
            display: flex 
            flex-flow: column
            select 
                width: 355px
                height: 45px
                border: none
                font-size: 14px
                margin: 10px 0
                color: $grey_color_3
            input
                width: 355px
                height: 45px
                font-size: 14px
                margin: 10px 0
                padding: 0 10px
                box-sizing: border-box
    &__coupon
        display: flex
        flex-flow: column
        width: 33%
        p 
            font-size: 16px 
            font-weight: 700
            margin: 15px 0
        form 
            display: flex
            flex-flow: column 
            label 
                font-size: 14px
                margin: 15px 0
            input
                width: 355px
                height: 45px
                font-size: 14px
                padding: 0 10px
                box-sizing: border-box
                margin: 10px 0
            button
                width: 120px 
    &__total
        display: flex
        width: 33%
        height: 215px
        background-color: #f5f3f3
        flex-flow: column 
        padding: 4%
        box-sizing: border-box
        align-items: center
        align-self: center
        p:first-of-type
            font-size: 11px
            font-weight: 300
            margin: 0 5px
            align-self: flex-end
            span 
                margin-left: 15px
        p:last-of-type 
            font-size-adjust: 16px
            font-weight: 700
            margin: 15px 5px
            align-self: flex-end
            span 
                margin-left: 15px
                color: $pink_color
        hr 
            width: 275px
            height: 2px
            background-color: #e2e2e2
            border: none
        button 
            min-width: 275px 
            min-height: 50px
            background-color: $pink_color
            border: none
            color: #fff
            font-size: 16px
            font-weight: 700

</style>