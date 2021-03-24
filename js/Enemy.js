/*적군을 정의함*/

class Enemy{
    /*
        상태 : 변수(속성)
        동작 : 함수(메서드)
    */
    constructor(container,src,width,height,x,y,velX,velY){
        this.container = container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        // 이미지
        this.img.src = this.src;

        // 이미지 크기
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";

        // 이미지 위치
        this.img.style.position = "absolute";
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";

        this.container.appendChild(this.img);
    }

    tick(){
        this.x +=this.velX;
        this.y +=this.velY;
    }

    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
    }

}