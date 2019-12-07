<template>
    <div class="info-block">
        <div class="container line-align">
            <div class="information__block__center">
                <img src="../assets/img/car.png" alt="car" width="45" height="32">
                <div class="information__text  align-center">
                    <h3>Free Delivery</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
                </div>
                <div class="information__block__center">
                    <img src="../assets/img/sale.png" alt="sale" width="40" height="40">
                    <div class="information__text align-center">
                        <h3>Sales & discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div class="information__block__center">
                    <img src="../assets/img/crown.png" alt="crown" width="51" height="32">
                    <div class="information__text  align-center">
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'info',
}
</script>

<style lang="sass">
.info-block
    width: 100%
    display: flex
    align-items: center
    min-height: 340px
    margin-top: 50px
    background-color: $grey_color_2
    color: #fff
.line-align
    display: flex
    flex-flow: row
    justify-content: space-between
.information__block__center
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    img 
        margin-bottom: 25px
</style>