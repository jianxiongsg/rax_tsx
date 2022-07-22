/** @jsx createElement */
import { render, createElement, Component } from "rax"
import './index.less';
import {disableDodyScroll,enableBodyScroll} from "../../Util/lockScroll";



export default class ScrollUI extends Component<{}, {}> {
  
    private elebox: any
    public refs: any;
    public scrollparent:any;
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        disableDodyScroll(this.scrollparent);
        setTimeout(()=>{
            // enableBodyScroll(this.scrollparent)
        },5000)
        let p1 = function(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log("..................222")
                    resolve(true)
                },1000)
            })
        }
        let p2 = function(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log("..................1111")
                    resolve(true)
                },500)
            })
        }
        Promise.all([p1(),p2()]).then(()=>{
            console.log(".................aa.success")
        }).catch(()=>{
            console.log("..................error")
        })
    }


    render() {
        return (
            <div className="scroll-box">
                <div className="scroll-parent" ref={ref=>this.scrollparent = ref}>
                    <div className="scroll-con">
                    
                    </div>
                </div>
            </div>
        );

    }
}