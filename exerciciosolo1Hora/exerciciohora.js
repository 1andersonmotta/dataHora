function carregar(){
let img = window.document.getElementById('imagem')
let res = window.document.getElementById('res')
let data = new Date()
let hora = data.getHours()
let minutos = data.getUTCMinutes()
let dia = data.getDate()
let meses = data.getMonth()
let mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];



if (hora >= 0 && hora < 12){
    img.src = 'fotomanha1.png'
    res.innerHTML = `Bom Dia !!! hoje é dia ${dia} de ${mes[meses]}  e agora são ${hora} horas e ${minutos} minutos.`
    document.body.style.background = `#e2cd9f`
    
}
else if (hora >= 12 && hora < 18){
    img.src = 'fototarde1.png'
    res.innerHTML = `Boa Tarde !!! hoje é dia ${dia}de ${mes[meses]} e agora são ${hora} horas e ${minutos} minutos.<br>\u{1F31E}`
    document.body.style.background = `#5732da`
    
}
if (hora >= 18 && hora <= 24){
    img.src = 'fotonoite1.png'
    res.innerHTML = `Boa Noite !!! hoje é dia ${dia}de ${mes[meses]} e agora são ${hora} horas e ${minutos} minutos.<br>\u{1F971} `
    document.body.style.background = `#515154`
    
    
}
}