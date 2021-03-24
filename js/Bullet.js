/*총알을 정의함*/

class Bullet{
    // 변수(property), 함수(Method)

    constructor(container,src,width,height,x,y,velX,velY){
        // 멤버변수 (객체와 생명을 같이하는 변수)

        this.container=container;
        this.img = document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        // 총알의 모습을 설정해본다!! 즉 디자인
        this.img.src=this.src;

        // 크기
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        // 위치
        this.img.style.position="absolute";
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";

        // 부모요소에 부착
        this.container.appendChild(this.img);
    }
    
    // 물리량 변화
    tick(){
        this.x +=this.velX;
        this.y +=this.velY;

        // 총알은 날아가다가 자신이 스크린을 벗어난다면, 없어지기
        if(this.x>screen.width){
            // console.log("화면 도달",this);
            var index = bulletArray.indexOf(this); //내가 어디에 있는지
            // console.log("bulletArray의 몇번째",index);
            removeObject(this.container,this.img,bulletArray,index);
        }
    }

    // 그래픽 적 처리
    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
    }
}