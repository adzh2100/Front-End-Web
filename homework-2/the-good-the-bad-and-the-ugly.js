function processData(input) {
    input=input.toLowerCase();
    let arr=input.split("");
    let visited=[];
    let previous;
    let previous2;
    let count1=0;
    let count2=0;
    let ugly=false;
    arr.forEach(function(element)
    {
        if(visited[element.charCodeAt(0)-"a".charCodeAt(0)]===undefined)
            {
                visited[element.charCodeAt(0)-"a".charCodeAt(0)]=1;
            }
        else
            {
                visited[element.charCodeAt(0)-"a".charCodeAt(0)]++;
            }
    });
    visited.forEach(function(element,index)
    {       
        if(previous===element || previous===undefined)
        {
            count1++;
            previous=element;
            return;
        }
        else if(previous2===element || previous2===undefined)
        {
            count2++;
            previous2=element;
            return;
        }
        else 
        {
            ugly=true;
        }
    })
    
    if (ugly || (count1>1 && count2>1)) console.log("UGLY");
    else if(count2==0 || count1==0) console.log("GOOD");
    else if(count1==1 || count2==1) console.log("BAD");
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
