import {computed, defineComponent, onMounted, reactive, ref} from 'vue'
import './index.modules.scss'
import axios from "axios";
import { marked } from 'marked'
export default defineComponent({
  setup(props, ctx) {
    const blogData = reactive({
      title:'',
      content:'',
      url:''
    })
    onMounted(()=>{
      axios.get('http://121.4.129.51:2333/api/v2/posts/latest').then(res =>{
        blogData.title = res.data.title
        blogData.content = marked((res.data.text).substring(1,200) + '....')
        blogData.url = `https://www.suemor.com/${res.data.category.slug}/${res.data.category.id}`
      })
    })


    return () => (
      <>
        <div class={'card-right'}>
          <p class={'card-about'}>{blogData.title}</p>
            <div class={'card-content'} v-html={blogData.content}/>
          <a target={'view-windows'}  class={'card-more'} href={blogData.url}>查看更多</a>
        </div>
      </>
    )
  },
})
