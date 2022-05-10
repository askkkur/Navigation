import {defineComponent} from 'vue'
import './index.modules.scss'
import Icon from "@/components/Icon";
export default defineComponent({
    setup(props, ctx) {
        return () => (
            <>
                <div class={'card-left'}>
                    <div class={'card-wrapper'}>
                        <div class={'card-avatar'}>
                            <img src="https://suemor.oss-cn-beijing.aliyuncs.com/img/89030875.jpeg" alt=""/>
                        </div>
                        <p class={'card-name'}>suemor</p>
                        <p class={'card-introduce'}>一个热爱前端的萌新</p>
                        <div class={'card-icon'}>
                            <a><Icon name={'icon-twitter'}/></a>
                            <a><Icon name={'icon-qq'}/></a>
                            <a><Icon name={'icon-shejiaotubiao-46'}/></a>
                            <a><Icon name={'icon-bilibili'}/></a>


                        </div>
                        <div class="card-button">
                            <a href="https://suemor.com">📔My blog</a>
                            <a href="https://suemor.com">✈️Travellings</a>
                        </div>
                    </div>

                </div>
            </>
        );
    }
})
