//PUXANDO OS CONTAINERS
const hc = document.getElementById('hours');
const mc = document.getElementById('min');
const sc = document.getElementById('sec');
const relogio = setInterval(function time() {
    //PUXANDO AS DATETIMES
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    //LEVANDO AS DATAS ATÉ OS CONTAINERS

    if (h < 10) h = '0' + h;

    if (m < 10) m = '0' + m;

    if (s < 10) s = '0' + s;

    hc.textContent = h;
    mc.textContent = m;
    sc.textContent = s;

})

function begin() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    console.log('Começou as '+ h,m,s);
}



