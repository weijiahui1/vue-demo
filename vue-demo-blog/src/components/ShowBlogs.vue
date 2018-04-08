<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索博客" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/show/' + blog.id">
        <h2 v-rainbow>{{ blog.title | toUpperCase }}</h2>
        <article class="">
        {{ blog.content | snippet }}
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data (){
    return {
      blogs:[],
      search:'',
    }
  },
  created(){
    this.$http.get('https://vue-blogs-6797d.firebaseio.com/posts.json')
    .then(function(data){
      console.log(data);
      return data.body
    })
    .then((data) => {
      let BlogsArray = [];
      for( let key in data){
        data[key].id=key;
        BlogsArray.push(data[key]);
      }
      this.blogs = BlogsArray;
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    // "to-uppercase":function(value){
    //   return value.toUpperCase();
    // }
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
          el.style.color = "#"+Math.random().toString(16).slice(2,8);
      }
    },
    'theme':{
      bind(el,binding,vnode){
        if(binding.value == 'wide' ){
          el.style.maxWidth = '1260px';
        } else if (binding.value == 'narrow'){
            el.style.maxWidth = '560px';
        }

        if (binding.arg =='column'){
          el.style.background="#6677cc";
          el.style.padding = '20px';
        }
      }
    },

  },

}
</script>

<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
#show-blogs a{
  text-decoration: none;
}
input[type='text']{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

</style>
