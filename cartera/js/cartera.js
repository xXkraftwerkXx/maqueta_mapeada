var imgSrcCartera = {
        src1:        'img/2-Cartera.png',
        src2:        'img/3-Cartera.png',
        compCartera: 'img/3.1-Cartera.png',
        compCartera2:'img/3-Comp-Cartera.png',
        src3:        'img/13-Cartera.png',
        src4:        'img/14_1-Cartera.png',
        src5:        'img/15-Cartera.png',
        src6:        'img/16-Cartera.png',
        src7:        'img/20-Cartera.png',
        src8:        'img/21-Cartera.png',
        src9:        'img/22-Cartera.png',
        src10:       'img/23-Cartera.png',
        src11:       'img/24-Cartera.png',
        src12:       'img/25-Cartera.png',
        comentarios:   'img/25_1-Cartera.png',
        src13:       'img/26-Cartera.png',
        src14:       'img/27-Cartera.png',
        src15:       'img/28-Cartera.png',
        src16:       'img/29-Cartera.png',
        src17:       'img/30-Cartera.png',
        src18:       'img/4-Cartera.png',
        src19:       'img/5-Cartera.png',
        src20:       'img/7-Cartera.png',
        src21:       'img/8-Cartera.png',
        src22:       'img/9-Cartera.png',
        src23:       'img/6-Cartera.png',
        src24:       'img/10-Cartera.png',
        src25:       'img/11-Cartera.png',
        src26:       'img/12-Cartera.png',
        src27:       'img/17-Cartera.png',
        src28:       'img/17.1-Cartera.png',
        src29:       'img/18-Cartera.png',
        src30:       'img/19-Cartera.png',
        src31:       'img/13.1-Cartera.png',
        src32:       'img/4.1-Cartera.png'
    //    src31:'img/19-Cartera.png',
    //    src32:'img/19-Cartera.png',
    //    src33:'img/19-Cartera.png',
    //    src34:'img/19-Cartera.png',
    //    src35:'img/19-Cartera.png',
    //    src36:'img/19-Cartera.png',
    //    src37:'img/19-Cartera.png',
    }
var imgHolder = $('#img');
var switch_home =$('.switch_home');

// $(switch_home).popover();
$('.composicion_cartera').click(function(){   
    switch($(imgHolder).attr('data-comp')) {
        case 'on':
            $(imgHolder).attr({
                'src':imgSrcCartera.compCartera,
                'data-comp':'off',
                'usemap':'#cartera_home'
            });
            break;
        case 'off':
            $(imgHolder).attr({
                'src':imgSrcCartera.src1,
                'data-comp':'on',
                'usemap':'#cartera_home'
            });
            break;
        default:
            $(imgHolder).attr({
                'src':imgSrcCartera.compCartera2,
                'data-comp':'off',
                'usemap':'#cartera_home'
            });
    }
});
$(switch_home).click(function(){
    switch($(imgHolder).attr('data-src')) {
        case 'clientes':
            $(imgHolder).attr({
                'src':imgSrcCartera.src2,
                'data-src':'miles',
                'usemap':'#cartera_home'
            });
            break;
        case 'miles':
            $(imgHolder).attr({
                'src':imgSrcCartera.src1,
                'data-src':'clientes',
                'usemap':'#cartera_home'
            });
            break;
        default:
            $(imgHolder).attr({
                'src':imgSrcCartera.src1,
                'data-src':'clientes',
                'usemap':'#cartera_home'
            });
    }
    
});
//////////////////////////////    NAVEGACION TABS    //////////////////////////////
var tabMiCartera    = $('.mi_cartera_Tab'),
    tabCaptacionInt = $('.captacion_integral_Tab'),
    tabGiroCartera  = $('.giro_cartera_Tab'),
    tabColectivos   = $('.colectivos_Tab'),
    tabCompromisos  = $('.compromisos_Tab');

$(tabMiCartera).click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src18,
        usemap:'#mi_cartera'
    });
});
$(tabCaptacionInt).click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src25,
        usemap:'#captacion'
    });
});
$(tabGiroCartera).click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src3,
        usemap:'#giro_cartera',
        'data-title':'giro-cartera'
    });
});
$(tabColectivos).click(function(){
    $(imgHolder).attr({
            'src':imgSrcCartera.src27,
            'alt':'',
            'usemap':'#colectivos'
        });
});
$(tabCompromisos).click(function(){
    $('body').css('height','100vh');
    $(imgHolder).attr({
        src:imgSrcCartera.src7,
        usemap:'#compromisos',
        'data-title':'compromisos'
    });
});

