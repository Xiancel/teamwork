
var myFigure; //змінна фігура
var obstacles;//змінна перешкоди

function game(){ //функція гри
    myFigure = new figure(); //нова фігура
    myFigure.update();//оновити знач.
}

function figure(){ //функція фігура
    var canvas = document.getElementById("myCanvas");//передати змінній канва знач. по ід
    var ctx = canvas.getContext("2d");//малюємо в 2д
    ctx.fillStyle = "#918EF4";//колір квадратика
    ctx.fillRect(20,20,20,20);//розмір квадратика

    this.x = 20;//надати знач. х = 20 і т.д.
    this.y = 20;
    this.wigth = 20;
    this.height = 20;

    this.update = function(){//та сама функція оновити
        ctx.clearRect(0,0,470,270);//прибрати квадратик
        make_obstacle();//call створення перегородок
        ctx.fillRect(this.x,this.y,20,20);//створити квадратик з наданим знач х,у 20*20

        ctx.fillStyle = "5D737E";//надати колір...
        ctx.fillRect(440,20,20,20);//змін. знач. на в душках

        for(var i = 0; i < obstacles.length; i++){//цикл 
            if(myFigure.crashEx(obstacles[i])){//якщо фігурка 
                lose();//call функція програш
                return;
            }
        }
        if ((this.x>=440 && this.x<=460)&&(this.y >= 20 && this.y <= 40)){//якщо значення х[440,460] і знач. у[20,40]
            alert("You win");//вивести ти пройшов...
            myFigure = new figure();//створити нову фігуру
            myFigure.update();//надати їй все початкове
        }
    };

    this.crashEx = function(some_object){//вріз. - функція з параметром якоїсь фігури
        var left = this.x;//надати змінній ліво значення х
        var right = this.x + (this.wigth);//надати змінній право значення х + ширини
        var top = this.y;//надати змінній вгору значення у
        var bottom = this.y + (this.height);//надати змінній вниз значення у + висоти

        var o_left = some_object.x;//змінна ліво(перегородки) знач. х якогось-об.  
        var o_right = some_object.x + (some_object.wigth);//змінна право(перегородки) знач. х якогось-об. і ширини 
        var o_top = some_object.y;
        var o_bottom = some_object.y + (some_object.height);

        var crash = true;//змінна вріз. знач. тру
        if((bottom < o_top)||(top > o_bottom)||(right < o_left)||(left > o_right)){//якщо низ(фігури) дотик до верху(перегоротки), верх до низу, право до ліва чи ліво до права
            crash = false;//змінна вріз. знач фолс
        }
        return crash;//повернути знач. вріз.
    }
}

function lose(){//функція програшу
    alert("Game over");//вивести напис ти програв
    myFigure = new figure();//створити нову фігуру
    myFigure.update();//оновити фігуру
}

function right(){//функція хід вправо
    myFigure.x += 10;//збільшити знач. х на 10
    myFigure.update();////оновити фігуру
}
function left(){//функція хід вліво
    myFigure.x -= 10;//зменшити знач. х на 10
    myFigure.update();//
}

function up(){//функція хід вгору
    myFigure.y -= 20;//зменшити знач. у на 20
    myFigure.update();//
}

function down(){//функція хід вниз
    myFigure.y += 20;//збільшити знач. у на 20
    myFigure.update();//
}

function obstacle(x,y,wigth,height,color){//функція перегоротка з параметрами в дужках
    this.x= x;//цьому х надати х і т.д.
    this.y = y;//
    this.wigth = wigth;//
    this.height = height;//
    this.color = color;//

    var canvas = document.getElementById("myCanvas");//передати значення канвасу по ід
    var ctx = canvas.getContext("2d");//малюємо в 2д
    ctx.fillStyle = color;//надати знач. кольору
    ctx.fillRect(this.x,this.y,this.wigth,this.height);//надати розміри по знач. отих з масиву
    ctx.fillStyle = "#918EF4";//надати колір
}

function make_obstacle(){//функція створення перегородок
    obstacles = [];//масив перегоротки
    obstacles.push(new obstacle(60,0,10,220,"#ACF39D"));// додати в кінець масиву значення для нової перегоротки(розташування, розмір, колір)
    obstacles.push(new obstacle(130,60,10,220,"#E85F5C"));
    obstacles.push(new obstacle(200,0,10,220,"#9CFFFA"));
    obstacles.push(new obstacle(270,60,10,220,"#773344"));
    obstacles.push(new obstacle(340,0,10,220,"#E3B5A4"));
    obstacles.push(new obstacle(400,60,10,220,"#87BAAB"));
}