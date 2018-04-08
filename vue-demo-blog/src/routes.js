
import HelloWorld from './components/HelloWorld'
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'

export default [
  {
    path:"/",
    component:HelloWorld
  },
  {
    path:"/show",
    component:ShowBlogs
  },
  {
    path:"/add",
    component:AddBlog
  },
  {
    path:"/show/:id",
    component:SingleBlog
  },
  {
    path:"/edit/:id",
    component:EditBlog
  },
]
