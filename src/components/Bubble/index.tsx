/** @jsx createElement */
import {Component,render,createElement} from "rax";
import "./index.less"
import { convertValue, delay } from "../../Util/helper";
import BubbleMgr from "../BubbleMgr";
interface PropsInfo{
    
}

export interface BubbleInfo{
    desc:string
}

enum StateType{
    Wait,
    Move1,
    Stop1,
    Move2,
    Stop2,
    FadeOut
}

interface StateInfo{
    data:BubbleInfo
}

export default class Bubble extends Component<PropsInfo,StateInfo>{
    private moveConfig:{[stateType:number]:{y:number}}
    private stopTime:number = 3000;
    private moveTime:number = 1000;
    private eleBox:HTMLElement;
    constructor(props:PropsInfo){
        super(props);
        this.moveConfig={};
        this.moveConfig[StateType.Wait] = {y:0};
        this.moveConfig[StateType.Move1] = {y:-100};
        this.moveConfig[StateType.Stop1] = {y:-100};
        this.moveConfig[StateType.Move2] = {y:-200};
        this.moveConfig[StateType.Stop2] = {y:-200};
        this.moveConfig[StateType.FadeOut] = {y:-300};
        this.state={
            data:null
        }
        BubbleMgr.put(this);
    }

    show(msg:BubbleInfo){
        this.setState({
            data:msg
        },()=>{
            this.updateStateType(StateType.Move1)
        })
        
    }

    updateStateType(type:StateType){
        switch(type){
            case StateType.Move1:
                this.eleBox.style.opacity = '1';
                this.moveTo(this.moveConfig[StateType.Wait].y,this.moveConfig[StateType.Move1].y,()=>{
                    this.updateStateType(StateType.Stop1)
                })
            break;
            case StateType.Stop1:
                delay(this.stopTime,()=>{
                    BubbleMgr.showNext();
                    this.updateStateType(StateType.Move2)
                })
            break;
            case StateType.Move2:
                this.moveTo(this.moveConfig[StateType.Stop1].y,this.moveConfig[StateType.Move2].y,()=>{
                    this.updateStateType(StateType.Stop2)
                })
            break;
            case StateType.Stop2:
                delay(this.stopTime,()=>{
                    this.updateStateType(StateType.FadeOut)
                })
            break;
            case StateType.FadeOut:
                this.eleBox.style.opacity = '0';
                this.moveTo(this.moveConfig[StateType.Stop2].y,this.moveConfig[StateType.FadeOut].y,()=>{
                    this.setState({
                        data:null
                    },()=>{
                        this.eleBox.style.transform = `translateY(${0})`;
                        BubbleMgr.put(this);
                    })
                })
            break;
        }

       
    }

    moveTo(srcY:number,toY:number,cb:()=>void){
        let startMoveTime:number;
        let moveTime = this.moveTime;
        let eleBox = this.eleBox;
        let move=()=>{
            requestAnimationFrame((time)=>{
                if(!startMoveTime){
                    startMoveTime = time;
                }
                let progress = Math.min((time - startMoveTime) / moveTime,1)
                let dist = progress * (toY - srcY);
                let nextPosY = convertValue(srcY + dist);
                eleBox.style.transform = `translateY(${nextPosY})`;
                if(progress === 1){
                    cb();
                    return;
                }
                move();
            })
        }
        move();
        
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div ref={(ref)=>this.eleBox = ref} className="bubble-box">
                {
                    this.state.data?
                    <span>{this.state.data.desc}</span>
                    :null
                }
                
            </div>
        )
    }
}