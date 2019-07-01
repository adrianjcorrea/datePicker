 
            
            var diaActual = new Date();
            var numeroDeDia = diaActual.getDay();
            var diasAbilitados = 3 ;
            var adjustments = [0, 1, 1, 1, 1, 1, 0]; // Offsets by day of the week

            for (var i = 0; i < adjustments.length; i++) {
                if (numeroDeDia === 3|| numeroDeDia === 4 || numeroDeDia === 5) {
                    console.log(true)
                    diasAbilitados = diasAbilitados + 2;
                    break;
                } else {
                    console.log("Its not working, cheka los Dias");
                }
            }
            diaActual.setDate(numeroDeDia + diasAbilitados);

            var settingsDate = {
                // BUG-PD-16 MAPH 03/03/2017 Cambio de formatos de fecha en Fecha de Factura * y Fecha Firma de Contrato desde aaaa-mm-dd hacia dd/mm/aaaa
                dateFormat: "dd/mm/yy",
                showAnim: "slide",
                changeMonth: true,
                changeYear: true,
                showOtherMonths: true,
                selectOtherMonths: true,
                autoSize: true

            };
            var settingsDateFeFirma = {
                dateFormat: "dd/mm/yy",
                showAnim: "slide",
                changeMonth: false,
                changeYear: false,
                showOtherMonths: true,
                selectOtherMonths: true,
                autoSize: true,
                constrainInput: true,
                maxDate: diaActual,
                minDate: "+0m +0d",
                beforeShowDay: $.datepicker.noWeekends
            };
