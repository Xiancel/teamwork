//Обьекти
var myFigure;
var obstacles;

//функція для створення обьектів при запуску сторінки 
function game(){
    myFigure = new figure();
    myFigure.update();

    sec = 0;
    MyVar = setInterval(tick, 1000);
}
//створення обьекта квадрата(головного персонажа)
function figure(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(20,20,20,20);
    //значення квадрата 
    this.x=20;
    this.y=20;
    this.width=20;
    this.height=20;
  //функція для оновлення
    this.update = function(){
      //стирає холст
        ctx.clearRect(0,0,470,270);
        //малюе перекони
        make_obstacle()
        //переміщюе кубик
        ctx.fillRect(this.x,this.y,20,20);
        //фігура для перемоги
        ctx.fillStyle ="#d3d3d3";
        ctx.fillRect(440,20,20,20);

        //цикл для перевірки кубика і перекон
        for(i=0; i<obstacles.length; i++){
            if(myFigure.crashEx(obstacles[i])){
               lose();
                return;         
            }
        }
        //функція для перемоги
        if((this.x>=440 && this.x<=460)&&(this.y>=20 && this.y<=40)){
            alert("VICTORY");
            myFigure = new figure;
            myFigure.update();
            clearInterval(MyVar); 
          }
    };
  //функція для перівірки доторкнувся кибик для перекон чи ні
    this.crashEx = function(some_object){
      //знімає значченя з кубика і кладуться в окрему змінні
        var left = this.x; 
        var right = this.x +(this.width); 
        var top = this.y;
        var bottom = this.y +(this.height); 
        //беруться значення з перекон
        var o_left = some_object.x; 
        var o_right = some_object.x +(some_object.width); 
        var o_top = some_object.y;
        var o_bottom = some_object.y +(some_object.height);
        
        var crash = true;
        //порівняня 
        if((bottom < o_top)||(top>o_bottom)||(right<o_left)||(left>o_right)){
            crash = false;
        }
        return crash;   
    }
}
//функція поразки 
function lose(){
    alert("GAMER OVER");
    myFigure = new figure;
    //оновлення гри
    myFigure.update();
    //всановляння таймера заново
    clearInterval(MyVar);
}
//кнопки руху

//кнопка руху праворуч 
function right(){
    myFigure.x += 10;
    myFigure.update();
}
//кнопка руху ліворуч
function left(){
    myFigure.x -= 10;
    myFigure.update();
}
//кнопка руху в гору  
function up(){
    myFigure.y -= 10;
    myFigure.update();
}
//кнопка руху вниз 
function down(){
    myFigure.y += 10;
    myFigure.update();
}
//створення перекон
function obstacle(x,y,width,height,color){
  //кордінати,висота,ширина,колір перекон
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    //створення канвасу
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(this.x,this.y,this.width,this.height,this.color);
    ctx.fillStyle = "#0000FF";
}
//функція перекон
function make_obstacle(){
  //массив для перекон
    obstacles = [];
    obstacles.push(new obstacle(60,0,10,220,"#00FF00"));
    obstacles.push(new obstacle(120,60,10,220,"#00FA9A"));
    obstacles.push(new obstacle(180,0,10,220,"#90EE90"));
    obstacles.push(new obstacle(240,60,10,220,"#00FFFF"));
    obstacles.push(new obstacle(300,0,10,220,"#FF0800"));
    obstacles.push(new obstacle(360,60,10,220,"#FF1493"));
}

//timer
  min = 0;
  hour = 0;
//функція для счету
function tick() {
    sec++;
    //додавання з секунди менути
      if (sec >= 60) { 
        min++;
        sec = sec - 60;
      }
      //додавання з минути час
      if (min >= 60) {
         hour++;
         min = min - 60;
      }
      //додавання в дів
      //оформлення таймеру
  if (sec < 10) { 
    if (min < 10) {
      if (hour < 10) {
        document.getElementById('showtimer').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
      }else{
        document.getElementById('showtimer').innerHTML = hour + ':0' + min + ':0' + sec;
       }
    }else{
      if (hour < 10) {
        document.getElementById('showtimer').innerHTML = '0' + hour + ':' + min + ':0' + sec;
      }else{
         document.getElementById('showtimer').innerHTML = hour + ':' + min + ':0' + sec;
      }
    }  
  } else {
      if (min < 10) {
        if (hour < 10) {
          document.getElementById('showtimer').innerHTML = '0' + hour + ':0' + min + ':' + sec;
        } else {
          document.getElementById('showtimer').innerHTML = hour + ':0' + min + ':' + sec;
        }
      }else {
          if (hour < 10) {
            document.getElementById('showtimer').innerHTML = '0' + hour + ':' + min + ':' + sec;
          }else {
              document.getElementById('showtimer').innerHTML = hour + ':' + min + ':' + sec;
            }
        }
    }
}