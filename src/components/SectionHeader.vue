<template>
    <div class="headers-block">
        <div class="container">
            <div class="headers-block__text">
                <h2>Featured Items</h2>
                <p>Shop for items based on what we featured in this week</p>
            </div>
        </div>
    </div>        
</template>

<script>
export default {
    name: 'SectionHead'
}
</script>

<style scoped lang="sass">
.headers-block 
    width: 100%  
    margin: 25px 0  
  
.headers-block__text 
    display: flex  
    width: inherit  
    flex-flow: column  
    text-align: center  
    h2 
        font-weight: 900  
        font-size: 30px  
        color: $grey_color_2  
    p 
        font-weight: 300  
        font-size: 14px  
        color: #9f9f9f  
  
</style>