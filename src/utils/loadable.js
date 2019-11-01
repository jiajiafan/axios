// 实现loading效果
import loading from '@/components/loading'

const loadable = (asyncFn) => {
    const component = () => (
        {
            component: asyncFn(),
            loading
        }
    )
    return {
        render(h) {
           return h(component)
        }
    }
  
    //组件是一个对象，要么有template,要么有render,vue-cli不支持template
}
export default loadable;