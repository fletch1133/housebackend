let houses = require('./db.json')
let houseId = 4
module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req,res) => {
        let { id } = req.params
        let index = houses.findIndex(houses => houses.id === +id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },
    createHouse: (req,res) => {
    let { address, price, imageURL } = req.body
        let newHouse = {...req.body, id:houseId}
        newHouse.price = +newHouse.price
        houses.push(newHouse)
        res.status(200).send(houses)
        houseId++
    },
    updateHouse: (req,res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(houses => houses.id === +id)
        if(type === "minus" && houses[index].price > 1){
            houses[index].price-= 10000
        } else if (type === "plus") {
        houses[index].price += 10000
        
        
    }
    res.status(200).send(houses)
}
    
}
