class WatchStore {
    productsList = []
    startEngien() {
        console.log("engien is started")
    }
}

class Lamborghini extends Car {
    wing = true
    turbo() {
        console.log("turbo is started")
    }
}

let hamedsCar = new Lamborghini();
hamedsCar.startEngien()
hamedsCar.turbo()
console.log(hamedsCar.wing)