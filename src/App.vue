<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Main,
    Header
  }
}
</script>

<style lang="scss">
@import '~font-awesome/css/font-awesome.min.css';
@import '~bootstrap/scss/bootstrap';
@import './styles/variables.scss';

#app {

}
</style>
