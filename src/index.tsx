import {createElement,render,Component} from "rax";
import Demo from "./components/Demo";
import * as DriverDOM from 'driver-dom';
import * as React from 'rax';
(window as any).React = React;
export function start(ele:HTMLElement){    
    render(
        <Demo data={"111"} />
    ,ele,{driver:DriverDOM})
}
start(document.body)