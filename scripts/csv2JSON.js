function csv2JSON(csv){
    
    var lines=csv.split('\n');
    
    var result = [];
    
    var headers=lines[0].split(',');
    
    for (var i=1; i<lines.length; i++){
        var hold = {};
        var currentline = lines[i].split(',');
        for (var j=0; j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(hold);
    }
    
    return JSON.stringify(result);
}