////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////    NAVEGACION PRINCIPAL    //////////////////////////////

var miPerfil     = $('.mi_perfil'),
    acciones_com = $('.acciones_comerciales'),
    cartera      = $('.cartera'),
    tareas       = $('.tareas');
$(miPerfil).click(function(){
    window.location.href='http://2pj3b9.axshare.com/#p=home';
});
$(cartera).click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src1,
        usemap:'#cartera_home'
    });
});

//////////////////////////////    MI CARTERA    //////////////////////////////
$('.microcampañas_close,.close_modal_microcampañas').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src18,
        usemap:'#mi_cartera'
    });
});
$('.engrane_opciones').click(function(){
    if(!imgHolder.attr('data-engrane')){
        $(imgHolder).attr({
            src:imgSrcCartera.src32,
            usemap:'#mi_cartera',
            'data-engrane':'on'
        });
    }else{
        $(imgHolder).attr({
            src:imgSrcCartera.src18,
            usemap:'#mi_cartera',
            'data-engrane':''
        });
    }
    
});
$('.microcampañas_mi_cartera').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src19,
        usemap:'#microcampañas_modal'
    });
});
$('.mostrar_listado_microcampañas').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src20,
        usemap:'#microcampañas_modal_grafica'
    });
});
$('.guardar_microcampañas').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src21,
        usemap:'#microcampañas_modal_grafica_confirmacion'
    });
});
$('.generar_microcampaña_modal_microcampañas').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src22,
        usemap:'#confirmacion_forma_trabajo'
    });
});
$('.comenzar_confirmacion_forma_trabajo').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src24,
        usemap:'#mi_cartera'
    });
});
//////////////////////////////    CAPTACION    //////////////////////////////
$('.captacion').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src25,
        usemap:'#captacion'
    });
});
$('.captacion_switch').click(function(){
    switch($(imgHolder).attr('alt')) {
        case '':
            $(imgHolder).attr({
                'src':imgSrcCartera.src26,
                'alt':'switch_on',
                'usemap':'#captacion'
            });
            break;
        case 'switch_on':
            $(imgHolder).attr({
                'src':imgSrcCartera.src25,
                'alt':'',
                'usemap':'#captacion'
            });
            break;
        default:
            $(imgHolder).attr({
                src:imgSrcCartera.src25,
                'alt':'',
                usemap:'#captacion'
            });
    }
    
});
$('.captacion_microcampañas_modal').click(function(){
    
});
//////////////////////////////    GIRO DE CARTERA    //////////////////////////////
var close_modal           = $('.close_microcampaña_giro_cartera'),
    mostrar_listado_modal = $('.mostrar_listado_microcampaña_giro_cartera'),
    giro_cartera          = $('.giro_cartera');

$(giro_cartera).click(function(){
    $('body').css('height','100%');
    $(imgHolder).attr({
        src:imgSrcCartera.src3,
        usemap:'#giro_cartera',
        'data-title':'giro-cartera'
    });
});
$(close_modal).click(function(){
    $('body').css('height','100%');
    $(imgHolder).attr({
        src:imgSrcCartera.src3,
        usemap:'#giro_cartera'
    });
});
$('.grafica_trigger').click(function(){
    switch($(imgHolder).attr('alt')) {
        case '':
            $(imgHolder).attr({
                'src':imgSrcCartera.src4,
                'alt':'grafica_on',
                'usemap':'#giro_cartera'
            });
            break;
        case 'grafica_on':
            $(imgHolder).attr({
                'src':imgSrcCartera.src3,
                'alt':'',
                'usemap':'#giro_cartera'
            });
            break;
        default:
            $(imgHolder).attr({
                'src':imgSrcCartera.src3,
                'alt':'',
                'usemap':'#giro_cartera'
            });
        }    
});
$('.microcampañas_giro_cartera').click(function(){
    $(imgHolder).attr({
                'src':imgSrcCartera.src31,
                'alt':'',
                'usemap':'#giro_cartera_microcampaña_modal'
            });
});
//////////////////////////////    COLECTIVOS    //////////////////////////////
$('.microcampañas_colectivos_close,.colectivos_nomina_onboarding').click(function(){
    $(imgHolder).attr({
            'src':imgSrcCartera.src27,
            'alt':'',
            'usemap':'#colectivos'
        });
});
$('.chocolates_supremos_colectivos').click(function(){
    $(imgHolder).attr({
            'src':imgSrcCartera.src29,
            'alt':'',
            'usemap':'#chocolates_supremos_colectivos'
        });
});
$('.microcampañas_modal_colectivos').click(function(){
    $(imgHolder).attr({
            'src':imgSrcCartera.src28,
            'alt':'',
            'usemap':'#microcampañas_modal_colectivos'
        });
});
$('.onboarding_colectivos').click(function(){
    $(imgHolder).attr({
            'src':imgSrcCartera.src30,
            'alt':'',
            'usemap':'#onboarding_colectivos'
        });
});

