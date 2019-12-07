<template>
    <div class="Cart">
        <Header> </Header>
        <Navigation></Navigation>
        <CartList></CartList>
        <Checkout></Checkout>
        <Comments></Comments>
        <BottomNav></BottomNav>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    components: {
        Header: () => import('../components/Header'),
        Navigation: () => import('../components/Navigation'),
        CartList: () => import('../components/CartList'),
        Checkout: () => import('../components/Checkout'),
        Comments: () => import('../components/Comments'),
        BottomNav: () => import('../components/BottomNav'),
        Footer: () => import('../components/Footer'),
    }
}
</script>