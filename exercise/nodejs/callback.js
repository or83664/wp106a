///匿名函數
var add=function (a,b)
{
    return a+b
}
// var a=3,b=5
// console.log(add(a,b))

//callback
var apply=function (f,x,y)
{
    var r=[]
    for (var i=0;i<x.length;i++)
    {
        var z=f(x[i],y[i])
        r.push(z)
    }
    return r
}
var x=[1,2,3],y=[1,1,1]
console.log(apply(add,x,y))