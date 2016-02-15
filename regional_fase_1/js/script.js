var flag = $('.flag');
var img = $('#img');


$('#switch').click(function () {
    if ($(img).attr('alt')) {
        $(img).attr({
            src: 'img/2_acciones_comerciales_home.png',
            usemap: '#acciones_comerciales_home',
            alt: ''
        });
    } else {
        $(img).attr({
            src: 'img/3_acciones_comerciales_home_switch_on.png',
            usemap: '#acciones_comerciales_home',
            alt: 'switch_on'
        });
    }
});
$('#home').click(function () {
    window.location.href = 'index.html';
});

$('#alertas_oportunidades').click(function () {
    $(img).attr({
        src: 'img/4_acciones_comerciales_alertas.png',
        usemap: '#alertas_oportunidades',
        'data-title': 'acciones_uno'
    });
});




$('.regiones_acciones_comerciales').click(function () {
    $(img).attr({
        src: 'img/4a_acciones_comerciales_alertas.png',
        usemap: '#plaza_yaqui',
        'data-title': 'acciones_dos'
    });
});
//$('#alertas_oportunidades_plaza_yaqui').click(function(){
//     $(img).attr({
//        src:'img/5_acciones_comerciales_alertas_1.png',
//        usemap:'#plaza_yaqui'
//    })
//});

$('#plaza_yaqui_2').click(function () {
    $(img).attr({
        src: 'img/6_acciones_comerciales_alertas_2.png',
        usemap: '#plaza_yaqui_2',
        'data-title': 'acciones_tres'
    });
});
$('#ofertas_campañas').click(function () {
    $(img).attr({
        src: 'img/7_acciones_comerciales_ofertas.png',
        usemap: '#ofertas_campañas',
        'data-title': 'ofertas_uno'
    });
});

$('.plaza_yaqui_detalle').click(function () {
    $(img).attr({
        src: 'img/detalle_ofertas_campanas.png',
        usemap: '#ofertas_campañas_detalle_suc',
        'data-title': 'ofertas_tres'
    });
});


$('.alertas_oportunidadesTab').click(function () {
    $(img).attr({
        src: 'img/4_acciones_comerciales_alertas.png',
        usemap: '#alertas_oportunidades'
    });
});


$('.regiones_ofertas_campañas').click(function () {
    $(img).attr({
        src: 'img/7a_acciones_comerciales_ofertas.png',
        usemap: '#plaza_yaqui_2',
        'data-title': 'ofertas_dos'
    });
});
//$('#ofertas_plaza_yaqui').click(function(){
//    $(img).attr({
//        src:'img/8_acciones_comerciales_ofertas_1.png',
//        usemap:'#ofertas_campañas'
//    })
//});
$('.exportar').click(function () {
    $(img).attr({
        src: 'img/10_modal_acciones_comerciales_ofertas.png',
        usemap: '#modal_acciones'
    })
});


// ------------------ MODAL ACCIONES ----------------------------
$('#top,#left,#right,#bottom,#right1,#right2').click(function () {
    $(img).attr({
        src: 'img/8_acciones_comerciales_ofertas_1.png',
        usemap: '#ofertas_campañas'
    });
});
// --------------------------------------------------------------
// ------------------ MODAL SINERGIA ----------------------------
$('#top_modal_sinergia,#left_modal_sinergia,#right_modal_sinergia,#bottom_modal_sinergia,#right1_modal_sinergia,#right2_modal_sinergia').click(function () {
    $(img).attr({
        src: 'img/13_sinergia_colectivos_sinergia.png',
        usemap: '#menu'
    });
});
// --------------------------------------------------------------
// ------------------SINERGIA----------------------------
$('.sinergia_sinergia').click(function () {
    $(img).attr({
        src: 'img/13_sinergia_colectivos_sinergia.png',
        usemap: '#menu'
    });
});
$('#sinergia_colectivos_1').click(function () {
    $(img).attr({
        src: 'img/11_sinergia_colectivos_1.png',
        usemap: '#sinergia_colectivos'
    });
});
$('#colectivos').click(function () {
    $(img).attr({
        src: 'img/11_sinergia_colectivos_1.png',
        usemap: '#sinergia_colectivos',
        'data-title': 'colectivos_uno'
    });
});
$('#colectivos_plaza_yaqui').click(function () {
    $(img).attr({
        src: 'img/12_sinergia_colectivos_2.png',
        usemap: '#menu',
        'data-title': 'colectivos_dos'
    });
});


