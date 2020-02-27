function removeTag(str){

    if(str==null && str==''){
        return false;
    }
    else{
        str=str.toString();
        str.replace(/(<([^>]+)>)/ig,'');
    }
}
document.write("<p><strong><em>Javascript​ ​ Exercises</em></strong></p>");