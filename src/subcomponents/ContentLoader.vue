<template>
    <div class="content-loader container-fluid">
        <div class="row d-flex justify-content-center gap-3">
            <div :key="'content-'+index" v-for="(content, index) in data"
            class="card px-0 d-flex flex-column">
                <img :src="content.src" :alt="content.title">
                <div class="card-body">
                    <h4>{{content.category}} ></h4>
                    <h2>{{content.title}}</h2>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                    <div class="star-container">
                        <i :key="'star-'+index" v-for="(star, index)  in content.rated" class="fa fa-star text-gold"></i>
                        <i :key="'star-empty-'+index" v-for="(star, index)  in (5 - content.rated)" class="fa fa-star text-grey"></i>
                    </div>
                    <div class="price-container d-flex flex-column align-items-end text-right">
                        <h4 class="text-right my-0">{{content.price}}</h4>
                        <h3>{{content.discountedPrice}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name : 'ContentLoader',
    props : {
        data : Array
    }
}
</script>
<style lang="scss" scoped>
    @import './../styles/variables.scss';
    *{
        white-space: pre-wrap
    }
    .card{
        border: solid 1px $grey;
        width: calc(100%/7);
        position: relative;
        h4{
                font-size: 14px;
                font-weight: normal;
                color: $grey
        }
        h3{
            font-size: 16px;
        }
        h2{
            font-size: 18px;
            font-weight: 550;
        }
        .card-body{
            
        }
        .card-footer{
        }
        
    }
    .text-gold{
        color: gold
    }
</style>