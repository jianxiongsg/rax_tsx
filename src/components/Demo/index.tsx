import {Component,render,createElement} from "rax";
import * as React from 'rax';
import "./index.less"
interface PropsInfo{
    data:string
}
interface StateInfo{

}

export default class Demo extends Component<PropsInfo,StateInfo>{
    constructor(props:PropsInfo){
        super(props)
    }
    render(){
        return <div className="demo">1111111111111</div>
    }
}