<template>
    <div class="goods-block">
        <!-- <div class="item-block" v-for="item of products" :key="item" :img="item.img">
            <img :src="img" alt="item">
            <p>{{item.id}}</p>
            <span>{{item.price}}</span>
            <div class="good-hover-block">
                <div class="good-hover-block__button">
                    <img src="../assets/img/shop.png" alt="pcart">
                    <span>Add to Cart</span>
                </div>
            </div>
        </div>
    </div> -->
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
            <img src="../assets/img/item6.png" alt="item">
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
    </div>
</template>

<script>
export default {
    name: "menCatalog",
    data() {
        return{
            catalogUrl: '../../catalogs/menCatalog.json',
            products: [],
        }
    },
     mounted(){
        this.$parent.getJson(`${this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },
}
</script>