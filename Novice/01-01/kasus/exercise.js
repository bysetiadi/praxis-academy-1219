function loopATriangle(width){
    var w = width || 7;
    //var sharps = "#";
    for(var sharps = "#"; sharps.length <= w; sharps += "#"){
        console.log(sharps);
        //sharps = sharps + '#';
    }
}

loopATriangle();