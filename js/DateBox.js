/*
달력의 셀 하나를 표현하는 사각형
일정등록 및 날짜 표시가 가능한 객체
*/
class DateBox{
    constructor(container,width,height,text,bg){
        this.container= container;
        this.div= document.createElement("div");
        this.width=width;
        this.height=height;
        this.div.innerText=text; //인수로 넘겨받은 무자열을 div에 출력
        this.bg=bg; //배경색을 인수로 넘겨받기
        this.title; //제목 보관용
        this.content; //내용 보관용
        this.init();
    }
    init(){
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.bg;
        this.div.style.textAlign="center";
        this.div.style.border="1px solid gray";
        this.div.style.boxSizing="border-box";
        this.div.style.float="left"; //블락이어서 띄움 포지션은 그냥 렐러리브로 둠 좌표딱히 지정 X
        this.container.appendChild(this.div); //부모에 부착
        var bg = this.bg;
        var me=this; //인스턴스를 가리킴  이클래스로부터 장차 미래에 메모리에 올라갈 인스턴스 자신을 말함


        // 이벤트 구현
        this.div.addEventListener("mouseover",function(){
            this.style.background="lavender";
        });
        this.div.addEventListener("mouseout",function(){
            this.style.background=bg;
        });
        // 클릭하면 일정을 입력하는 창을 띄운다
        this.div.addEventListener("click",function(){
            // 현재 날짜 ㅂ가스가 boxArray의 몇번째 요소인지를 역추적!!
            var index = boxArray.indexOf(me);
            openDialog(index);
        });
    }
}