
export const CarsData = async (searchTerm = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/cars_info?search=${searchTerm}`)
    const exploreCars = await res.json()
    return exploreCars
}


export const availableCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/available_cars`)
    const AvailableCarsData = await res.json()
    return AvailableCarsData
}