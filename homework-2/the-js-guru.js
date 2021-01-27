function isFlat(input)
{
    let flat=true;
    input.forEach(function(element)
    {
        if(Array.isArray(element)) flat=false;
    })
    return flat;
}
function flatten(input)
{
    if(isFlat(input)) return input;
    input=[].concat(...input);
    return flatten(input);
    
}
function processData(input) {
    var result=[];
    input=eval(input);
    let len=input.filter(function(element)
    {
        if(typeof(element)==="number") return element.toString();
    }).length; 
    if(len) result.unshift(len);
    input.forEach(function(element)
    {
        if(typeof(element)==="string")
        {
           result.push(element.split("").reverse().join(""));     
        }
        else if(typeof(element)==="function")
        {
            result.push(element(42));   
        }
        else if(Array.isArray(element))
        {
            if(isFlat(element)) result.push(element.sort());
            else result.push(flatten(element));
        }
        else if(typeof(element)==="object")
        {
            result.push(`${Object.keys(element).join("")}: ${Object.values(element).join("")}`);
        }  
    })
    console.log(JSON.stringify(result));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
