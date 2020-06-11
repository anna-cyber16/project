let c = document.createElement('p');
c.innerHTML='<b>Ответ верный</b>';
c.style.cssText = "color: green; font-size: 2em;";

let d = document.createElement('p');
d.innerHTML='<b>Ответ не верный</b>';
d.style.cssText = "color: red; font-size: 2em;";

function res1(a){
    a  =  document.getElementById('a').value;
    let b  =  1092;
    if(a==b){
        result1.append(c);
    }
    else{
        result1.append(d);
    }
}
function dec1(){
    let e = "<p>Решение:</p><p>ВНП = Потребительские расходы + Валовые инвестиционные расходы бизнеса + Государственные расходы на ВНП + Чистый экспорт товаров и услуг</p><p>Подставив значения в формулу, получим объем ВНП:</p><p>ВНП = 640С + (164 + 100) Inv + 180 G + (62 – 54) Xn = 1092 у. е.</p>";
    document.getElementById('decision1').innerHTML = e;
}

function res2(a){
    a  =  document.getElementById('b').value;
    let b  =  3300;
    if(a==b){
        result2.append(c);
    }
    else{
        result2.append(d);
    }
}
function dec2(){
    let e = "<p>Решение:</p><p>Чистый национальный продукт определяется по формуле:</p><p>ЧНП = Потребительские расходы + Чистые инвестиционные расходы бизнеса + Государственные расходы на ВНП (государственные закупки товаров и услуг) + Чистый экспорт товаров и услуг</p><p>В условии даются все переменные, кроме чистых инвестиций, которые равны валовые инвестиции минус амортизация. Подставляя значения в формулу чистого национального продукта, получаем:</p><p>ЧНП = 2650 + (750 – 400) + 275 + 25 = 3300.</p>";
    document.getElementById('decision2').innerHTML = e;
}

function res3(a){
    a  =  document.getElementById('c').value;
    let b  =  892;
    if(a==b){
        result3.append(c);
    }
    else{
        result3.append(d);
    }
}
function dec3(){
    let e = "<p>Решение:</p><p>ЧНП = Потребительские расходы + Чистые инвестиционные расходы бизнеса + Государственные расходы на ВНП + Чистый экспорт товаров и услуг = С + Inv + G + Xn.</p><p>Подставив значения в формулу, получим объем ВНП:</p><p>ЧНП = 640С + (164 – 100)Invчист + 180G + (62 – 54)Xn = 892 у. е.</p>";
    document.getElementById('decision3').innerHTML = e;
}