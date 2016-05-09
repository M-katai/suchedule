function setCalendar( setToday ){  

  //日付の取得、設定
    myDate = new Date();  
    myWeekTbl = new Array("SUN","MON","TUE","WED","THU","FRI","SAT");  
    myMonthTbl= new Array( 31,28,31,30,31,30,31,31,30,31,30,31 ); 
    myToday = myDate.getDate();
    myMonth = myDate.getMonth();
    myDate.setDate(1); 
  
  //変数による付き設定
    myMonth = myMonth + setToday; 
    myDate.setMonth(myMonth); 
    myYear = myDate.getFullYear(); 
    myMonth = myDate.getMonth();
    myWeek = myDate.getDay(); 
  
  //閏年判定
    if (((myYear%4)==0 && (myYear%100)!=0) || (myYear%400)==0){  
        myMonthTbl[1] = 29; 
    }
  
  //カレンダーテーブル設定
    myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);  
    myTable   = new Array(7*myTblLine); 
    for(i=0; i<7*myTblLine; i++) myTable[i]="　";
    for(i=0; i<myMonthTbl[myMonth]; i++)myTable[i+myWeek]=i+1;
   
    // *********************  
    //      カレンダーの表示  
    // *********************  
    //見出しタイトル
document.write("<table>");
document.write("<div class='headname'>",myYear, "年", (myMonth+1), "月</div>");
document.write("<br/>");


//曜日のセット
document.write("<tr class='week'>");
for(i=0; i<7; i++){
   document.write("<td ");
   if(i==0)           document.write("class='sunday' >");
   else if(i==6)      document.write("class='satday' >");
   else if(i==5)      document.write("class='friday' >");
   else if(i==2 || i==4)      document.write("class='elsedays' >");
   else               document.write("class='elseday' >");
   document.write("<div>",myWeekTbl[i],"</div>");
   document.write("</td>");
}
document.write("</tr>");

//ループ
for(i=0; i<myTblLine; i++){
   document.write("<tr>");
   for(j=0; j<7; j++){
      document.write("<td ");
      myDat = myTable[j+(i*7)];
      if (myDat==myToday&& setToday == 0)document.write(" class='today' >"); //今日
      else if(j==6)      document.write(" class='satday' >"); //土曜日
      else if(j==0)      document.write(" class='sunday' >"); //日曜日
      else               document.write(" class='days' >");
      document.write("<div>",myDat,"</div>");
      document.write("</td>");
   }
   document.write("</tr>");
}
document.write("</table>");
} 