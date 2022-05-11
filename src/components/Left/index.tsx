import { defineComponent } from 'vue'
import './index.modules.scss'
import Icon from '@/components/Icon'

export default defineComponent({
  setup(props, ctx) {
    return () => (
      <>
        <div class={'card-left'}>
          <div class={'card-wrapper'}>
            <div class={'card-avatar'}>
              <img
                src="https://suemor.oss-cn-beijing.aliyuncs.com/img/89030875.jpeg"
                alt=""
              />
            </div>
            <p class={'card-name'}>suemor</p>
            <p class={'card-introduce'}>一个废材技校生</p>
            <div class={'card-icon'}>
              <a target={'view-windows'} href={'https://twitter.com/Suemor233'}>
                <Icon name={'icon-twitter'} />
              </a>
              <a
                target={'view-windows'}
                href={
                  'https://wpa.qq.com/msgrd?v=3&uin=1502972236&site=qq&menu=yes'
                }
              >
                <Icon name={'icon-qq'} />
              </a>
              <a
                target={'view-windows'}
                href={'https://www.zhihu.com/people/Suemory'}
              >
                <Icon name={'icon-shejiaotubiao-46'} />
              </a>
              <a
                target={'view-windows'}
                href={'https://space.bilibili.com/291833916'}
              >
                <Icon name={'icon-bilibili'} />
              </a>
            </div>
            <div class="card-button">
              <a target={'view-windows'} href="https://suemor.com"><Icon name={'icon-boke1'}/><span>Blog</span></a>
              <a target={'view-windows'} href="https://github.com/suemor233"> <Icon name={'icon-github'}/><span>Github</span></a>
            </div>
          </div>
        </div>
      </>
    )
  },
})
