<template>
    <main>
        <section id="partner-section" class="d-flex justify-content-between bg-danger mt-3">
            <div class="text-white d-flex flex-column align-items-start justify-content-center px-5 mx-5">
                <h1>Udemy Affiliate Sales</h1>
                <h2>Monetize your audience and attract new customers with Udemy!</h2>
            </div>
            <img src="./../assets/slide-1.jpg" alt="udemy">
        </section>
        <section id="popular-development-section" class="p-5">
            <h1>Popular Development Courses</h1>
            <!--<ContentLoader :data="courses" class="py-5"></ContentLoader>-->
            <ContentLoader :data="developmentData" class="py-5"></ContentLoader>
        </section>
        <section id="banner-section" class="d-flex align-items-center py-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 offset-2 text-container">
                        <h1 class="fw-bold">
                            Limitless learning,
                            more possibilities
                        </h1>
                        <h2 class="py-3">
                            Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.
                        </h2>
                        <button class="btn btn-danger">READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="recent-section" class="py-5 text-center">
            <span @click="loadBack()" id="controller-page-back" class="bg-danger d-flex align-items-center justify-content-center">(:--</span>
            <h3 class="text-center">Recent courses</h3>
            <ul class="list-unstyled my-5 d-flex justify-content-center gap-3 text-aegean">
                <li :key="'category-'+index" v-for="(cat, index) in categories" 
                @click="setActiveRecentCategory(cat.value);performCategoryCall(cat.value)">
                    {{cat.textContent}}
                </li>
            </ul>
            <ContentLoader :data="recentCategoryData" class="py-5"></ContentLoader>
            <span @click="loadNext()" id="controller-page-next" class="bg-danger d-flex align-items-center justify-content-center" >--:)</span>
        </section>
        <section id="subscribe-section" class="bg-danger py-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 offset-2">
                        <h4 class="text-white">Subscribe our newsletter</h4>  
                        <p class="text-white">
                            There are many variations of passages of Lorem Ipsum avaiable, but the majority have suffered 
                            alteration in some form, by injected humour, or randomized words.
                        </p>
                    </div>
                    <div class="col-4">
                        <label for="emailInput" class="my-3 text-white">YOUR E-MAIL ADRESS</label>
                        <div class="input-group d-flex flex-nowrap">
                            <input id="emailinput" type="text" class="form-control form-control-lg rounded-0 bg-light-grey" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Your E-Mail">
                            <span class="input-group-text btn-aegean rounded-0" id="inputGroup-sizing-default">SUBSCRIBE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="popular-section" class="text-center py-5">
            <h1>Popular courses</h1>
            <h2>Dicover our most popular courses for self learning</h2>
            <ContentLoader :data="popularData" class="py-5"></ContentLoader>
        </section>
        <section id="join-section" class="py-5">
            <div class="container-fluid">
                <div class="row d-flex gap-3 justify-content-around">
                    <div class="col-5 d-flex gap-3 align-items-center p-5">
                        <img src="./../assets/instructor.png" alt="instructor img">
                        <div class=" d-flex flex-column gap-3">
                            <h4>Become an Instructor</h4>
                            <p>Teach what you love. Masterstudy gives you the tools to create a course</p>
                            <button class="btn btn-danger">START TEACHING</button>
                        </div>
                    </div>
                    <div class="col-5 d-flex gap-3 align-items-center p-5">
                        <img src="./../assets/business.png" alt="business img">
                        <div class=" d-flex flex-column gap-3">
                            <h4>Access For Business</h4>
                            <p>Get unlimited access to 2,500 of top courses for your team</p>
                            <button class="btn btn-danger">DOING BUSINESS</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="future-section" class="py-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-5 offset-2 py-5 my-5 bg-white">
                        <h4>Investing for Your Future</h4>
                        <p>
                            It is no exaggeration to say this MasterStudy experience was transformative-both professionally and personally
                            This workshop will long remain a high point of my life. Thanks again... i am feeling energized and eager to kt teaching
                            my class next week. I can't wait to use all of my new teaching tools. I will absolutely reccomend this workshop to
                            other educators!
                        </p>
                        <h5>Linda Green</h5>
                        <h6>Product Manage, Apple inc.</h6>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import ContentLoader from '../subcomponents/ContentLoader'

