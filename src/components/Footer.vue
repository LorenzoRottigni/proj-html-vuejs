<template>
    <footer class="pt-5">
        <div class="container-fluid">
            <div class="row d-flex pb-3">
                <div class="col-6 col-lg-2 offset-lg-1">
                    <h3 class="text-white pb-2">ABOUT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde. Porro reiciendis minus necessitatibus libero, culpa reprehenderit nesciunt ut exercitationem </p>
                </div>
                <div class="col-6 col-lg-2">
                    <h3 class="pb-2">CONTACT</h3>
                    <p>USA, California 20, First Avenue, California</p>
                    <p>tel.: +1 212 458 300 32</p>
                    <p>fax: +1 212 375 24 14</p>
                    <p>info@masterstudy.com</p>
                </div>
                <div class="col-6 col-lg-2">
                    <h3 class="pb-2">SOCIAL NETWORK</h3>
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
                <div class="col-3 offset-lg-1 align-self-center">
                    <img src="./../assets/Top-udemy-courses-90-percent-off.jpg" alt="discounts">
                </div>
            </div>
            <div class="row top-white py-3">
                <div class="col-10 offset-1 d-flex align-items-center flex-nowrap gap-3">
                    <img src="./../assets/footer-logo2x-50x56.png" class="img-footer" alt="logo small">
                    <p class="mb-0">Copyright &copy; 2020. MasterStudy theme by Lorenzo Rottigni</p>
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
i{
    width: 70px;
    height: 70px;
}
footer{
    background-color: $dark-blue;
    color: white
}
.col-3 img{
    max-width: 100%;
}
.img-footer{
    width: 56px;
    height: 50px;
}
.top-white{
    border-top: solid 1px white
}
</style>