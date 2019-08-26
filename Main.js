

  function process(x){
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Start");
    btn.appendChild(t);
    var parent = document.getElementById("main_page");
    var child = document.getElementById("start_quiz");
    child.style.height="100%";
    child.style.maxWidth="100%";
    child.style.padding="5rem";
    child.style.fontSize="3rem";
    child.style.textAlign="center";
    var par=document.getElementById("content");
    var imp=document.getElementById("importance");
    var frm=document.getElementById("form");
    document.body.removeChild(imp);
    document.body.removeChild(frm);
    child.appendChild(x);
    child.appendChild(btn);
    parent.removeChild(par);
    return btn;
  }

  function html(){
    var x = document.createTextNode("Let's ready to begin the quiz of HTML.");
    var btn=process(x);
    btn.onclick=function() {html_quiz()};
  }

  function css(){
    var x = document.createTextNode("Let's ready to begin the quiz of CSS.");
    process(x);
    btn.onclick()=function(){css_quiz()};
  }

  function js(){
    var x = document.createTextNode("Let's ready to begin the quiz of JAVASCRIPT.");
    process(x);
    btn.onclick()=function(){js_quiz()};
  }

  function sql(){
    var x = document.createTextNode("Let's ready to begin the quiz of SQL.");
    process(x);
    btn.onclick()=function(){sql_quiz()};
  }

  /*function html_quiz(){
    var hd = document.getElementById("header_section");
    document.body.removeChild(hd);
    var ft = document.getElementById("footer-main");
    document.body.removeChild(ft);
    var mn = document.getElementById("main_page");
    document.body.removeChild(mn);
    var q_btn=document.getElementById("quest_btn");
    var btn1 = document.createElement("BUTTON");
    var t1 = document.createTextNode("Question1");
    btn1.appendChild(t1);
    var btn2 = document.createElement("BUTTON");
    var t2 = document.createTextNode("Question2");
    btn2.appendChild(t2);
    var btn3 = document.createElement("BUTTON");
    var t3= document.createTextNode("Question3");
    btn3.appendChild(t3);
    var btn4 = document.createElement("BUTTON");
    var t4 = document.createTextNode("Question4");
    btn4.appendChild(t4);
    var btn5 = document.createElement("BUTTON");
    var t5 = document.createTextNode("Question5");
    btn5.appendChild(t5);
    var btn6 = document.createElement("BUTTON");
    var t6 = document.createTextNode("Question6");
    btn6.appendChild(t6);
    var btn7 = document.createElement("BUTTON");
    var t7 = document.createTextNode("Question7");
    btn7.appendChild(t7);
    var btn8 = document.createElement("BUTTON");
    var t8= document.createTextNode("Question8");
    btn8.appendChild(t8);
    var btn9 = document.createElement("BUTTON");
    var t9 = document.createTextNode("Question9");
    btn9.appendChild(t9);
    var btn10 = document.createElement("BUTTON");
    var t10 = document.createTextNode("Question10");
    btn10.appendChild(t10);
    q_btn.appendChild(btn1);
    q_btn.appendChild(btn2);
    q_btn.appendChild(btn3);
    q_btn.appendChild(btn4);
    q_btn.appendChild(btn5);
    q_btn.appendChild(btn6);
    q_btn.appendChild(btn7);
    q_btn.appendChild(btn8);
    q_btn.appendChild(btn9);
    q_btn.appendChild(btn10);



  }

  function css_quiz(){
    var p = document.getElementById("main_page");
    var c = document.getElementById("start_quiz");
    p.removeChild(c);

  }

  function js_quiz(){
    var p = document.getElementById("main_page");
    var c = document.getElementById("start_quiz");
    p.removeChild(c);

  }

  function sql_quiz(){
    var p = document.getElementById("main_page");
    var c = document.getElementById("start_quiz");
    p.removeChild(c);

  }
  */

 function html_quiz(){
  fetch('http://localhost:3000/quiz').then(response=> {
      return response.json();
  })
  .then(data=>{
    console.log(data.HTML);
    let q_no=[data.HTML.q1.question,data.HTML.q2.question,data.HTML.q3.question,data.HTML.q4.question,data.HTML.q5.question,data.HTML.q6.question,data.HTML.q7.question,data.HTML.q8.question,data.HTML.q9.question,data.HTML.q10.question];
    let t_option=[data.HTML.q1.options,data.HTML.q2.options,data.HTML.q3.options,data.HTML.q4.options,data.HTML.q5.options,data.HTML.q6.options,data.HTML.q7.options,data.HTML.q8.options,data.HTML.q9.options,data.HTML.q10.options];
    let t_ans=[data.HTML.q1.answer,data.HTML.q2.answer,data.HTML.q3.answer,data.HTML.q4.answer,data.HTML.q5.answer,data.HTML.q6.answer,data.HTML.q7.answer,data.HTML.q8.answer,data.HTML.q9.answer,data.HTML.q10.answer];
  
    var hd = document.getElementById("header_section");
    document.body.removeChild(hd);
    var mn = document.getElementById("main_page");
    document.body.removeChild(mn);
    var ft = document.getElementById("footer-main");
    document.body.removeChild(ft);

    var qq=document.getElementById("quest_section");
    let btn=document.createElement("button");
    btn.innerHTML="Next";
    qq.appendChild(btn);
    var i=0;
    let a=document.getElementById("option_a");
    let b=document.getElementById("option_b");
    let c=document.getElementById("option_c");
    let d=document.getElementById("option_d");
    let q=document.getElementById("qs");
    var a_r = document.createElement("input");
    a_r.setAttribute("type", "radio");
    var b_r = document.createElement("input");
    b_r.setAttribute("type", "radio");
    var c_r = document.createElement("input");
    c_r.setAttribute("type", "radio");
    var d_r = document.createElement("input");
      d_r.setAttribute("type", "radio");
    q.innerHTML=q_no[i]+"</br>" +"</br>";
  
    let ans=t_option[0][0];
    let score=0;
  
    a.appendChild(a_r);
    let a_opt=document.createTextNode(t_option[i][0]);
    a.appendChild(a_opt);
  
    b.appendChild(b_r);
    let b_opt=document.createTextNode(t_option[i][1]);
    b.appendChild(b_opt);
  
    c.appendChild(c_r);
    let c_opt=document.createTextNode(t_option[i][2]);
    c.appendChild(c_opt);
  
    d.appendChild(d_r);
    let d_opt=document.createTextNode(t_option[i][3]);
    d.appendChild(d_opt);
    
    
    btn.onclick=function() {increase_qs()};
  
    function increase_qs(){
      set_answer(i,a_r,b_r,c_r,d_r);
      i++;
      q.innerHTML=q_no[i]+"</br>" +"</br>";
  
  
      var a_r_i = document.createElement("input");
      a_r_i.setAttribute("type", "radio");
      var b_r_i = document.createElement("input");
      b_r_i.setAttribute("type", "radio");
      var c_r_i = document.createElement("input");
      c_r_i.setAttribute("type", "radio");
      var d_r_i = document.createElement("input");
      d_r_i.setAttribute("type", "radio");
      
      a.replaceChild(a_r_i,a_r);
      let a_opt_i=document.createTextNode(t_option[i][0]);
      a.replaceChild(a_opt_i,a_opt);
      a_opt=a_opt_i;
      a_r=a_r_i;
  
      b.replaceChild(b_r_i,b_r);
      let b_opt_i=document.createTextNode(t_option[i][1]);
      b.replaceChild(b_opt_i,b_opt);
      b_opt=b_opt_i;
      b_r=b_r_i;
  
      c.replaceChild(c_r_i,c_r);
      let c_opt_i=document.createTextNode(t_option[i][2]);
      c.replaceChild(c_opt_i,c_opt);
      c_opt=c_opt_i;
      c_r=c_r_i;
  
      d.replaceChild(d_r_i,d_r);
      let d_opt_i=document.createTextNode(t_option[i][3]);
      d.replaceChild(d_opt_i,d_opt);
      d_opt=d_opt_i;
      d_r=d_r_i;
  
      if(i==q_no.length-1)
      alert("Your Score is " + score);
  
    }
  
    function set_answer(i,a,b,c,d){
      if(a.checked==true)
      ans=t_option[i][0];
      else if(b.checked==true)
      ans=t_option[i][1];
      else if(c.checked==true)
      ans=t_option[i][2];
      else if(d.checked==true)
      ans=t_option[i][3];
      else
      ans="";
      if(ans==t_ans[i])
      score++;
    }


    var q_btn=document.getElementById("quest_btn");
    var btn1 = document.createElement("BUTTON");
    var t1 = document.createTextNode("Question1");
    btn1.appendChild(t1);
    var btn2 = document.createElement("BUTTON");
    var t2 = document.createTextNode("Question2");
    btn2.appendChild(t2);
    var btn3 = document.createElement("BUTTON");
    var t3= document.createTextNode("Question3");
    btn3.appendChild(t3);
    var btn4 = document.createElement("BUTTON");
    var t4 = document.createTextNode("Question4");
    btn4.appendChild(t4);
    var btn5 = document.createElement("BUTTON");
    var t5 = document.createTextNode("Question5");
    btn5.appendChild(t5);
    var btn6 = document.createElement("BUTTON");
    var t6 = document.createTextNode("Question6");
    btn6.appendChild(t6);
    var btn7 = document.createElement("BUTTON");
    var t7 = document.createTextNode("Question7");
    btn7.appendChild(t7);
    var btn8 = document.createElement("BUTTON");
    var t8= document.createTextNode("Question8");
    btn8.appendChild(t8);
    var btn9 = document.createElement("BUTTON");
    var t9 = document.createTextNode("Question9");
    btn9.appendChild(t9);
    var btn10 = document.createElement("BUTTON");
    var t10 = document.createTextNode("Question10");
    btn10.appendChild(t10);
    q_btn.appendChild(btn1);
    q_btn.appendChild(btn2);
    q_btn.appendChild(btn3);
    q_btn.appendChild(btn4);
    q_btn.appendChild(btn5);
    q_btn.appendChild(btn6);
    q_btn.appendChild(btn7);
    q_btn.appendChild(btn8);
    q_btn.appendChild(btn9);
    q_btn.appendChild(btn10);

  
  })
  .catch(err=>{
  
  })};
  
