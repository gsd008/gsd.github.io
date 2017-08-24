/**
 * Created by dell on 2017/7/7.
 */
class canvas{
    constructor(canvas){
        this.canvas=canvas;
        this.paint=this.canvas.getContext('2d');
        this.lineWidth=1;
        this.color='red';
        this.way='fill';
        this.arr=[];
        this.colorarr=['pink','yellow','red'];
        this.n=5;
    }
    rect(x,y,x1,y1){
        if(this.way=='fill'){
            this.paint.fillStyle=this.color;
            this.paint.fillRect(x,y,x1-x,y1-y);
        }else if(this.way=='stroke'){
            this.paint.strokeStyle=this.color;
            this.paint.strokeRect(x,y,x1-x,y1-y);
        }
    }
    linearRect(x,y,x1,y1){
        var linear=this.paint.createLinearGradient(x,y,x1,y1);
        var every=1/this.colorarr.length;
        for(var i=0;i<this.colorarr.length;i++){
            linear.addColorStop(i*every,this.colorarr[i])
        }
        this.paint.fillStyle=linear;
        this.paint.fillRect(x,y,x1-x,y1-y);
    }
    circle(x,y,x1,y1){
        this.paint.beginPath()
        var r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2))
        this.arr(x,y,r,0,Math.PI*2,true)
        this.paint.closePath();
        if(this.way=='fill'){
            this.paint.fillStyle=this.color;
            this.paint.fill()
        }else if(this.way=='stroke'){
            this.paint.strokeStyle=this.color;
            this.paint.stroke()
        }

    }
    radiacircle(x,y,x1,y1){
        this.paint.beginPath();
        var r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2));
        this.arr(x,y,r,0,Math.PI*2,true);
        this.paint.closePath();
        this.paint.fill();
        var Radia=this.paint.createRadialGradient(x,y,5,x,y,r);
        var every=1/this.colorarr.length;
        for(var i=0;i<this.colorarr.length;i++){
            Radia.addColorStop(i*every,this.colorarr[i])
        }
    }
    line(x,y,x1,y1){
        this.paint.beginPath()
        this.paint.moveTo(x,y)
        this.paint.lineTo(x1,y1)
        this.paint.closePath()
        this.paint.lineWidth=this.lineWidth;
        this.paint.strokeStyle=this.color
        this.paint.stroke()
    }
    poly(x,y,x1,y1){
        var ran=360/this.n;
        var rp=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2))
        this.paint.beginPath();
        for(var i=0;i<n;i++){
            this.paint.lineTo(x+Math.sin((i*ran+45)*Math.PI/180)*rp,y+Math.cos((i*ran+45)*Math.PI/180)*rp)
        }
        this.paint.closePath();
        if(this.way=='fill'){
            this.paint.fillStyle=this.color;
            this.paint.fill()
        }else if(this.way=='stroke'){
            this.paint.strokeStyle=this.color;
            this.paint.stroke()
        }
    }
    clear(){
        this.paint.clearRect(0,0,canvas.width,this.height)
    }

}






