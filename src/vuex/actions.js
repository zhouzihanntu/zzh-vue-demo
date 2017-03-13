//actions.js 还记得vuex核心思想的那张数据流图，还有上面我描述src的完成状态的关于 vuex里面各文件的意义所在，actions.js 说白了，就是处理玩rawHtml之后，dispatch 结果到 mutations，剩下更新state的工作交给mutations
import Vue from 'vue'

export const modifyData = ({dispatch},e)=>{
    var _renderHtml = 76767; 
    return dispatch('SWITCH_SUCCESS',_renderHtml)
}