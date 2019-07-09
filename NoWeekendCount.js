<!DOCTYPE html>
<html lang="es">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<title>JQuery Date Picker</title>
    <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel = "stylesheet">
    <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <style>
            .flex-container {
              display: flex;
              background-color: #797272;
              justify-content: space-evenly;

            }
            
            .flex-container > div {
              background-color: #f1f1f1;
              margin: 10px;
              padding: 0px 30px;
              font-size: 30px;
            }
            </style>
    <script >
        var diaActual = new Date();
        var conteoDia = diaActual.getDay();
        console.log(conteoDia)
        var habilitateDay;
        var habilitaDiasAnterior;

        //Count for 4 Habilitated days from current day.
        //Also able to choosse if appointment was done. Habilitate for 10 before current day.

        //Count for Sunday's.
        if ( conteoDia === 0 ){
            habilitateDia = "+0m +4d"

            //Count 3 extra days for 1 weekend and 1 saturday unhabilitated.
            habilitaDiasAnterior = "-0m -13d"
        } 
        //Count for Mondays.
        else if  ( conteoDia === 1 ) {
            habilitateDia = "+0m +4d"

            //Count 4 extra days for 2 weekends unhabilitated.
            habilitaDiasAnterior = "-0m -14d"
        }
        //Count for tues, weds,thurs and friday's.
        else if  (conteoDia === 2 || conteoDia === 3 || conteoDia === 4 || conteoDia === 5 ){
            habilitateDia = "+0m +6d"

            //Count 4 extra days for 2 weekends unhabilitated.
            habilitaDiasAnterior = "-0m -14d"
        
        } 
        //Count for Saturday's.
        else if ( conteoDia === 6 ){
            habilitateDia = "+0m +5d"

            //Count 2 extra days for 1 weekend unhabilitated.
            habilitaDiasAnterior = "-0m -12d"
        } 
            
        var firstPick = {
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            closeText: "Close",
            autoSize: true,
            maxDate: habilitateDia,
            minDate: habilitaDiasAnterior,
            beforeShowDay: $.datepicker.noWeekends
        };

        var secondPick = {
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            closeText: "Close",
            autoSize: true, 
            showButtonPanel: true

        };

        
        $.datepicker.setDefaults($.datepicker.regional["es"]);
        $(function(){
          $('#Picker1').datepicker(firstPick);
        });

        $(function(){
          $('#Picker2').datepicker(secondPick);
        });
    </script>
    
    </head>
<body>
<div class="flex-container">
    <div>
        <p>DATE:
            <input type="text" id="Picker1">
        </p>
    </div>
    <div>
        <p>DATE2:
            <input type="text" id="Picker2">    
        </p>
    </div>

    
</div>


</body>
</html>
