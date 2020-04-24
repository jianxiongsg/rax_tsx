/** @jsx createElement */
import {Component,render,createElement} from "rax";
import "./index.less"
interface PropsInfo{
    data:string
}
interface StateInfo{

}

export default class Demo extends Component<PropsInfo,StateInfo>{
    constructor(props:PropsInfo){
        super(props);
        ["111","222"].map((v)=>{console.log(v)})
    }
    render(){
        return <div className="demo">1111111111111</div>
    }
}