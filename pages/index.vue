<template>
  <section class="container">
    <div class="bg-img"> </div>
     <div class="bg-text"> 
    <h1>What is financial freedom?</h1><br/>
    <p>In simple words, financial freedom means being able to live a lifestyle
       you desire, without having to work a day job. Hence, allowing you to easily switch careers,
      follow your passion, start a business, travel the world, or spend time with loved ones.</p>
    <!--<img class="pic" src="../assets/freedom.jpg" alt="financial freedom"/> -->
    <p>All our lives, we have been given the same advice by our elders "get a degree, get a good
       job, and enjoy your life". However, there is one problem with this idea - IT DOESN'T WORK. In this approach, 
       we basically trade our TIME for MONEY. We know for a fact that our time is limited. Now would you rather spend your
       time working for someone or doing things you love?</p>
      <p>
       Being financially independent enables you to spend your time the way you like to. It allows you to retire as
       early as possible, and live life to the fullest. It all boils down to managing your personal finance the right way,
       and that is exactly where FENIUS comes in. Hop in to learn more!
       </p> 
      
    </div>
    <button class="button--green btn" v-on:click="storeMail" >Let's go!</button>
    <div class="content">
      <h2 class="services">Services</h2>
      <p class="services">
        Let's consider an average person with a lifespan of 75 years. That is 3900 weeks or 27300 days.
        He starts working at 22 and retires at 60, his work career is 38y or 1976 weeks. If he works
        5 days a week, for 8 hours each day, he spends over 9 years of his life at job, working for someone else.
      </p>
    </div>
  </section>
</template>

<script>


export default {
  head(){
      return {
          title: 'Fenius by Abhishek Bisht',
          meta: [
             { name: 'description' , content: 'Fenius helps you all along your journey to financial freedom by making saving, Investing and Taxation simple'},
             {name: 'keywords', content: 'Fenius, fenius.me, financial freedom '}
          ]
      }
  },
  methods:{
    storeMail: function(){
      alert("Hello World!");
    }
  }
}
</script>

<style>
.bg-img{
  background: url("../assets/bfreedom.jpg") no-repeat center bottom;
  -webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	background-attachment: fixed;
	width: 100%;
	height: 100%;
	min-height: 720px;
	display: inline-block;
  position: absolute;
  left: 0;
  top: 3em;
  text-align: center;
  filter: blur(1.5px);
  -webkit-filter: blur(1.5px);
  overflow: auto;
  z-index: 1;
  }

  .bg-text {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 30px;
  text-align: justify;
}

.content {
  margin-top: 50em;
  width: 100%;
  background: #33bbff;
  position: absolute;
  left: 0;
  display: inline-block;

}

.services{
  text-align: center; 
}

.btn{
  font-size: 1.2em;
  position: absolute;
  top: 80%;
  left: 45%;
  z-index: 2;
}

</style>
