<template>
  <div id="app">
    <HeaderBlog/>
    <router-view></router-view>
      <!--<ShowBlogs/>
   <AddBlog/>
    <hr/>
    <img src="./assets/logo.png">
    <HelloWorld/> -->
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import HelloWorld from './components/HelloWorld'
import HeaderBlog from './components/BlogHeader'
import SingleBlog from './components/SingleBlog'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AddBlog,
    ShowBlogs,
    HeaderBlog
  }
}
</script>

<style>
</style>
