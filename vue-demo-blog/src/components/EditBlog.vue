<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if='!submmited'>
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <br/>
      <label>博客内容</label>
      <textarea v-model="blog.content" ></textarea>

      <label>博客分类</label>
      <div id="checkboxs">
        <label>Vue.js</label>
        <input type="checkbox" name="" value="Vue.js" v-model='blog.categories'>

        <label>Node.js</label>
        <input type="checkbox" name="" value="Node.js" v-model='blog.categories'>

        <label>React.js</label>
        <input type="checkbox" name="" value="React.js" v-model='blog.categories'>

        <label>Angular4</label>
        <input type="checkbox" name="" value="Angular4" v-model='blog.categories'>
      </div>

        <label>博客作者</label>
        <select v-model='blog.author'>
          <option v-for='author in authors'>
            {{ author }}
          </option>
        </select>
        <button v-on:click.prevent='post'>编辑博客</button>
    </form>
    <div v-if='submmited'>
      <h3>您的博客编辑已经提交成功！</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{ blog.title }}</p>
      <p>博客内容：</p>
      <p>{{ blog.content }}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>博客作者</p>
      <p>{{ blog.author }}</p>
    </div>

  </div>
</template>

<script>
export default {
  //http://jsonplaceholder.typicode.com/
  //http://jsonplaceholder.typicode.com/posts
  name: 'add-blog',
  data () {
    return {
      id: this.$route.params.id,
      blog:{
      },
      authors:['Hemia','Arge','Hame'],
      submmited:false,

    }
  },
  methods:{
    fetchData(){
      console.log(this.id);
      this.$http.get("https://vue-blogs-6797d.firebaseio.com/posts/"+this.id+".json")
      .then((res) => {
        console.log(res);
        this.blog = res.body
      })
    },
    post:function(){
      this.$http.put("https://vue-blogs-6797d.firebaseio.com/posts/"+this.id+".json",this.blog)
      .then(function(data){
        console.log(data);
        this.submmited = true;
      })
    }
  },
  created(){
    this.fetchData();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type='text'],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkboxs label{
  display: inline-block;
  margin-top: 0;
}
#checkboxs input{
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
</style>
