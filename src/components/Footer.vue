<template>
    <footer class="footer">
        <div class="container">
            <p>
                    © 2019  Brand  All Rights Reserved.
            </p>
            <div class="social-links">
                <a href="#"><img src="../assets/img/facebook.png" alt=""></a>
                <a href="#"><img src="../assets/img/twitter.png" alt=""></a>
                <a href="#"><img src="../assets/img/in.png" alt=""></a>
                <a href="#"><img src="../assets/img/print.png" alt=""></a>
                <a href="#"><img src="../assets/img/google.png" alt=""></a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="sass">
.footer 
    display: flex  
    width: 100%  
    background-color: #e6e6e6  
    min-height: 80px  
    align-items: center  
    p
        width: 50%  
        display: flex  
        align-items: center  
  
.social-links 
    display: flex  
    justify-content: flex-end  
    width: 50%  
    a 
        text-decoration: none  
        display: flex  
        justify-content: center  
        align-items: center  
        width: 40px  
        height: 40px  
        margin: 5px 5px  
        background-color: #fff  
        transition: .3s  
        cursor: pointer  
        &:hover 
            background-color: $pink_color  
            img
                filter: brightness(100)  
  
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