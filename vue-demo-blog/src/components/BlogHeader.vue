<template>
  <nav>
    <ul>
      <li>
        <router-link to="/show" exact>博客</router-link>
      </li>
      <li>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'header-blog',
}
</script>

<style scoped>
nav{
  background-color: crimson;
  padding: 30px 0;
  margin-bottom: 40px;
}
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: #fff;
    border-radius: 5px;
    padding: 12px;
    text-decoration: none;
  }
  .router-link-active{
    background-color: rgba(255,255,255,0.8);
    color: #444
  }
</style>
