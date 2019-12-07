<template>
  <div id="app">
      <!-- <router-link to="/"></router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
* 
    margin: 0  
    padding: 0  
    outline: none
  
/* common properties */
::placeholder 
    font-family: Lato  
input,select
    outline: none
.active
    color: $pink_color!important
.rotate-180
    transform: rotate(180deg)
  
p,span,a,h1,h2,h3,h4,h5,div 
    font-family: 'Lato'  
.helpfull
    font-size: 13px
    color: $grey_color_3
    line-height: 24px
.bot-bord
    border-bottom: 2px solid #e8e8e8
    padding: 15px 0
.container 
    width: 1200px  
    display: flex
    margin: 0 auto
    flex-wrap: wrap
.relative-block
    position: relative
    width: 100%
.float-right 
    display: block  
    float: right  
.align-center 
    text-align: center !important
.justify-center
    justify-content: center
.no-margin
    margin: 0!important
.top-margin
    margin: 0!important
    margin-top: 20px!important
.side-borders
    border-right: 1px solid lightgrey 
    border-left: 1px solid lightgrey
/* Common styles for blocks */
.item-block 
    width: 260px  
    max-height: 380px
    margin: 10px  
    position: relative  
    padding-bottom: 10px
    img 
        width: 260px  
        height: 260px  
        margin-bottom: 20px  
    p 
        font-weight: 400  
        margin: 10px 0  
        padding: 0 5px
    span
        font-weight: 900  
        color: $pink_color  
        padding: 0 5px
    &:hover
        box-shadow: 1px 2px 10px 5px lightgrey
    &:hover .good-hover-block
        opacity: 1

.good-hover-block 
    width: 260px  
    height: 260px  
    display: flex  
    align-items: center  
    position: absolute  
    top: 0  
    left: 0  
    background-color: rgba(0, 0, 0, 0.5)  
    opacity: 0  
    transition: .3s  
  
.good-hover-block__button 
    display: flex  
    align-items: center  
    margin: 0 auto  
    justify-content: space-around  
    width: 150px  
    height: 60px  
    border: 1px solid white  
    img
        width: 30px  
        height: 26px  
        filter: brightness(100)  
        margin-bottom: 0  
    span
        color: #ffffff  
</style>
