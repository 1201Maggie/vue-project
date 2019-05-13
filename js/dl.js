function fnLogin() {
    var oUname=document.getElementById("uname");
    var oUpass=document.getElementById("upass");
    var oError=document.getElementById("error_box");
    var oCheckpass = document.getElementById("checkup's");
    oError.innerHTML ="<br>"
    //uname
    if(oUname.value.length<6 ||oUname.value.length>20){
        oError.innerHTML="用户名长度不可超过6-20！";
        return;
    }else if((oUname.value.charCodeAt(0)>=48 )&& oUname.value.charCodeAt(0)<=57){
        oError.innerHTML ="首字母不能是数字！.";
        return;
    }else for(var i=0;i<oUname.value.length;i++){
        if((oUname.value.charCodeAt(i)<48||oUname.value.charCodeAt(i)>57)&&
            (oUname.value.charCodeAt(i)<97||oUname.value.charCodeAt(i)>122)){
            oError.innerHTML ="只能包含字母或数字！.";
            return;
               }
           }
    //upass
    if(oUpass.value.length>20||oUpass.value.length<6){
        oError.innerHTML ="密码长度是:6-20";
        return;
          }
    if(oCheckpass.value!=oUpass.value){
        oError.innerHTML="输入密码不一致。" ;
        return;
    }else if(oCheckpass.value==""){
        oError.innerHTML="未确认密码。";
        return;
   }
    window.alert("登陆成功！")
       }