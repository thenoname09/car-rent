
export const CarsData = async (searchTerm = "") => {
    const res = await fetch(`http://localhost:4000/cars_info?search=${searchTerm}`)
    const exploreCars = await res.json()
    return exploreCars
}


export const availableCars = async () => {
    const res = await fetch(`http://localhost:4000/available_cars`)
    const AvailableCarsData = await res.json()
    return AvailableCarsData
}