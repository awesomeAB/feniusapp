<template>
  <div>
    <Nav/>
    <nuxt/>
  </div>
</template>
<script>
  import Nav from './partials/nav'

  export default{
    components:{
      Nav
    }
  }
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #33bbff;
  color: #33bbff;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #33bbff;
}

.button--grey {
  display: inline-block;
  color: #35495e;
  text-decoration: none;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
