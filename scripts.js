let textbox = document.getElementById("textbox");

textbox.addEventListener("input",function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML=`${char}`;


    text = text.trim();  // starting space and ending space remove (Extra space remove)
    let words = text.split(" ");  // split used for spacing
    let cleanList = words.filter(function(element){
            return element != "";   // this is remove all the spaces
    })
    // console.log(cleanList);

    document.getElementById("word").innerHTML = cleanList.length;
    
});