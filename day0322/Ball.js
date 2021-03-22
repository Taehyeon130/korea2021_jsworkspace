class Ball{
    // new연산자에 의해 호출되는 메서드르 생성자 메서드라 하고,
    // 생성자 메서드의 목적은 이 객체가 인스턴스화 될때, 즉 사물이 
    // 단생할때 알맞는 개성을 부여하기 위함이다!!

    // 공의 모습, 상태 등 형용사 적인것 !! 사실은 변수값!!
    constructor(container){
        this.container = container //어디에 붙일지를 결정짓지 말고 호출자가 결정하도록

        this. div = document.createElement("div"); //공을 감쌀 div
        this.div.style.width = 35+"px";
        this.div.style.height = 35+"px";
        this.div.style.background="red";
        this.div.innerText="●";
        this.div.style.fontSize=35+"px";
        this.div.style.position="absolute";
        this.div.style.left = 0+"px";
        this.div.style.top = 0+"px";
        
        // div를 부모요소에 부착
        container.appendChild(this.div);
    }   
}