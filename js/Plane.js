/*
    비행기 정의
    비행기라는 사용자 정의 자료형을 선언!!
*/
class Plane{
    /*변수, 함수 */
    // 객체의 초기화는 생성자 메서드가 담당한다
    // 비행기가 어떤 특성을 가지고 태어날지를 결정!!

    constructor(container,src,width,height,x,y,velX,velY){
        this.img = document.createElement("img");
        this.container=container;
        this.src=src;
        this.width=width; //이렇게 쓰는게 간단해
        this.height =height;
        this.x=x;
        this.y=y;
        this.velX=velX; //주인공의 x축으로의 속도를 결정
        this.velY=velY;


        this.img.src=src;
        this.img.style.width = this.width+"px"; 
        this.img.style.height = this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        
        this.container.appendChild(this.img);
    }

    tick(){
        this.x += this.velX; //등속도 계속 누적
        this.y += this.velY;

        if(this.x<=0){
            this.x=0;
        }
        // console.log("우주선 좌표"+this.x);

        if(this.x >= screen.width-this.width){
            // console.log("도착");
            this.x=screen.width-this.width;
            
        }

        if(this.y<=0){
            this.y=0;
        }
        // console.log("우주선 좌표"+this.x);

        if(this.y >= 600){
            // console.log("도착");
            this.y=600;
            
        }

    }

    // 변경된 값을 화면에 보여주기  위한 그래픽 처리(게임분야, 그래픽분야에서는 랜더링)
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }


}