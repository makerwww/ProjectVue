<template>
    <div class="red-info-line">
        <div class="container">
            <div class="red-info-line__content">
                <div class="content__header-block">
                    <p>{{checkCurCategory(category)}}</p>
                </div>
                <div class="content__bread-crumbs">
                    HOME/{{checkCurCategory(category)}}/<span class="pink-letter">{{checkCurItem(itemType)}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'red-line',
    data() {
        return{
            category: this.$route.params['category'],
            itemType: this.$route.params['itemType'],
            itemTypeArr: ['Accessories','Bags','Denim','Hoodies&Sweatshirts','Jackets&Coats', 'Pants', 'Polos', 'Shirts', 'Shoes', 'Shorts', 'Sweaters&Knits', 'T-Shirts', 'Tanks']
        }
    },
    methods: {
        checkCurCategory(category){
            if (category == 'formen') {
                return 'MEN'
            } else if(category == 'forwomen'){
                return 'WOMEN'
            } else if(category == 'forkids'){
                return 'KIDS'
            } else return 'ACCSESORIES'
        },
        checkCurItem(item){
            let newName = '';
            let oldName;
            if(item != undefined){
                for(let i = 0; i < item.length; i++){
                    if(item[i] == '&') {
                        oldName = item;
                        newName = (oldName.slice(0,i) + ' & ' + oldName.slice(i+1)).toUpperCase();
                    }
                }
            }
            if(item == undefined) {
                return 'ALL';
            } else if(item == oldName){
                return newName;
            }return item.toUpperCase();
            
        }
    },
    watch: {
        $route (toR){
            this.category = toR.params['category']
            this.itemType = toR.params['itemType']
        }
    }
}
</script>

<style lang="sass">
.red-info-line 
    width: 100%  
    height: 150px  
    background-color: #f8f3f4  
    margin-bottom: 35px  
  
.red-info-line__content 
    display: flex  
    width: inherit  
    height: 150px  
    align-items: center  

.content__header-block 
    display: flex  
    width: 50%  
    justify-content: flex-start  
    p 
        font-size: 24px  
        font-weight: 900  
        color: $pink_color  
  
.content__bread-crumbs 
    display: flex  
    width: 50%  
    justify-content: flex-end  
    font-weight: 300  
    font-size: 14px  
    span 
        font-size: 14px  
        font-weight: 700  
        color: $pink_color  
  
</style>