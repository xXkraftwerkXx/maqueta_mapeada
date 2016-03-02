var img = $('#img');
$('.home').click(function () {
    window.location.href = 'index.html';
})

$('.switch').click(function () {
    if ($(img).attr('alt')) {
        $(img).attr({
            src: 'img/3_acciones_comerciales_home.png',
            usemap: '#map',
            alt: ''
        });
    } else {
        $(img).attr({
            src: 'img/5_acciones_comerciales_home_switch_on.png',
            usemap: '#map',
            alt: 'switch_on'
        });
    }
});

/////////////// AGENDA ZONAL CITAS ////////////////////////

$('.agenda_zonal_citas').hover(function(){
    if(!$(img).attr('data-cita')){
        $(img).attr({
            src: 'img/0_zonal_drop-barra-agenda.png',
            usemap: '#map',
            'data-cita':'on'
        });
    }else{
        $(img).attr({
            src: 'img/1_zonal_home.png',
            usemap: '#map',
            'data-cita':''
        });
    }
});


///////////////////////////////////////////////////////////

/////////////// BOTTON EXPORTAR ////////////////////////

$('.exportar_btn').click(function(){
    $(img).attr({
        src:'img/1_zonal_exportar.png',
        usemap:'#exportar'
    });
});
$('.salir_exportar').click(function(){
    $(img).attr({
        src:'img/7_acciones_comerciales_alertas_.png',
        usemap:'#alertas'
    });
});
$('.exportar_btn_confirma').click(function(){
    $(img).attr({
        src:'img/1_zonal_exportar_excel.png',
        usemap:'#exportar_excel'
    });
});
$('.salir_exportar_xls').click(function(){
    $(img).attr({
        src:'img/7_acciones_comerciales_alertas_.png',
        usemap:'#alertas'
    });
});

///////////////////////////////////////////////////////////


/////////////// BOTTON IMPRIMIR ////////////////////////

$('.imprimir_btn').click(function(){
    if(!$(img).attr('data-imprimir')){
        $(img).attr({
            src:'img/1_zonal_imprimir.png',
            usemap:'#imprimir',
            'data-imprimir':'on'
        });
    }else{
        $(img).attr({
            src:'img/1_zonal_home.png',
            usemap:'#map',
            'data-imprimir':''
        });
    }
});

$('.salir_imprimir').click(function(){
    $(img).attr({
        src:'img/1_zonal_home.png',
        usemap:'#map'
    });
});
///////////////////////////////////////////////////////////
$('.exportar_colectivos,.exportar_seguimiento_sinergia').click(function () {
    $(img).attr({
        src: 'img/modal_sinergia.png',
        usemap: '#modal_sinergia'
    });
});
$('.modal_sinergia_exit').click(function () {
    $(img).attr({
        src: 'img/24_sinergia_colectivos_home_colectivos.png',
        usemap: '#seguimiento_sinergia_colectivos'
    });
})
$('#modal-left,#modal-right,#modal-bottom,#modal-top').click(function () {
    $(img).attr({
        src: 'img/3_acciones_comerciales_home.png',
        usemap: '#map'

    });
});

$('#alertas_oportunidades').click(function () {
    $(img).attr({
        src: 'img/7_acciones_comerciales_alertas_.png',
        usemap: '#alertas',
        'data-title': 'alertas_uno'
    });
});
$('#alertas_plaza_yaqui').click(function () {
    $(img).attr({
        src: 'img/9_acciones_comerciales_alertas_detalle_suc.png',
        usemap: '#alertas_detalle_suc',
        'data-title': 'alertas_dos'
    });
});

$('#ofertas_campañas').click(function () {
    $(img).attr({
        src: 'img/11_acciones_comerciales_ofertas.png',
        usemap: '#ofertas',
        'data-title': 'ofertas_uno'
    });
});
$('#ofertas_plaza_yaqui').click(function () {
    $(img).attr({
        src: 'img/13_acciones_comerciales_ofertas_detalle_suc.png',
        usemap: '#ofertas_detalle_suc',
        'data-title': 'ofertas_dos'
    });
});