$('.plaza_yaqui_detalle_colectivos').click(function () {
    $(img).attr({
        src: 'img/detalle_colectivos.png',
        usemap: '#detalle_suc_colectivos',
        'data-title': 'colectivos_tres'
    });
});
$('.sinergiaTab_colectivos').click(function () {
    $(img).attr({
        src: 'img/13_sinergia_colectivos_sinergia.png',
        usemap: '#menu'
    });
});

$('#seguimiento_sinergia').click(function () {
    $(img).attr({
        src: 'img/13_sinergia_colectivos_sinergia.png',
        usemap: '#menu',
        'data-title': 'seguimiento_uno'
    });
});
$('.exportar_sinergia').click(function () {
    $(img).attr({
        src: 'img/14_modal_sinergia_colectivos.png',
        usemap: '#modal_sinergia'
    })
});
$('#todos').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_home.png',
        usemap: '#sinergia'
    })
})
$('#sinergia').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_sinergia.png',
        usemap: '#sinergia'
    })
})
$('#referidos').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_referidos.png',
        usemap: '#sinergia'
    })
})
$('#prospectos').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_prospectos.png',
        usemap: '#sinergia'
    })
})
$('#input_todos').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_home.png',
        usemap: '#sinergia'
    })
})
$('#input_captura').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_captura.png',
        usemap: '#sinergia'
    })
})
$('#input_visita').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_visita.png',
        usemap: '#sinergia'
    })
})
$('#input_compromiso').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_compromiso.png',
        usemap: '#sinergia'
    })
})
$('#input_cierre').click(function () {
    $(img).attr({
        src: 'img/sinergia_colectivos_cierre.png',
        usemap: '#sinergia'
    })
})

//----------------------------------------------------------------------

////////////////////////// REGRESAR ////////////////////////////
var acciones_regresar = $('.acciones_regresar'),
    sistematica_regresar = $('.sistematica_regresar'),
    sinergia_regresar = $('.sinergia_regresar');


$(acciones_regresar).click(function () {
    switch ($(img).attr('data-title')) {
    case 'acciones_uno':
    case 'ofertas_uno':
        $(img).attr({
            src: 'img/2_acciones_comerciales_home.png',
            usemap: '#acciones_comerciales_home',
            'data-title': 'acciones_home'
        });
        break;
    case 'acciones_dos':
        $(img).attr({
            src: 'img/4_acciones_comerciales_alertas.png',
            usemap: '#alertas_oportunidades',
            'data-title': 'acciones_uno'
        });
        break;
    case 'acciones_tres':
        $(img).attr({
            src: 'img/4a_acciones_comerciales_alertas.png',
            usemap: '#plaza_yaqui',
            'data-title': 'acciones_dos'
        });
        break;
    case 'ofertas_dos':
        $(img).attr({
            src: 'img/7_acciones_comerciales_ofertas.png',
            usemap: '#ofertas_campañas',
            'data-title': 'ofertas_uno'
        });
        break;
    case 'ofertas_tres':
        $(img).attr({
            src: 'img/7a_acciones_comerciales_ofertas.png',
            usemap: '#plaza_yaqui_2',
            'data-title': 'ofertas_dos'
        });
    }
});
$(sinergia_regresar).click(function () {
    switch ($(img).attr('data-title')) {
    case 'colectivos_uno':
    case 'seguimiento_uno':
        $(img).attr({
            src: 'img/sinergia_colectivos_home.png',
            usemap: '#sinergia',
            'data-title': 'sinergia_home'
        });
        break;
    case 'colectivos_dos':
        $(img).attr({
            src: 'img/11_sinergia_colectivos_1.png',
            usemap: '#sinergia_colectivos',
            'data-title': 'colectivos_uno'
        });
        break;
    case 'colectivos_tres':
        $(img).attr({
            src: 'img/12_sinergia_colectivos_2.png',
            usemap: '#menu',
            'data-title': 'colectivos_dos'
        });
        break;


    }
});