<template>
    <footer class="pt-5">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center gap-3">
                <div class="col-2">
                    <h3 class="text-white">ABOUT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde. Porro reiciendis minus necessitatibus libero, culpa reprehenderit nesciunt ut exercitationem </p>
                </div>
                <div class="col-2">
                    <h3>CONTACT</h3>
                    <p>USA, California 20, First Avenue, California</p>
                    <p>tel.: +1 212 458 300 32</p>
                    <p>fax: +1 212 375 24 14</p>
                    <p>info@masterstudy.com</p>
                </div>
                <div class="col-2">
                    <h3>SOCIAL NETWORK</h3>
                    <div class="d-flex flex-column flex-wrap fs-3">
                        <div class="d-flex gap-3 w-100">
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-linkedin"></i>
                            <i class="fa fa-pinterest"></i>
                        </div>
                        <div class="d-flex gap-3 w-100 ">
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-skype"></i>
                            <i class="fa fa-youtube"></i>
                            <i class="fa fa-google-plus"></i>
                        </div>
                        
                    </div>
                </div>
                <div class="col-3">
                    <img src="./../assets/Top-udemy-courses-90-percent-off.jpg" alt="discounts">
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name : 'Footer'
}
</script>
<style scoped lang="scss">
@import './../styles/variables.scss';
footer{
    background-color: $dark-blue;
    color: white
}
img{
    max-width: 100%;
}
</style>