$('#sinergia_home_sinergia').click(function () {
    $(img).attr({
        src: 'img/17_sinergia_colectivos_home_sinergia.png',
        usemap: '#sinergia_home'
    })
});
$('#sinergia_home_referidos').click(function () {
    $(img).attr({
        src: 'img/18_sinergia_colectivos_home_referidos.png',
        usemap: '#sinergia_home'
    })
});
$('#sinergia_home_prospectos').click(function () {
    $(img).attr({
        src: 'img/19_sinergia_colectivos_home_prospectos.png',
        usemap: '#sinergia_home'
    })
});
$('#sinergia_home_captura').click(function () {
    $(img).attr({
        src: 'img/20_sinergia_colectivos_home_captura.png',
        usemap: '#sinergia_home'
    })
});
$('#sinergia_home_visita').click(function () {
    $(img).attr({
        src: 'img/21_sinergia_colectivos_home_visita.png',
        usemap: '#sinergia_home'
    })
});
$('#sinergia_home_compromiso').click(function () {
    $(img).attr({
        src: 'img/22_sinergia_colectivos_home_compromiso.png',
        usemap: '#sinergia_home'
    })
});
$('#sinergia_home_cierre').click(function () {
    $(img).attr({
        src: 'img/23_sinergia_colectivos_home_cierre.png',
        usemap: '#sinergia_home'
    })
});
$('#sinergia_home_todos').click(function () {
    $(img).attr({
        src: 'img/16_sinergia_colectivos_home_todos.png',
        usemap: '#sinergia_home'
    })
});
$('#sinergia_home_todos_2').click(function () {
    $(img).attr({
        src: 'img/16_sinergia_colectivos_home_todos.png',
        usemap: '#sinergia_home'
    })
});
$('#colectivos').click(function () {
    $(img).attr({
        src: 'img/24_sinergia_colectivos_home_colectivos.png',
        usemap: '#seguimiento_sinergia_colectivos',
        'data-title': 'colectivos_uno'
    });
});
$('#plaza_yaqui_colectivos').click(function () {
    $(img).attr({
        src: 'img/25_sinergia_colectivos_colectivos_sucursal.png',
        usemap: '#colectivos_detalle_sucursal',
        'data-title': 'colectivos_dos'
    });
});
$('#seguimiento_sinergia').click(function () {
    $(img).attr({
        src: 'img/26_sinergia_colectivos_home_seguimiento_sinergia.png',
        usemap: '#seguimiento_sinergia_sinergia',
        'data-title': 'seguimiento_uno'
    });
});


//////////////// REGRESAR ///////////////////

var acciones_regresar = $('.acciones_regresar'),
    sistematica_regresar = $('.sistematica_regresar'),
    sinergia_regresar = $('.sinergia_regresar');

$(acciones_regresar).click(function () {
    switch ($(img).attr('data-title')) {
    case 'alertas_uno':
        $(img).attr({
            src: 'img/3_acciones_comerciales_home.png',
            usemap: '#map',
            'data-title': 'acciones_home'
        });
        break;
    case 'alertas_dos':
        $(img).attr({
            src: 'img/7_acciones_comerciales_alertas_.png',
            usemap: '#alertas',
            'data-title': 'alertas_uno'
        });
        break;
    case 'ofertas_uno':
        $(img).attr({
            src: 'img/3_acciones_comerciales_home.png',
            usemap: '#map',
            'data-title': 'acciones_home'
        });
        break;
    case 'ofertas_dos':
        $(img).attr({
            src: 'img/11_acciones_comerciales_ofertas.png',
            usemap: '#ofertas',
            'data-title': 'ofertas_uno'
        });
        break;
    default:
    }
});
$(sinergia_regresar).click(function () {
    switch ($(img).attr('data-title')) {
    case 'colectivos_uno':
        $(img).attr({
            src: 'img/16_sinergia_colectivos_home_todos.png',
            usemap: '#sinergia_home',
            'data-title': 'sinergia_home'
        });
        break;
    case 'colectivos_dos':
        $(img).attr({
            src: 'img/24_sinergia_colectivos_home_colectivos.png',
            usemap: '#seguimiento_sinergia_colectivos',
            'data-title': 'colectivos_uno'
        });
        break;
    case 'seguimiento_uno':
        $(img).attr({
            src: 'img/16_sinergia_colectivos_home_todos.png',
            usemap: '#sinergia_home',
            'data-title': 'sinergia_home'
        });
        break;
    default:

    }
});