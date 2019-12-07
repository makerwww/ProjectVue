<template>
    <div class="menu-block">
        <div class="container">
            <div class="menu-block__links">
                <router-link to="/" tag="a" class="menu-block__link">HOME</router-link>
                <router-link tag="a" v-for="category in categoriesArr" :key="category" :to='/Catalog/+category' class="menu-block__link">{{categoriesNames[categoriesArr.indexOf(category)]}}</router-link>
                <a href="" class="menu-block__link">FEATURED</a>
                <a href="" class="menu-block__link">HOT DEALS</a>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            categoriesArr: ['formen', 'forwomen', 'forkids', 'accesories'],
            categoriesNames: ['MEN', 'WOMEN', 'KIDS', 'ACCSOSERIESE'],
        }
    },
}
</script>

<style lang="sass">
.menu-block 
    width: 100%  
    height: 50px  
    border: 1px solid #ececec  
  
.menu-block__links 
    display: flex  
    width: 700px  
    margin: 0 auto  
    flex-flow: row  
    justify-content: space-around  
    line-height: 50px  
  
.menu-block__link 
    text-decoration: none  
    font-weight: 700  
    color: black  
    &:hover
        color: #f16d7f
</style>