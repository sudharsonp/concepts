const arrivals = [1000, 1010, 1000, 1030,1200,900]
const departure = [1030,1030,1020,1230,1230,1005]
const platforms = [ 1,1, 2,2,3,1]

const group = arrivals.reduce((acc, val, i)=>{
    const pl = platforms[i]
    const arrivalArray = acc[pl]?.arr ? 
            acc[pl].arr.concat(arrivals[i]).sort((a, b)=> a-b) : [].concat(arrivals[i]).sort((a, b)=> a-b)
    const departureArray = acc[pl]?.dep ? 
            acc[pl].dep.concat(departure[i]).sort((a, b)=> a-b) : [].concat(departure[i]).sort((a, b)=> a-b)
    acc[pl] = {
        arr : arrivalArray,
        dep : departureArray,
    }
    return acc
}, {})

console.log(group)