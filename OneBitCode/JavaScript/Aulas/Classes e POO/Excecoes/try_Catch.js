/*
    try....catch...finally
        - comando para tratar erros
*/

class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }
    shoot() {
        if(this.shotsLeft > 0){
            console.log("Bang!!")
            this.shotsLeft -= 1
        } else {
            throw new Error("Arma " + this.identifier + " sem munição" )
        }
        
    }
    reload() {
        this.shotsLeft = 5
    }
}
let fenixWeapon = new SpaceshipWeapon(10)
try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot() // 6 tiro porém informe limite de 5 quando chegou ele entrou no else e deu erro
} catch(e) { 
    console.log(e.message) // apresenta mensagem de erro
    fenixWeapon(reload) // acessao metodo reload e recarrega
} finally {
    console.log("Arma deu bons tiros") // finaliza
}

console.log(fenixWeapon)