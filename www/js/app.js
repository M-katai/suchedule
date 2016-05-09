    
  //終日切替
    function dayall(checked) {
        if(checked == true){
          document.getElementById('starttime').style.visibility = " hidden";
          document.getElementById('endtime').style.visibility = " hidden";
        } else {
          document.getElementById('starttime').style.visibility = "visible";
          document.getElementById('endtime').style.visibility = "visible";
        }
    }
    
  //input追加
  function add(num) {
      num++;
      if(num < 10) {
      var div_element = document.createElement("div");
      div_element.innerHTML = '<input type="text" class="text-input--underbar" placeholder="memo" style="font-size: 18px; width: 50%;" onclick="add('+ num +')"> <input type="number" class="text-input--underbar" placeholder="￥" onblur="addsum(this)" style="font-size: 18px;  width: 40%;" id="num'+ num +'"><br />';
      var parent_object = document.getElementById("input");
      parent_object.appendChild(div_element);
      } else if(num == 9){
                var div_element = document.createElement("div");
      div_element.innerHTML = '<input type="text" class="text-input--underbar" placeholder="memo" style="font-size: 18px; width: 50%;"> <input type="number" class="text-input--underbar" placeholder="￥" onblur="addsum(this)" style="font-size: 18px;  width: 40%;" id="num'+ num +'"><br />';
      var parent_object = document.getElementById("input");
      parent_object.appendChild(div_element);
      }
  }
  
  //input計算
  function addsum(str) {    
    //Int変換
    var mon = parseInt(str.value);
    
    //NaN判定
    if( isNaN(mon) ) {
        mon = 0;
    }
    
    var total = parseInt(document.getElementById("total").value);
    
    var sam = mon + total;
    
    var n0, n1, n2, n3, n4, n5, n6, n7, n8, n9;
    
    if(document.getElementById("num0")){
        n0 = parseInt(document.getElementById("num0").value);
        if( isNaN(n0) ) {
            n0 = 0;
        }
    } else {
        n0 = 0;
    }
    
    if(document.getElementById("num1")){
        n1 = parseInt(document.getElementById("num1").value);
        if( isNaN(n1) ) {
            n1 = 0;
        }
    } else {
        n1 = parseInt(0);
    }
    
    if(document.getElementById("num2")){
        n2 = parseInt(document.getElementById("num2").value);
        if( isNaN(n2) ) {
            n2 = 0;
        }
    } else {
        n2 = parseInt(0);
    }
    
    if(document.getElementById("num3")){
        n3 = parseInt(document.getElementById("num3").value);
        if( isNaN(n3) ) {
            n3 = 0;
        }
    } else {
        n3 = parseInt(0);
    }
    
    if(document.getElementById("num4")){
        n4 = parseInt(document.getElementById("num4").value);
        if( isNaN(n4) ) {
            n4 = 0;
        }
    } else {
        n4 = parseInt(0);
    }
    
    if(document.getElementById("num5")){
        n5 = parseInt(document.getElementById("num5").value);
        if( isNaN(n5) ) {
            n5 = 0;
        }
    } else {
        n5 = parseInt(0);
    }
    
    if(document.getElementById("num6")){
        n6 = parseInt(document.getElementById("num6").value);
        if( isNaN(n6) ) {
            n6 = 0;
        }
    } else {
        n6 = parseInt(0);
    }
    
    if(document.getElementById("num7")){
        n7 = parseInt(document.getElementById("num7").value);
        if( isNaN(n7) ) {
            n7 = 0;
        }
    } else {
        n7 = parseInt(0);
    }
    
    if(document.getElementById("num8")){
        n8 = parseInt(document.getElementById("num8").value);
        if( isNaN(n8) ) {
            n8 = 0;
        }
    } else {
        n8 = parseInt(0);
    }
    
    if(document.getElementById("num9")){
        n9 = parseInt(document.getElementById("num9").value);
        if( isNaN(n9) ) {
            n9 = 0;
        }
    } else {
        n9 = parseInt(0);
    }
   
   var sams = n0 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9;
   
     if(sam > sams) {
         sam = sams
     }
      
    document.getElementById("total").value=sams;
  }
  