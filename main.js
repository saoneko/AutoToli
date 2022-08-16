var counter;
var ud;

function search(){
    counter = 1;
    var keymn = document.getElementsByClassName("key-mn");
    var key = document.getElementsByClassName("key");
    for(var i = 0; i < key.length; i++){
        key[i].style.backgroundColor = "#b7b7b7";
        key[i].id = "";
        keymn[i].id = "";
    }

    var error = document.getElementById("error-code").value.toLowerCase();
    if(error == ''){
        alert("Хайх утгаа оруулна уу!");
        document.getElementById("info").innerHTML = "Илэрц";
    }
    else{
        for(var j = 0; j < key.length; j++){
            var k = key[j].innerHTML;
            k = k + ' ';
            var err = "";
            for(var i = 0; i < k.length; i++){
                if(k[i] == ' '){
                    if(error == err.toLowerCase()){
                        key[j].style.color = "red";
                        key[j].setAttribute("id", counter);
                        keymn[j].setAttribute("id", counter + "mn");
                        counter++;
                        err = "";
                    }
                    else{
                        err = "";
                    }
                }
                else{
                    err = err + k[i];
                }
            }
        }
        counter--;
        ud = 1;
        var j = "#" + ud;
        location.href = j;
        document.getElementById("info").innerHTML = ud + "/" + counter;
        document.getElementById("translate").innerHTML = document.getElementById(ud + "mn").innerHTML;

    }
}

function updown(n){
    var j;
    if(n == 0){
        if(ud > 1 && ud <= counter){
            ud--;
            j = "#" + ud;
            location.href = j;
            document.getElementById("info").innerHTML = ud + "/" + counter;
            document.getElementById("translate").innerHTML = document.getElementById(ud + "mn").innerHTML;
        }
    }
    else if(n == 1){
        if(ud > 0 && ud < counter){
            ud++;
            j = "#" + ud;
            location.href = j;
            document.getElementById("info").innerHTML = ud + "/" + counter;
            document.getElementById("translate").innerHTML = document.getElementById(ud + "mn").innerHTML;
        }
    }
}
  