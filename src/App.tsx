import {defineComponent} from 'vue'
import Card from "@/components/Card";
import './styles/App.modules.scss'
export default defineComponent({
    setup(props, ctx) {
        return () => (
            <>
                <main class={'main'}>
                    <Card/>
                </main>
            </>
        );
    }
})
