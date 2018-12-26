<template>
	<header>
		<nuxt-link to="/" class="logo">Fenius</nuxt-link>
		<nav>
			<ul>
				<li class="button--grey"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="button--grey"><nuxt-link to="blog">Blog</nuxt-link></li>
				<li class="button--grey"><nuxt-link to="about">About</nuxt-link></li>
				<li class="button--grey"><nuxt-link to="contact">Contact</nuxt-link></li>
			</ul>
		</nav>
	</header>



</template>

<script type="text/javascript">
	export default{
        
	}

</script>

<style>
	header {
        background: #33BBFF;
        display: grid;
        height: 3em;
        grid-template-columns: repeat(2,auto);
        position: fixed;
        width: 100%;
    }
    .logo, li a {
        padding: 1em;
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        color: white;
        font-size: .9em;
    }
    nav {
        justify-self: right;
    }
    ul {
        list-style-type: none;
        padding-right: 2em;
    }
    li {
        display: inline-block;
    }
    li a {
        padding: 1em 1em;
        display: inline-block;
        /*background: rgba(0,0,0,0.1);*/
    }
    li nuxt-link:active{
        background-color: aliceblue;
    }
   

</style>