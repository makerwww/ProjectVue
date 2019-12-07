<template>
    <div class="catalog">
        <Header></Header>
        <Nav></Nav>
        <RedLine></RedLine>
        <ItemsBlock></ItemsBlock>
        <InfoBlock></InfoBlock>
        <Comments></Comments>
        <BottomNav></BottomNav>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    name:'Catalog',
    components: {
        Header: () => import('../components/Header'),
        Nav: () => import('../components/Navigation'),
        RedLine: () => import('../components/RedLine'),
        ItemsBlock: () => import('../components/GoodsBlock'),
        InfoBlock: () => import('../components/InfoBlock'),
        Comments: () => import('../components/Comments'),
        BottomNav: () => import('../components/BottomNav'),
        Footer: () => import('../components/Footer'),
    },
    data() {
        return{
        
        }
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
    },

}
</script>

<style lang="sass">

    
</style>