import axios from 'axios'

export default {
  components: { ContentLoader },
    name : 'Main',
    data(){
        return {
            courses:[
                {
                    title: 'The complete IOS 10 & Swift 3 Developer Course',
                    category: 'Development',
                    src: require('./../assets/ios-bg-2.jpg'),
                    rated: 4,
                    price: 199.99,
                    discountedPrice : 100
                },
                {
                    title: 'Web Design for Beginners: Real Word Coding in HTML & CSS',
                    category: 'Development',
                    src: require('./../assets/web-design-bg.jpg'),
                    rated: 5,
                    price: 129.99,
                    discountedPrice : 65
                },
                {
                    title: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
                    category: 'Development',
                    src: require('./../assets/github-bg.jpg'),
                    rated: 4,
                    price: 99.99,
                    discountedPrice : 50
                },
                {
                    title: 'The complete IOS 11 & Swift Developer Course - Build 20 Apps',
                    category: 'Development',
                    src: require('./../assets/ios-bg-1.jpg'),
                    rated: 4,
                    price: 199.99,
                    discountedPrice : 100
                },
                {
                    title: 'Android Java Masterclass - Become an App Developer',
                    category: 'Development',
                    src: require('./../assets/android-java-bg.jpg'),
                    rated: 4,
                    price: 99.99,
                    discountedPrice : 50
                },
                {
                    title: 'Xamarine forms: Build Native Cross-Platform Apps with C#',
                    category: 'Development',
                    src: require('./../assets/xamarin-bg.jpg'),
                    rated: 4,
                    price: 199.99,
                    discountedPrice : 100
                }
            ],
            url : 'https://www.udemy.com/api-2.0',
            token : 'Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==',
            //developmentData : require('./../data/udemy-development-data.json'),
            //recentData : require('./../data/udemy-recent-data.json'),
            popularData : undefined,
            recentData : undefined,
            developmentData : undefined,
            recentCategoryData : undefined,
            recentCategoryCounter : 1,
            recentCategoryActive : undefined,
            categories : [
                {
                    textContent : 'All Categories',
                    value : 'recent'
                },
                {
                    textContent : 'Business',
                    value : 'business'
                },
                {
                    textContent : 'Design',
                    value : 'design'
                },
                {
                    textContent : 'Development',
                    value : 'development'
                },
                {
                    textContent : 'IT & Software',
                    value : 'software'
                },
                {
                    textContent : 'Lifestyle',
                    value : 'lifestyle'
                },
                {
                    textContent : 'Marketing',
                    value : 'marketing'
                },
                {
                    textContent : 'Office Productivity',
                    value : 'productivity'
                }
            ]
            //popularData : require('./../data/udemy-popular-data.json')
        }
    },
    mounted(){
        this.performPopularCall()
        this.performCategoryCall('recent')
        this.performDevelopmentCall()
    },
    methods : {
        dataFetcher(callResult, cat){
            const dataArray = [ ];
            for (let index = 0; index < callResult.length; index++) {
                    dataArray.push({
                        title : callResult[index].title,
                        src : callResult[index].image_480x270,
                        category : cat,
                        rated : Math.floor(Math.random()*5),
                        price : callResult[index].price,
                        discountedPrice : '50$'
                    })
            }
            return dataArray
        },
        performPopularCall(){
            axios.get(`/popular`).then((response) => {
                this.popularData = this.dataFetcher(response.data.results, 'Popular')
            }).catch((e) => {
                alert(`error: ${e}`)
            });
        },
        performRecentCall(){
            axios.get(`/recent`).then((response) => {
                this.recentData = this.dataFetcher(response.data.results, 'Recent')
            }).catch((e) => {
                alert(`error: ${e}`)
            });
        },
        performDevelopmentCall(){
            axios.get(`/development`).then((response) => {
                this.developmentData = this.dataFetcher(response.data.results, 'Development')
            }).catch((e) => {
                alert(`error: ${e}`)
            });
        },
        performCategoryCall(category){
            let url = '';
            if(category === 'recent')
                url = `/${category}/${this.recentCategoryCounter}`
            else if(!category)
                url = `/recent/${this.recentCategoryCounter}`
            else
                url  = `/recent-${category}/${this.recentCategoryCounter}`

            console.log(url);
            axios.get(url).then((response) => {
                this.recentCategoryData = this.dataFetcher(response.data.results, category)
            }).catch((e) => {
                alert(`error: ${e}`)
            });
        },
        loadNext(){
            console.log('loading next...');
            this.recentCategoryCounter++
            console.log(this.recentCategoryCounter);
            this.performCategoryCall(this.recentCategoryActive)
        },
        loadBack(){
            if(this.recentCategoryCounter > 1){
                this.recentCategoryCounter--
                console.log(this.recentCategoryCounter);
                this.performCategoryCall(this.recentCategoryActive)
            }
        },
        setActiveRecentCategory(category){
            this.recentCategoryActive = category
            this.recentCategoryCounter = 1
        }

    },
    computed : {
        /*getDevelopmentData(){
            const dataArray = [ ];
            for (let index = 0; index < this.developmentData.msg.results.length; index++) {
                dataArray.push({
                    title : this.developmentData.msg.results[index].title,
                    src : this.developmentData.msg.results[index].image_480x270,
                    category : 'Development',
                    rated : Math.floor(Math.random()*5),
                    price : this.developmentData.msg.results[index].price,
                    discountedPrice : '50$'
                })
                console.log(dataArray[index])
            }
            return dataArray
        },
        getRecentData(){
            const dataArray = [ ];
            for (let index = 0; index < this.recentData.msg.results.length; index++) {
                dataArray.push({
                    title : this.recentData.msg.results[index].title,
                    src : this.recentData.msg.results[index].image_480x270,
                    category : 'Development',
                    rated : Math.floor(Math.random()*5),
                    price : this.recentData.msg.results[index].price,
                    discountedPrice : '50$'
                })
                console.log(dataArray[index])
            }
            return dataArray
        },
        getPopularData(){
            const dataArray = [ ];
            for (let index = 0; index < this.popularData.msg.results.length; index++) {
                dataArray.push({
                    title : this.popularData.msg.results[index].title,
                    src : this.popularData.msg.results[index].image_480x270,
                    category : 'Development',
                    rated : Math.floor(Math.random()*5),
                    price : this.popularData.msg.results[index].price,
                    discountedPrice : '50$'
                })
                console.log(dataArray[index])
            }
            return dataArray
        }*/
    }
}
</script>
<style scoped lang="scss">
@import './../styles/variables.scss';
/* partner section, banner section, recent section, popular section */
h1{
    font-size: 42px;
}
/* partner section, banner section, popular section*/
h2{
    font-size: 22px;
    font-weight: normal;
}
/* recent section */
h3{

}
#partner-section{
    img{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 32% 100%);
        max-width: 40%;
    }
}
#banner-section{
    background-image: url('./../assets/bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
#recent-section{
    position: relative;
    .active{
        background-color: $light-grey;
        color: $grey;
        border-radius: 15px;
    }
    li{
        padding: 0.5rem 1rem;
        cursor: pointer
    }
    #controller-page-back, #controller-page-next{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 3rem;
        height: 6rem;
        z-index: 99;
        color: white
    }
    #controller-page-back{
        left: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #controller-page-next{
        right: 0;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}
#join-section{
    .col-5{
        border: solid 1px $grey
    }
}
#future-section{
    background-image: url('./../assets/testimonial-1-1917x640-1-1914x639.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>