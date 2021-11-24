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
@import url('https://fonts.googleapis.com/css2?family=Monofett&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
}
</style>
