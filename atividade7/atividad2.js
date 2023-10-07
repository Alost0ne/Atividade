class cliente{
    constructor(nome, renda, telefone, email){
        this.nome = nome
        this.renda = renda
        this.telefone  = telefone
        this. email = email
    }
    verificar(){
        console.log(promessa)
    }
}

const cliente1 = new cliente(`Rafael S M de Sá`, 1500, `99999-9999`, `rafael.sa@fatec.sp.gov.br`)

const promessa = new Promise((resolve, reject) =>{
    const renda = cliente1.renda
    if(renda > 2000){
        resolve(`Crédito aprovado!`)
    }else{
        reject(`Crédito recusado!`)
    }
})

promessa.then((aprovado) => {
    console.log(`Crédito aprovado`)
})
.catch((recusado) => {
    console.log(recusado)
})