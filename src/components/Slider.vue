<template>
    <div class="top-picture-block">
        <div class="container">
            <div class="top-picture-block__line"></div>
            <div class="top-picture-block__text">
                <p>THE BRAND</p>
                <p>OF LUXERIOUS <span class="pink-letter">FASHION</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slider'
}
</script>

<style lang="sass">
.top-picture-block 
    width: 100%  
    min-height: 650px  
    background: url(../assets/img/mainPic.png) no-repeat  
    background-size: cover  
    display: flex  
    align-items: center  
  
.top-picture-block__line 
    width: 12px  
    height: auto  
    background-color: #f16d7f  
    margin-right: 15px  
  
.top-picture-block__text 
    font-weight: 900  
  
.top-picture-block__text p:first-of-type 
    font-size: 60px  
  
.top-picture-block__text p:last-of-type 
    font-size: 40px  
</style>