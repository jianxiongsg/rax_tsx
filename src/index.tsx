/** @jsx createElement */
import {createElement,render,Component} from "rax";
import BubbleMgr from "./components/BubbleMgr";
import * as DriverDOM from 'driver-dom';
export function start(ele:HTMLElement){    
    render(
        <BubbleMgr />
    ,ele,{driver:DriverDOM})
}
start(document.body)