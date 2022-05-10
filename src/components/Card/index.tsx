import {defineComponent} from 'vue'
import './index.modules.scss'
import Left from "@/components/Left";
import Right from "@/components/Right";
export default defineComponent({
    setup(props, ctx) {
        return () => (
            <>
                    <div class={'card'}>
                        <Left/>
                         <div class={'fg'}/>
                        <Right/>
                    </div>
            </>
        );
    }
})
