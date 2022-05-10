import { defineComponent } from 'vue'
import './index.modules.scss'

export default defineComponent({
  name: 'index',
  setup(props, ctx) {
    return () => (
      <>
        <div class={'card-right'}>
          <p class={'card-about'}>关于我</p>
          <div class={'card-fg'} />

        </div>
      </>
    )
  },
})
