!function(a){"use strict";a.fn.select2.locales.es={formatMatches:function(a){return 1===a?"Un resultado disponible, presione enter para seleccionarlo.":a+" resultados disponibles, use las teclas de dirección para navegar."},formatNoMatches:function(){return"No se encontraron resultados"},formatInputTooShort:function(a,b){var c=b-a.length;return"Por favor, introduzca "+c+" car"+(1==c?"ácter":"acteres")},formatInputTooLong:function(a,b){var c=a.length-b;return"Por favor, elimine "+c+" car"+(1==c?"ácter":"acteres")},formatSelectionTooBig:function(a){return"Sólo puede seleccionar "+a+" elemento"+(1==a?"":"s")},formatLoadMore:function(a){return"Cargando más resultados…"},formatSearching:function(){return"Buscando…"},formatAjaxError:function(){return"La carga falló"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.es)}(jQuery),function(a){"function"==typeof define&&define.amd?define(["moment"],a):"object"==typeof exports?module.exports=a(require("../moment")):a(("undefined"!=typeof global?global:this).moment)}(function(a){var b="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),c="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return a.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})});