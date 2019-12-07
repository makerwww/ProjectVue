<template>
    <div class="products-block">
        <div class="container">
            <div v-show="category != 'accesories'" class="products-block__menu">
                <a href="#" class="first-level-link active">
                    CATEGORY
                </a>               
                <div class="menu__second-level">
                    <router-link tag="a" class="second-level-link" v-for="type in itemTypeArr" :key="type" :to="'/Catalog/'+category+'/' + type">{{itemTypeArr[itemTypeArr.indexOf(type)]}}</router-link>
                </div>
                <a href="#" class="first-level-link">
                    BRAND
                </a>
                <a href="#" class="first-level-link">
                    DESIGNER
                </a>
            </div>

            <div class="products-block__items">
                <div v-show="category != 'accesories'" class="items__filter">
                    <div class="filter__trending-now">
                        <p class="filter__header">
                            TRENDING NOW
                        </p>
                        <div class="trending-now__line">
                            <span>Bohemian</span>
                            <span class="side-borders">Floral</span>
                            <span>Lace</span>
                        </div>
                        <div class="trending-now__line">
                            <span>Floral</span>
                            <span class="side-borders">Lace</span>
                            <span>Bohemian</span>
                        </div>
                    </div>
                    <div class="filter__sizes">
                        <p class="filter__header">
                            SIZE
                        </p>
                        <div class="trending-now__line">
                            <input type="checkbox" name="XXS" id="XXS">
                            <label for="XXS">XXS</label>
                            <input type="checkbox" name="XS" id="XS">
                            <label for="XS">XS</label>
                            <input type="checkbox" name="S" id="S">
                            <label for="S">S</label>
                            <input type="checkbox" name="M" id="M">
                            <label for="M">M</label>
                        </div>
                        <div class="trending-now__line">
                            <input type="checkbox" name="L" id="L">
                            <label for="L">L</label>
                            <input type="checkbox" name="XL" id="XL">
                            <label for="XL">XL</label>
                            <input type="checkbox" name="XXL" id="XXL">
                            <label for="XXL">XXL</label>
                        </div>
                    </div>
                    <div class="filter__price-range">
                        <p class="filter__header">
                            PRICE
                        </p>
                        <input type="range" min="10" max="500">
                    </div>
                </div>

                <div v-show="category != 'accesories'" class="items__sort">
                    <label for="sort-by">Sort by</label>
                    <select name="sort-by" id="sort-by">
                        <option value="Name">Name</option>
                        <option value="Price">Price</option>
                        <option value="Size">Size</option>
                    </select>
                    <label for="show">Show</label>
                    <select name="show" id="show">
                        <option value="Six">6</option>
                        <option value="twelwe">12</option>
                        <option value="eighteen">18</option>
                    </select>
                </div>

                <MenCatalog v-if="category == 'formen'"></MenCatalog>
                <WomenCatalog v-else-if="category == 'forwomen'"></WomenCatalog>
                <KidsCatalog v-else-if="category == 'forkids'"></KidsCatalog>
                <Acceseries v-else></Acceseries>


                <div class="items__watch-more">
                    <div class="watch-more__pages">
                        <p>&lt;</p>
                        <a href="#" class="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <span>.....</span>
                        <a href="#">20</a>
                        <p>&gt;</p>
                    </div>
                    <div class="watch-more__button">
                        <a href="#">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Goods',
    components: {
        MenCatalog: () => import('../components/MenCatalog'),
        WomenCatalog: () => import('../components/WomenCatalog'),
        KidsCatalog: () => import('../components/KidsCatalog'),
        Acceseries: () => import('../components/Acceseries')

    },
    data() {
        return{
            category: this.$route.params['category'],
            itemType: this.$route.params['itemType'],
            itemTypeArr: ['Accessories','Bags','Denim','Hoodies&Sweatshirts','Jackets&Coats', 'Pants', 'Polos', 'Shirts', 'Shoes', 'Shorts', 'Sweaters&Knits', 'T-Shirts', 'Tanks'] 
        }
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    alert(error)
                })
        },
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
.products-block 
    width: 100%  
    min-height: 300px  
  
.products-block__menu 
    display: flex  
    flex-flow: column
    width: 30%  

.products-block__items 
    display: flex  
    flex-flow: column
    width: 70%  
.first-level-link
    display: flex
    align-items: center
    width: 90%
    height: 40px
    margin: 5px 0
    padding: 5px 20px
    box-sizing: border-box
    text-decoration: none
    color: black
    font-weight: 700
    font-size: 14px
    border-left: 4px solid $pink_color
    border-bottom: 2px solid #ebebeb
    position: relative
    &:after 
        content: "▼"
        transition: .3s
        position: absolute
        right: 15px
        top: 10px
.menu__second-level
    display: flex
    flex-flow: column
    margin: 15px 0
.second-level-link
    width: 90%
    height: 30px
    display: flex
    align-items: center
    text-decoration: none
    color: $grey_color_1
    padding-left: 20px
    &:hover 
        color: $pink_color
.items__filter
    width: 95%
    display: flex
    margin: 0 auto
    min-height: 80px
    justify-content: space-around
.filter__trending-now
    display: flex
    flex-flow: column
    width: 30%
.filter__header
    font-size: 14px
    margin: 10px 6px
    font-weight: 700
    color: $grey_color_1
.trending-now__line
    display: flex
    flex-flow: row
    margin-bottom: 5px
    span 
        margin: 2px 5px
        padding: 0 4px
        font-size: 14px
        font-weight: 400
        color: $grey_color_1
    input
        width: 15px
        height: 15px
        margin: 2px 4px
    label
        font-size: 14px
        color: $grey_color_1
        margin: 0px 8px
.filter__sizes
    width: 33%
.filter__price-range
    width: 33%

.items__sort
    width: 100%
    height: 50px
    background-color: #f3f3f3
    display: flex
    align-items: center
    margin: 15px 0
    padding-left: 25px
    label
        width: 70px
        height: 35px
        line-height: 30px
        text-align: center
        color: $grey_color_1
        background-color: #fff
        margin-left: 15px
    select
        width: 70px
        height: 35px
        font-size: 14px
        font-family: 'Lato'
        border: none
        border-radius: none
        color: $grey_color_1
        background-color: #fff
.items__watch-more
    width: 100%
    height: 70px
    display: flex
    justify-content: space-between
.goods-block
    display: flex
    width: 100%
    min-height: 400px
    justify-content: space-around
    flex-wrap: wrap
.watch-more__pages
    width: 260px
    height: 45px
    color: $grey_color_3
    display: flex
    border: 1px solid $grey_color_3
    border-radius: 4px
    flex-direction: row
    justify-content: center
    font-weight: 400
    p 
        font-size: 18px
        margin: 10px 6px
        cursor: pointer
        &:hover
            color: $pink_color
    a 
        text-decoration: none
        font-size: 18px
        color: $grey_color_3
        margin: 10px 6px
        cursor: pointer
        &:hover
            color: $pink_color
    span
        font-size: 16px
        margin: 15px 5px
.watch-more__button
    display: flex
    a 
        width: 150px
        height: 50px
        border: 1px solid $pink_color
        border-radius: 5px
        text-decoration: none
        text-align: center
        line-height: 45px
        color: $pink_color
        font-size: 16px
        transition: .3s
        &:hover
            background-color: $pink_color
            color: #fff

</style>