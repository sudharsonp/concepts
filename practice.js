const throtle = (fn, delay) =>{
    let timer = true
    return function(...args){
        if(timer){
            fn.apply(this, args)
            timer = false
            setTimeout(()=>{
                timer = true
            },delay)
        }
    } 
}

const debounce = (fn,delay) =>{
    let timer
    return function(...args){
        const context = this
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
}

const curry = (fn) =>{
    const curried = (...args) =>{
        if(args.length >= fn.length){
            return fn.apply(this, args)
        }else{
            return function (...args2){
               return curried.apply(this,args.concat(args2))
            }
        }
    }
    return curried
}

const flatter = (arr,d = 1) => {
    const flat = (array, d) => d>0 ? array.reduce(
        (acc, value) => acc.concat(
            Array.isArray(value) ? flat(value,d -1) : value
        )
    ) : array.slice()
    return flat(arr,d)
}

Function.prototype.myBind = function(context, args) {
    const fn = this
    return function(...args2){
        fn.apply(context,[...args, ...args2])
    }
}

Array.prototype.myMap = function(callback, context) {
    let newArray = []
    let array = this
    for(let i=0; i < array.length; i++){
        newArray.push(callback.call(context, array[i], i, array))
    }
    return newArray
}

Array.prototype.myReduce = function(callback, intialAcc) { 
    let accumulator = intialAcc
    let array = this
    for(let i=0; i < array.length; i++){
        accumulator = callback.call(undefined, accumulator , array[i], i, array)
    }
    return accumulator
}

Array.prototype.myFilter = function(callback, context) {
    let newArray = []
    let array = this
    for (let i = 0; i < array.length; i++) {
        if (callback.call(context, array[i], i, array)){
            newArray.push(array[i])
        }
    }
    return newArray
}

Array.prototype.myEvery = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (!callback.call(context, this[i], i, this))
            return false
    }
    return true
}


Array.prototype.mySome = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            return true
    }
    return false
}

const lps = (text) =>{
    let p = new Array(6).fill(0)
    let c=0
    let r=0
    let maxlength = 0
    let maxCenter = 0
    for(let i=1; i< text.length; i++){
        let mirror = 2 * c - i
        if(i < r){
            p[i] = Math.min(r-i, p[mirror] ? p[mirror]: 0)
        }

        while(text[i + (1+p[i])] === text[i - (1 + p[i])]){
            p[i]++
        }

        if(p[i]> maxlength) {
            maxlength = p[i]
            maxCenter = i
        }

        if(i + p[i] > r){
            c = i
            r = i + p[i]
        }
    }

    const start = maxCenter - maxlength
    const end = maxCenter + maxlength

    //substring does not print the end position
    console.log("The longest substring palindrom ", text,"is", text.substring(start, end+1))

}