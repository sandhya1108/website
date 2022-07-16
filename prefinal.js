function log(){
    var login=document.getElementById("login");
    var middle=document.getElementById("middle");
    middle.style.visibility="hidden";
    login.style.visibility="visible";

}
function checking(){
    var i=document.getElementById("i").value;
    r=/^(n|N)18(0|1)\d{3}$/;
    if(r.test(id)){
        return true;
    }
    else{
        alert("Please enter valid ID.")
        return false;
    }
}
    function searchItem(e)
    {
        var text=e.target.value.toLowerCase();
        var items=document.getElementsByClassName("lid");
        Array.from(items).forEach((item)=>{
        itemValue=item.firstChild.textContent;
        if(itemValue.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display="block";
        }
        else
        {
            item.style.display="none";
        }
        })

    }
    function fname(){
        var fe=document.getElementById('fnerror');
        var f=document.getElementById('fn').value;
        var r1=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var r2=/[0-9]/;
        if(f.length<3){
            fe.style.color="red";
            var a=fe.innerHTML="*Enter more than three characters.";
            fe.style.visibility="visible";
            return false;
        }
        if(r1.test(f)){
            fe.style.color="red";
            fe.innerHTML="*It contains special characters.";
            fe.style.visibility="visible";
            return false;
        }
        if(r2.test(f)){
            fe.style.color="red";
            fe.innerHTML="*It contains digits.";
            fe.style.visibility="visible";
            return false;
        }
        fe.style.color="green";
        fe.innerHTML="valid";
        return true;
    }
    function lname(){
        var le=document.getElementById('lnerror');
        var l=document.getElementById('ln').value;
        var r1=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var r2=/[0-9]/;
        if(l.length<3){
            le.style.color="red";
            var a=le.innerHTML="*Enter more than three characters.";
            le.style.visibility="visible";
            return false;
        }
        if(r1.test(l)){
            le.style.color="red";
            le.innerHTML="*It contains special characters.";
            le.style.visibility="visible";
            return false;
        }
        if(r2.test(l)){
            le.style.color="red";
            le.innerHTML="*It contains digits.";
            le.style.visibility="visible";
            return false;
        }
        le.style.color="green";
        le.innerHTML="valid";
        return true;
    }
    function mname(){
        var mnerror=document.getElementById('mnerror');
        var mn=document.getElementById('mn').value;
        var r1=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var r2=/[0-9]/;
        if(r1.test(mn)){
            mnerror.style.color="red";
            mnerror.innerHTML="*It contains special characters.";
            mnerror.style.visibility="visible";
            return false;
        }
        if(r2.test(mn)){
            mnerror.style.color="red";
            mnerror.innerHTML="*It contains digits.";
            mnerror.style.visibility="visible";
            return false;
        }
        mnerror.style.color="green";
        mnerror.innerHTML="valid";
        return true;
    }
    function mail(){
        var mail=document.getElementById("mail").value;
        var mailerror=document.getElementById("mailerror");
        var r1=/^[a-z,A-Z,0-9][0-9,A-Z,a-z,-,.]*@[a-z]{3,6}\.[a-z]{2,3}(\.)?([a-z])?([a-z])?$/;
        if(mail.length==0){
            mailerror.style.visibility="visible";
            mailerror.style.color="red";
            mailerror.innerHTML="Please enter email";
            return false;
    
        }
        if(r1.test(mail)){
            mailerror.style.visibility="visible";
            mailerror.style.color="green";
            mailerror.innerHTML="valid";
            return true;
        }
        else{
            mailerror.style.visibility="visible";
            mailerror.style.color="red";
            mailerror.innerHTML="Enter valid email";
            return false;
    
        }
    
    }
    function password(){
        var pwerror=document.getElementById('pwerror');
        var pw=document.getElementById('pw').value;
        if(pw.length==0){
            pwerror.style.color="red";
            pwerror.style.visibility="visible";
            pwerror.innerHTML="Please enter password";
            return false;
    
        }
        if(pw.length<6){
            pwerror.style.color="red";
            pwerror.style.visibility="visible";
            pwerror.innerHTML="It must contains 6 characters.";
            return false;
        }
        pwerror.style.color="green";
        pwerror.style.visibility="visible";
        pwerror.innerHTML="valid";
        return true;
    }
    function hobbies(){
        var h1=document.getElementById("h1").checked;
        var h2=document.getElementById("h2").checked;
        var h3=document.getElementById("h3").checked;
        var h4=document.getElementById("h4").checked;
        var e=[h1,h2,h3,h4];
        var count=0;
        for(let i=0;i<e.length;i++)
        {
            if(e[i]==true)
            {
                count=count+1;
            }
        }
        var herror=document.getElementById("herror");
        if(count<2){
            herror.style.visibility="visible";
            herror.style.color="red";
            herror.innerHTML="  Please select at lease 2 hobbies";
            return false;
        }
        herror.style.visibility="visible";
        herror.innerHTML="";
        return true;
        
    }
    function check(){
        var c=document.getElementById("c").checked;
        if(c){
            return true;
        }
        else{
            return false;
        }
    }
    function reset(){
        alert("Do you want to Reset?")
    }
    function address(){
        var ad=document.getElementById("ad").value;
        var s1="";
        for(let i of ad)
        {
            if(isNaN(i))
            {
                s1=s1+i;
            }
        }
        document.getElementById("ad").value=s1;
        return true;
    }
    function phn(){
        var u=document.getElementById("u").checked;
        var i=document.getElementById("i").checked;
        var pn=document.getElementById("pn").value;
        var pnerror=document.getElementById("pnerror");
        var ns=document.getElementById("ns");
        var up=/\d{3}-\d{3}-\d{4}/;
        var ip=/^[6-9]\d{9}$/;
        if(pn.length==0){
            pnerror.style.visibility="visible";
            pnerror.style.color="red";
            pnerror.innerHTML="Please enter phone number.";
            return false;
    
        }
        if(i){
            if(ip.test(pn)==false)
            {
                pnerror.style.visibility="visible";
                pnerror.style.color="red";
                pnerror.innerHTML="Invalid";
                return false;
            }
            else{
                pnerror.style.visibility="visible";
                pnerror.style.color="green";
                pnerror.innerHTML="valid";
                return true;
    
            }
        }
        else if(u){
            if(up.test(pn)==false)
            {
                pnerror.style.visibility="visible";
                pnerror.style.color="red";
                pnerror.innerHTML="Invalid";
                return false;
            }
            else{
                pnerror.style.visibility="visible";
                pnerror.style.color="green";
                pnerror.innerHTML="valid";
                return true;
    
            }
        }
    }
    function BornDay()
    {
        var dat=document.getElementById("dob").value;
        var dob=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec) ([0-2][0-9]|[3](0|1)) \d{4}$/;
        var d=new Date();
        if(dob.test(dat)==false)
        {
            return false;
        }
        var db=new Date(dat);
        if(d<db)
        {
            alert("you are not born");
        }
        /*else
        {
            alert("your age is: "+(d.getYear()-db.getYear()));
        }*/
        return true;
    }
    function validation(){
        var f=document.getElementById('fn').value
        var l=document.getElementById('ln').value;
        document.getElementById("fulln").value=f+l;
        if(fname() && mname() && lname() && phn() && password() &&hobbies() &&mail() && BornDay() && address() && check()){
            return true;
        }
        else{
            return false;
        }
    }
    function check(){
        var id=document.getElementById("id").value;
        r=/^(n|N)18(0|1)\d{3}$/;
        if(r.test(id)){
            return true;
        }
        else{
            alert("Please enter valid id.")
            return false;
        }
            
    }  
      