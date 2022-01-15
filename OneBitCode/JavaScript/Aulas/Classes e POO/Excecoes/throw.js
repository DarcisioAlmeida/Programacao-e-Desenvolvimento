/*
    Clausula throw
        - comando para lançar nossos proprios erros
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
            throw new Error("Arma " + this.identifier + "sem munição" )
        }
        
    }
}
let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot() // 6 tiro porém informe limite de 5 quando chegou ele entrou no else e deu erro

console.log(fenixWeapon)