[1,2,]

index time
value price 

[8, 7 , 6 , 4] 
3210
8 0 => maxIndex 0 maxValue 8

const checkMaxProfit = (arr) =>{
    const profit = arr.reduce((result, value, index)=>{
        const { maxValue, maxIndex,minIndex, minValue  } = result
        if(maxValue < value && maxIndex >= minIndex) {
            result[maxValue] = value
            result[maxIndex] = index
        }
        if(minValue > value && maxIndex <= minIndex){
            result[minValue] = value
            result[minIndex] = index
        }
        return result
    },{maxValue :0 , maxIndex: 0  , minValue : 0, minIndex:0 })

    array.lent -
}


// What is the output of the below code and why?
var hero = {
    _name: 'Johnny Deep',
    getIdentity: function (){
        return this._name;
    }
};
var heroIdentity = hero.getIdentity;
console.log(heroIdentity()); // undefinied
console.log(hero.getIdentity()); Johnny deep


[1,2,3].map((v,i)=> v*v) - []

Array.prototype.myMap = function (callBackFn,context) {
    let temp = []
    let arr = this
    for(let i=0;i< arr.length;i++){
       temp.push(callBackFn.call(context,arr[i],i))
    }
    return temp
}

{
    key: value
    [[prototype]] :{
        filter:
        myMap:

    }
}

[margin[border[padding[content]padding]border]margin]


css - browser -
css - user  s  - over 

<id>
    <child>
<parent>

.parent{
    .child {
        css 
    }
}




!important 
