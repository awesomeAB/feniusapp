<template>
  <section class="container">
    <h1 style="color:black;">About Fenius</h1>
    <p>Fenius is a platform that aims to help young indians better manage their finances and eventually achieve
      financial freedom, by providing high quality financial education that is completely nonexistent in our education system.
      Even after earning a decent salary, millenials are stuck in a never ending rat race living paycheck-to-paycheck, and
      never really seem to progress or grow financially. This happens as a result of poor financial education and management of personal finances.
      Along with a blog on personal finance, we provide a set of tools and services to help you out with saving, investing
      and taxation by making it extremely simple to follow, especially for the beginners.
    </p>
  </section>
</template>

<script>


export default {
  head(){
      return {
          title: 'About Fenius',
          meta: [
             { name: 'description' , content: 'This is my about description'},
             {name: 'keywords', content: 'Fenius, fenius.me '}
          ]
      }
  }
}
</script>

<style>

section{
  
  position: absolute;
  top: 3em;
}

</style>
