<template>
    <div class="comment-subscribe">
        <div class="container">
            <div class="comments-block">
                <img src="../assets/img/comment-woman.png" alt="woman">
                <div class="comments-block__text">
                    <i>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</i>
                    <p>Bin Burhan</p>
                    <p>Dhaka, Bd</p>
                </div>
            </div>
            <div class="subscribe-block">
                <p>SUBSCRIBE</p>
                <P>FOR OUR NEWLETTER AND PROMOTION</P>
                <form action="">
                    <input type="text" name="" id="" placeholder="Enter Your Email">
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Comments',
}
</script>

<style lang="sass">
.comment-subscribe 
    width: 100%  
    background: url(../assets/img/backgrnd-bot.png) no-repeat  
    background-size: cover  
    height: 430px  
  
.comments-block 
    display: flex  
    width: 50%  
    height: 430px  
    align-items: center  
    img 
        width: 80px  
        height: 80px  
        margin-right: 20px  
  
.comments-block__text 
    width: 70%  
  
.comments-block__text p:first-of-type 
    color: $pink_color  
    font-weight: 900  
    font-size: 16px  
    margin-top: 15px  
  
.comments-block__text p:last-of-type 
    font-size: 12px  
  

.subscribe-block 
    width: 50%  
    display: flex  
    flex-flow: column  
    justify-content: center  
    align-items: center  
    box-sizing: border-box  
    border-left: 2px solid white  
    input 
        width: 330px  
        height: 45px  
        font-size: 18px  
        padding: 0 15px  
        border-radius: 20px 0 0 20px  
        border: 0   
        box-sizing: border-box  
    button 
        width: 105px  
        height: 45px  
        border-radius: 0 20px 20px 0  
        border: 0  
        color: white  
        font-size: 14px  
        background-color: $pink_color  
        padding: 15px 5px  
        margin-left: -3px  
        cursor: pointer  
        transition: .3s 
        &:hover 
            color: $grey_color_2     
  
.subscribe-block p:first-of-type 
    font-size: 24px  
  
.subscribe-block p:last-of-type 
    font-size: 14px  
    margin: 10px 0 25px   
</style>