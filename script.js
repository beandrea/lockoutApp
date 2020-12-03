$(document).ready(function () {
    $("#button-addon2").on("click", function() {
        let pas = $("input").val();
        
        let tot = 0;
        for(let i = 0; i < pas.length; i++){
            tot += pas.charCodeAt(i);
        }

        let shift = tot % pas.length;
        var newStr = "";
        for(let i = 0; i < pas.length; i++){
            let singleChrBits = pas.charCodeAt(i);
            let negVal = ~singleChrBits;
            for(let j = 0; j < 3; j++){
                singleChrBits = singleChrBits >> shift;
                singleChrBits = singleChrBits ^ (keyVar + j);
                singleChrBits = singleChrBits ^ negVal
                singleChrBits = abs(single ^ shift);
            }
            newStr += String.fromCharCode(singleChrBits);
        }
        console.log(newStr);
    });
});