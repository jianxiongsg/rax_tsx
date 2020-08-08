/** @jsx createElement */
import {Component,render,createElement} from "rax";
import "./index.less"
import Bubble, { BubbleInfo } from "../Bubble";
interface PropsInfo{
    
}
interface StateInfo{

}

export default class BubbleMgr extends Component<PropsInfo,StateInfo>{
    private static inst:BubbleMgr;
    private items:Bubble[];
    private msgList:BubbleInfo[];
    private bubbleIndex:number = -1;
    constructor(props:PropsInfo){
        super(props);
        BubbleMgr.inst = this;
        this.items = [];
        this.msgList = [{desc:"我是测试数据1"},{desc:"我是测试数据2"},{desc:"我是测试数据3"},{desc:"我是测试数据4"},{desc:"我是测试数据5"}];
    }

    static put(item:Bubble){
        BubbleMgr.inst.items.push(item);
    }

    get(){
        if(this.items.length === 0){
            return null;
        }
        return this.items.shift();
    }

    static showNext(){
        let item = BubbleMgr.inst.get();
        if(item){
            BubbleMgr.inst.bubbleIndex++;
            if(BubbleMgr.inst.bubbleIndex >= BubbleMgr.inst.msgList.length){
                BubbleMgr.inst.bubbleIndex = 0;
            }
            item.show(BubbleMgr.inst.msgList[BubbleMgr.inst.bubbleIndex]);
        }
    } 

    componentDidMount(){
        BubbleMgr.showNext();
    }


    render(){
        let list = new Array(5).fill(null);
        console.log("list",list)
        return (
            <div className="bubblemgr-box">
                {
                    list.map((msg,index)=>{
                        return <Bubble key={index} />
                    })
                }
            </div>
        )
    }
}