/** @jsx createElement */
import { render, createElement, Component } from "rax"
import './index.less';
import html2canvas from "html2canvas";
import canvasToImage from "canvas-to-image-jx";

console.log(".................",canvasToImage)
interface PropsInfo {
}
interface StateInfo {
    


}


export default class AnimUI extends Component<PropsInfo, StateInfo> {
    private static inst: AnimUI
   
    constructor(props) {
        super(props);
       
    }

    download=(d)=>{
        //cavas 保存图片到本地  js 实现
        //------------------------------------------------------------------------
        //1.确定图片的类型  获取到的图片格式 data:image/Png;base64,...... 
        var type ='png';//你想要什么图片格式 就选什么吧
        var imgdata=d.toDataURL(type);
        //2.0 将mime-type改为image/octet-stream,强制让浏览器下载
        var fixtype=function(type){
            type=type.toLocaleLowerCase().replace(/jpg/i,'jpeg');
            var r=type.match(/png|jpeg|bmp|gif/)[0];
            return 'image/'+r;
        };
        imgdata=imgdata.replace(fixtype(type),'image/octet-stream');
        //3.0 将图片保存到本地
        var savaFile=function(data,filename)
        {
            var save_link:any=document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href=data;
            save_link.download=filename;
            var event=document.createEvent('MouseEvents');
            event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null);
            save_link.dispatchEvent(event);
        };
        var filename=''+new Date().getDate()+'.'+type;  
        //注意咯 由于图片下载的比较少 就直接用当前几号做的图片名字
        savaFile(imgdata,filename);
        };

    jietu=()=>{
        html2canvas(document.body,{
            useCORS:true
        }).then((canvas)=>{
            // var url = canvas.toDataURL("image/jpeg", 1.0);//图片地址
            //     console.log(canvas)
            //   console.log("..............",url)
            //   document.getElementById("img").setAttribute("src",url)
            //   var oImgJPEG = Canvas2Image.saveAsJPEG(oCanvas, true);
            // this.download(canvas) 
            canvasToImage.saveAsImage(canvas, 500, 500,'jpg')
              document.body.appendChild(canvas);
        });
        // html2canvas(document.getElementById("test")).then(function(canvas) {
        //     document.body.appendChild(canvas);
        // });
    }

    render() {
        return (
            <div id="test" className="animui-box">
                <div className="animui-con">
                    <img className="animui-fruit1" src="https://gw.alicdn.com/imgextra/i3/O1CN01Ygmzgy1r2wL7Qrjje_!!6000000005574-2-tps-155-184.png"  />
                   <img className="animui-fruit2" src="https://gw.alicdn.com/imgextra/i2/O1CN01cDRBq21lnl8PcL3gz_!!6000000004864-2-tps-138-149.png"  />
                    <img className="animui-fruit3" src="https://img.alicdn.com/imgextra/i3/O1CN01eC80mX1oj7yV97eiJ_!!6000000005260-2-tps-128-144.png"  />
                    <img className="animui-fruit4" src="https://gw.alicdn.com/imgextra/i2/O1CN014RXhkJ1W2NvfH5d4L_!!6000000002730-2-tps-86-96.png"  />
                    <img className="animui-fruit5" src="https://gw.alicdn.com/imgextra/i1/O1CN01ogSVLy28uO1htSntR_!!6000000007992-2-tps-137-155.png"  />
                    <img className="animui-light" src="https://gw.alicdn.com/imgextra/i1/O1CN01FZZahE1i8agWReOZC_!!6000000004368-2-tps-987-1012.png" />
                </div>
                <div className="animui-jietu" onClick={this.jietu}>截图</div>

            </div>
        );

    }
}