//array.sort(function(){return .5-Math.random();});
 
function shuffle(array){
 
    let index,temp;
    let currentPass=array.length;
    while(currentPass>0)
    {
        index=Math.floor(Math.random()*currentPass);
        currentPass--;
    
        temp=array[currentPass];
        array[currentPass]=array[index];
        array[index]=temp;
        
    }
    document.write(array);
    }
    
    shuffle([1,2,3,4,5,6,7,8,9]);