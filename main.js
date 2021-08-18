function myFunction(){
    
    var chars = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{};:,.<>?/";
    var length = 16;
    var password = "";
    
    for (var i=0; i<length; i++){
        var random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random,random+1);
    }
    document.getElementById("pwd").value = password;
}


function myFunction2() {
    
  var copyText = document.getElementById("pwd");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password Copied to clipboard");
}