//////////////////////////////    COMPROMISOS    //////////////////////////////

$('.compromisos,.captura_modal_close').click(function(){
    $('body').css('height','100vh');
    $(imgHolder).attr({
        src:imgSrcCartera.src7,
        usemap:'#compromisos',
        'data-title':'compromisos'
    });
});
$('.captura_modal').click(function(){
    switch($(imgHolder).attr('alt')) {
        case '':
            $(imgHolder).attr({
                'src':imgSrcCartera.src8,
                'alt':'',
                'usemap':'#captura_modal'
            });
            break;
        case 'referidos_compromisos':
            $(imgHolder).attr({
                'src':imgSrcCartera.src15,
                'alt':'',
                'usemap':'#captura_modal'
            });
            break;
        case 'sinergia_pyme':
            $(imgHolder).attr({
                'src':imgSrcCartera.src17,
                'alt':'',
                'usemap':'#captura_modal'
            });
            break;
        default:
             $(imgHolder).attr({
                src:imgSrcCartera.src8,
                usemap:'#captura_modal',
                alt:''
    });
    }
});

//////////////////////////////    PREPARACION - RETRO / VISITA    //////////////////////////////
var retro            = $('.retro_preparacion_visita'),
    preparacionTab   = $('.preparacion_preparacion_visita'),
    cerrar           = $('.cerrar_preparacion_visita'),
    guardar          = $('.guardar_preparacion_visita')
    imprimir         = $('.imprimir_preparacion_visita'),
    buscar           = $('.buscar_preparacion_visita'),
    preparacionClose = $('.preparacion_visita_close');  //preparacion-retro

$('.preparacion_visita').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src9,
        usemap:'#preparacion_visita'
    });
});
$(preparacionTab).click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src9,
        usemap:'#preparacion_visita'
    });
});
$('.retro_visita').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src10,
        usemap:'#retro_visita',
        alt:'retro'
    });
});
$(retro).click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src10,
        usemap:'#retro_visita',
        alt:'retro'
    });
});
$('.guardarBtn_retro_visita').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src11,
        usemap:'#retro_visita_guardada',
        alt:'retro_visita_guardada'
    });
});

$(preparacionClose).click(function(){
//    $('body').css('height','100vh');
    if($(imgHolder).attr('data-title') == 'giro-cartera'){
        $(imgHolder).attr({
            src:imgSrcCartera.src3,
            usemap:'#giro_cartera',
            'data-title':'giro-cartera'
        })
    }else if($(imgHolder).attr('data-title') == 'compromisos'){
        $(imgHolder).attr({
            src:imgSrcCartera.src7,
            usemap:'#compromisos',
            'data-title':'compromisos'
        });
    }
    
});
$('.cerrarBtn_retro_visita,.cerrar_preparacion_visita,.iconClose_retro_guardada').click(function(){
//    $('body').css('height','100vh');
    $(imgHolder).attr({
        src:imgSrcCartera.src7,
        usemap:'#compromisos'
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////
$('.todos').click(function(){
    $('body').css('height','100vh');
    $(imgHolder).attr({
        src:imgSrcCartera.src7,
        usemap:'#compromisos'
    });
});
$('.prospectos').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src12,
        usemap:'#compromisos',
        alt:'prospectos'
    });
});
$('.comentarios').click(function(){
    if($(imgHolder).attr('data-comentarios')){
        $(imgHolder).attr({
            src:imgSrcCartera.src12,
            usemap:'#compromisos',
            alt:'prospectos',
            'data-comentarios':''
        });
    }else{
        $(imgHolder).attr({
            src:imgSrcCartera.comentarios,
            usemap:'#compromisos',
            alt:'prospectos',
            'data-comentarios':'on'
        });
    }
    
});
$('.referidos_compromisos').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src14,
        usemap:'#compromisos',
        alt:'referidos_compromisos'
    });
});


$('.sinergia_pyme').click(function(){
    $(imgHolder).attr({
        src:imgSrcCartera.src16,
        usemap:'#compromisos',
        alt:'sinergia_pyme'
    });
});
