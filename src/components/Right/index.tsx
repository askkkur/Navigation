import {defineComponent, onMounted, ref} from 'vue'
import './index.modules.scss'
import axios from "axios";
export default defineComponent({
  name: 'index',
  setup(props, ctx) {

    const content = ref()
    onMounted(()=>{
      axios.get('http://121.4.129.51:2333/api/v2/posts/latest').then(res =>{
        console.log(res.data.text)
        content.value = res.data.text.substring(0,300)
      })
    })
    return () => (
      <>
        <div class={'card-right'}>
          <p class={'card-about'}>最新文章</p>
            <div class={'card-content'}>{content.value}</div>
        </div>
      </>
    )
  },
})
