<template>
    <header>
        <nav class="d-flex justify-content-between align-items-center p-3">
            <div class="input-group list-container">
                <div class="input-group-prepend">
                    <label class="input-group-text h-100" for="inputGroupSelect01">
                        {{getFlagIcon}}
                    </label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" v-model="activeLang">
                    <option selected>{{activeLang}}</option>
                    <option value="GB">GB</option>
                    <option value="IT">IT</option>
                    <option value="DE">DE</option>
                    <option value="FR">FR</option>
                    <option value="ES">ES</option>
                </select>
            </div>
            <div class="list-container d-flex align-items-center gap-5">
                <ul class="list-unstyled d-flex gap-2">
                    <li :key="'text-'+index" v-for="(listItem, index) in textList" class="h-100 d-flex align-items-center">
                        <span :class="(index === activeText)?'active-text':''" class="rounded"></span>
                        <a :href="listItem.ref" @click="setActiveText(index)">{{listItem.title}}</a>
                    </li>
                </ul>
                <ul class="list-unstyled d-flex gap-2 mb-0">
                    <li :key="'icon-'+index" v-for="(listItem, index) in iconList" class="h-100">
                        <i class="fa" :class="listItem"></i>
                    </li>
                </ul>
            </div>
        </nav>
        <section id="search-section d-flex justify-content-around">
            <div class="search-container container-fluid py-4">
                <div class="row d-flex align-items-center gap-3 gap-lg-0">
                    <div class="d-flex col-12 col-lg-7 gap-3">
                        <img src="./../assets/MasterStudy.svg" alt="master study">
                        <div class="btn-group">
                            <button class="btn btn-sm dropdown-toggle text-dark-grey" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-list"></i> CATEGORIES
                            </button>
                            <ul class="dropdown-menu px-3 text-grey">
                                <li>Design</li>
                                <li>Business</li>
                                <li>Development</li>
                                <li>Life Style</li>
                            </ul>
                        </div>
                        <div class="input-group w-50 d-flex flex-nowrap flex-grow-1 ">
                            <input type="text" class="form-control form-control-lg rounded-0 bg-light-grey" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Search Courses">
                            <span class="input-group-text btn-aegean rounded-0" id="inputGroup-sizing-default"><i class="fa fa-search text-white"></i></span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between col-12 col-lg-5">
                        <div class="list-container d-flex align-items-center">
                            <ul class="list-unstyled d-flex text-dark-grey my-0  align-items-center">
                                <li class="d-flex align-items-center"><i class="fa fa-bullhorn fs-3 mx-2 ml-0"></i> Become an instructor</li>
                                <li class="d-flex align-items-center"><i class="fa fa-suitcase fs-3 mx-2 ml-0"></i>For Enterprise</li>
                            </ul>
                        </div>
                        <div class="d-flex align-items-center gap-3">
                            <button class="btn btn-white d-flex align-items-center"> <i class="fa fa-user mx-2 fs-3"></i> Log in</button>
                            <button class="btn btn-danger">SIGN UP</button>
                            <i class="fa fa-bookmark text-aegean fs-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="dark-nav-section" class="bg-dark-blue py-5 mb-5">
            <nav>
                <ul class="list-unstyled d-flex justify-content-center text-white gap-3 mb-0">
                    <li class="d-flex align-items-center gap-3"><i class="fs-3 fa fa-money"></i> Business</li>
                    <li class="d-flex align-items-center gap-3"><i class="fs-3 fa fa-paint-brush"></i> Design</li>
                    <li class="d-flex align-items-center gap-3"><i class="fs-3 fa fa-cog"></i> Development</li>
                    <li class="d-flex align-items-center gap-3"><i class="fs-3 fa fa-smile-o"></i> Life Style</li>
                    <li class="d-flex align-items-center gap-3"><i class="fs-3 fa fa-space-shuttle"></i> Office Productivity</li>
                </ul>
            </nav>
        </section>
    </header>
</template>
<script>
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
export default {
    name : 'Header',
    data(){
        return {
            textList :[ 
                {
                    title : 'Home',
                    ref : '#'
                },
                {
                    title : 'Pages',
                    ref : '#'
                },
                {
                    title : 'Course Formats',
                    ref : '#'
                },
                {
                    title : 'Courses',
                    ref : '#'
                },
                {
                    title : 'Demos',
                    ref : '#'
                },
            ],
            activeText : 0,
            iconList : ['fa-facebook','fa-twitter','fa-instagram','fa-linkedIn','fa-google-plus','fa-youtube'],
            activeLang : 'US'
        }
    },
    computed : {
        getFlagIcon(){
            return getUnicodeFlagIcon(this.activeLang)
        }
    },
    methods : {
        setActiveText(index){
            this.activeText = index
        }
    }
}
</script>
<style scoped lang="scss">
@import './../styles/variables.scss';
@keyframes fadeBump {
    0%{
        width: 0%;
        margin-left: 50%;
    }
    50%{
        width: 100%;
        margin-left: 0;
    }
    100%{
        width: 70%;
        margin-left: 15%;
    }
}
nav{
    border-bottom: solid 1px $grey;
    .list-container{
        height: 50px;
        width: fit-content;
        .custom-select{
            border-color: $grey ;
            color: $grey
        }
        .input-group-prepend{
            border-color: $grey;
        }
    }
    li {
        position: relative;
        a{
            color: $grey;
            font-size: $fs-normal
        }
        i{
            color: $grey;
            font-size: $fs-lg-3;
            transition: 1s;
            &:hover{
                transform: rotate(360deg);
                color: $aegean-blue;
            }
        }
        .active-text{
            position: absolute;
            bottom: -10px;
            display: block;
            margin: 0 auto;
            width: 70%;
            margin-left: 15%;
            height: 3px;
            background-color: $grey;
            animation: fadeBump 1s 1;
        }
    }
}
#search-section {
    ul.dropdown-menu{
        border: solid 1 px $aegean-blue;
        li{
            padding: 0.7rem 0.5rem;
            border-bottom: solid 1px $dark-grey;
            &:last-of-type{
                border-bottom: solid 1px transparent;
            }
        }
    }
    .list-container{
        height: 50px;
        ul{
            li{
                white-space: nowrap;
            }
        }
    }
}
#dark-nav-section{
    nav{
        border-bottom: none;
        i{
            color: white
        }
        li{
            color: white
        }
    }
}


</style>