/*申请目录和个人项目之间的切换*/ 
$(function(){
    var catelog=document.getElementsByClassName("apply_title1")[0];
    var project=document.getElementsByClassName("apply_title2")[0];
    catelog.onclick=function(){
        project.style.backgroundColor="#efefef";
        catelog.style.backgroundColor="#fa8983";
        var content1=document.getElementsByClassName("project_content")[0];
        var content2=document.getElementsByClassName("catelog_content")[0];
        var d1=getComputedStyle(content1).display;
        if(d1=="block"){
            content1.style.display="none";
            content2.style.display="block";
        }
    };
    project.onclick=function(){
        catelog.style.backgroundColor="#efefef";
        project.style.backgroundColor="#fa8983";
       var content1=document.getElementsByClassName("project_content")[0];
        var content2=document.getElementsByClassName("catelog_content")[0];
        var d1=getComputedStyle(content2).display;
        if(d1=="block"){
            content2.style.display="none";
            content1.style.display="block";        
        }
    };
    /*修改项目和修改密码之间的切换*/
    var cpj=document.getElementsByClassName("change_project")[0];
    var cpw=document.getElementsByClassName("change_pwd")[0];
    cpj.onclick=function(){
        var user=document.getElementById("user");
        var password=document.getElementById("password");
        user.src="img/user.png";
        password.src="img/password.png";
        cpw.style.color="#0b0b0b";
        cpj.style.color="#f83030";
        var content3=document.getElementById("project_form");
        var content4=document.getElementById("pwd_form");
        var d1=getComputedStyle(content4).display;
        if(d1=="block"){
            content4.style.display="none";
            content3.style.display="block";
        }

    }
    cpw.onclick=function(){
        var password=document.getElementById("password");
        var user=document.getElementById("user");
        password.src="img/password1.png";
        user.src="img/user1.png"; 
        cpj.style.color="#0b0b0b";
        cpw.style.color="#f83030";       
        var content3=document.getElementById("project_form");
        var content4=document.getElementById("pwd_form");
        var d1=getComputedStyle(content3).display;
        if(d1=="block"){
            content3.style.display="none";
            content4.style.display="block";
        }

    }
})
