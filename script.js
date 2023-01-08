

function calcu(e){

    var outputBox =document.querySelector('#output');
    var outputValue =outputBox.innerText;
    let eveent =e.innerText
   let totalValue =outputValue +eveent
console.log(totalValue);
    let expressionArray =['+','-','/','*','%']
    let lastEle= outputValue.slice(0,-1);
    let res =document.querySelector('#res')
        
    res.innerText =totalValue
    if(totalValue.length > 4){

        let res =document.querySelector('#res')
        
        res.innerText =eval(totalValue);
        }
    
        console.log(lastEle);
 
if(!expressionArray.includes(lastEle)){
    outputBox.innerText = totalValue
   
}else if(!expressionArray.includes(e.innerText)){
    outputBox.innerText = totalValue
   

}
}

function clsssss(e) {
    var outputBox =document.querySelector('#output');
    var outputValue =outputBox.innerText;
    let res =document.querySelector('#res')
   let lastEle= outputValue.slice(0,-1);
   res.innerText=lastEle
   outputBox.innerText =lastEle

console.log(lastEle);

}
function allClear(e) {
    var outputBox =document.querySelector('#output');
    var outputValue =outputBox.innerText;
    let res =document.querySelector('#res')
    outputBox.innerText="";
    
     res.innerText="";

}
function equal(){

try{

    var outputBox =document.querySelector('#output');
    var outputValue =outputBox.innerText;
    let res =document.querySelector('#res')
    res.innerText="";
    outputBox.innerText=eval(outputBox.innerText)


}

catch(err){

alert(err);

}

}