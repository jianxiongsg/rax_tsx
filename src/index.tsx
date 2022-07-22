/** @jsx createElement */
import {createElement,render,Component} from "rax";
import LoadingUI from "./components/LoadingUI";
import * as DriverDOM from 'driver-dom';
import AnimUI from "./components/AnimUI";
import "./ajax"
import ScrollUI from "./components/ScrollUI";
export function start(ele:HTMLElement){    
    render(
        // <AnimUI />
        <ScrollUI />
    ,ele,{driver:DriverDOM})
}
start(document.body)