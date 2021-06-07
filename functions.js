var wa9t_message_counter = 0;
var wa9t_message ="";
var wa9t_message_primary = "";
var wa9t_message_secondary = "";

(function () {
    'use strict';

   

   setInterval (function getDate() {
        var date = new Date();
        var weekday = date.getDay();
        var day = date.getDate();
        var hour = hours12(date);
        var minutes = date.getMinutes();
        var new_minutes =  0;
 

        switch(hour){

            case 12: wa9t_message = "نص نهار";
            if(minutes>39){

                wa9t_message = "مضيساعة";
            }
            break;

            case 1: wa9t_message = "مضيساعة";

            if(minutes>39){

                wa9t_message = "مضيساعتين";
            }
            break;
        
            case 2: wa9t_message = "مضيساعتين";

            if(minutes>39){

                wa9t_message = "مطلاثه";
            }
            break;
            case 3: 
            wa9t_message = "مطلاثه";
            if(minutes>39){

                wa9t_message = "لربعة";
            
            }
            break;
            case 4: 
            wa9t_message = "لربعة";

            if(minutes>39){

                wa9t_message = "الخمسة";
            
            }
            break;
            case 5: wa9t_message = "الخمسة";
            

            if(minutes>39){

                wa9t_message = "الستة";
            
            }
            break;
            case 6: 
            
            wa9t_message = "الستة";
            if(minutes>39){

                wa9t_message = "السبعة";
            
            }
            break;
            case 7: wa9t_message = "السبعة";

            if(minutes>39){

                wa9t_message = "الثمنية";
            
            }
            break;
            case 8:
                
            wa9t_message = "الثمنية";

            if(minutes>39){

                wa9t_message = "التسعة";
            
            }
            break;
            case 9:
                
            wa9t_message = "التسعة";
            if(minutes>39){

                wa9t_message = "العشرة";
            
            }
            break;
            case 10: wa9t_message = "العشرة";

            if(minutes>39){

                wa9t_message = "الحداش";
            
            }
            break;
            case 11: 
            
            wa9t_message = "الحداش";

            if(minutes>39){


                var hour = date.getHours();
                if(hour-12 <= 0){
                    wa9t_message = "نص نهار";
                }else{
                    wa9t_message = "نص اليل";
                    
                }
                
            
            }
            break;
            case 0: wa9t_message = "نص اليل";
            break;
        }

        

        

        switch(true){
            
            case minutes==0: wa9t_message_primary =  "قد قد";
            
            break;

            case minutes<=2: wa9t_message_primary =  "";
            
            break;

            case minutes<=5: 
                
            if(minutes>=3){
                wa9t_message_primary = "و درج";
            }
        
            break;


    

            case minutes<=10 : 
    
            if(minutes>=8){
            
            wa9t_message_primary = "و درجين";
            }else{

            wa9t_message_primary = "و درج";
            
            }
        
         
            break;


        
            case minutes<=15 : 
            if(minutes>=13){
            
                wa9t_message_primary = "و ربع";
                }
                else{

                    wa9t_message_primary = "و درجين";
                    
                    }
        
            break;



            case minutes<=20: 
         
            if(minutes>=18){
            
                wa9t_message_primary = "و أربعة";
                }  else{

                    wa9t_message_primary = "و ربع";
                    
                    }
        
            break;


           

            case minutes<=25: 
            if(minutes>=23){
            
                wa9t_message_primary = "و خمسة";
                }else{

                    wa9t_message_primary = "و أربعة";
                    
                    }
        
            break;


        

            case minutes<=30: 

            if(minutes>=28){
                wa9t_message_primary = "و نص";
                }else{

                    wa9t_message_primary = "و خمسة";
                    
                    }
        
            break;

         

            case minutes<=35: 

              
              if(minutes>=33){
                wa9t_message_primary = "و سبعة";
                }else{

                    wa9t_message_primary = "و نص";
                    
                    }
        
            break;

            case minutes<=40: 
            
            if(minutes>=38){
                wa9t_message_primary = "غير أربعة";
                }else{

                    wa9t_message_primary = "و سبعة";
                    
                    }
        
            break;
            case minutes<=45: 
          
          

            if(minutes>=43){
                wa9t_message_primary = "غير ربع";
                }else{

                    wa9t_message_primary = "غير أربعة";
                    
                    }
        
            break;
            case minutes<=50: 
         
            if(minutes>=48){
                wa9t_message_primary = "غير درجين";
                }else{

                    wa9t_message_primary = "غير ربع";
                    
                    }
        
            break;
            case minutes<=55: 
          
            if(minutes>=53){
                wa9t_message_primary = "غير درج";
                }else{

                    wa9t_message_primary = "غير درجين";
                    
                    }
        
       break;

       case minutes<=59: 
          
       if(minutes>=57){
           wa9t_message_primary =  "";
           }
   
        break;
            
         
          
        }

     
        var minutesString= minutes.toString()
        const MinutesfirstCharacter = minutesString.slice(-1);

    
   
        
        

    
      
        switch(MinutesfirstCharacter){
        
            case "1":
            case "2":
            case "6": 
            case "7":
                wa9t_message_secondary ="خارج";
            break;


            case "3": 
            case "4": 
            case "8": 
            case "9": 
            wa9t_message_secondary ="ميحررش"
            break;

            default: 
            wa9t_message_secondary = ""

       
        }

        console.log("Minutes ==== : ",    minutes)
     
        console.log("Number of minutes for 5arej or may7ararch : ",minutesString)

        console.log("5arej or not ====",MinutesfirstCharacter);


      
		

        var weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var weekdayNamesTunsian = ["أحد", "ثنين", "ثلاثة", "اربعا", "خميس", "جمعة", "سبت"];
      

        var showDate = day + ", " + weekdayNamesTunsian[weekday];

        // var showTime = hour + ":" + minutes;
  
        var showTime = wa9t_message +" "+  wa9t_message_primary + " " + wa9t_message_secondary ;
        console.log(showTime);

        document.querySelector(".open").innerHTML = showTime;

        document.querySelector(".hrs").innerHTML = showDate;

        if (minutes < 10){
            new_minutes = "0" + minutes;
        }else{
            new_minutes =  minutes;
        }
        console.log(new_minutes)

        var NewshowTime = date.getHours() + ":" + new_minutes;
        document.querySelector(".hrss").innerHTML = NewshowTime;
        function resetWa9tCounter() {
            wa9t_message_counter = 0;
            wa9t_message_secondary = ""
        };
        
        function hours12(date) { return (date.getHours() + 24) % 12 || 12; }

		
    }, 1000);

    

    getDate();

    
pm.style.fontSize = "9px";
}());