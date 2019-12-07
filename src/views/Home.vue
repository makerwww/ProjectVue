<template>
    <div class="home">
        <Header> </Header>
        <Navigation></Navigation>
        <Slider></Slider>
        <Offers></Offers>
        <SectionHeader></SectionHeader>
        <RecomendedItems></RecomendedItems>
        <SpecialOffer></SpecialOffer>
        <Comments></Comments>
        <BottomNav></BottomNav>
        <Footer></Footer>

    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {
        Header: () => import('../components/Header'),
        Navigation: () => import('../components/Navigation'),
        Slider: () => import('../components/Slider'),
        Offers: () => import('../components/Offers'),
        SectionHeader: () => import('../components/SectionHeader'),
        RecomendedItems: () => import('../components/Recomended'),
        SpecialOffer: () => import('../components/SpecialOffer'),
        Comments: () => import('../components/Comments'),
        BottomNav: () => import('../components/BottomNav'),
        Footer: () => import('../components/Footer'),
    }
}
</script>
