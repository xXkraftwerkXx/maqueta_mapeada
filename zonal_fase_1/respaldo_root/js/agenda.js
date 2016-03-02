var srcImg_fase1 = {
    src1: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_19_VERSION_2_Recuperado.png",
    src2: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_1_VERSION_2_Recuperado.png",
    src3: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_2_VERSION_2_Recuperado.png",
    src4: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_3_VERSION_2_Recuperado.png",
    src5: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_4_VERSION_2_Recuperado.png",
    src6: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_5_VERSION_2_Recuperado.png",
    src7: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_6_VERSION_2_Recuperado.png",
    src8: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_7_VERSION_2_Recuperado.png",
    src9: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_8_VERSION_2_Recuperado.png",
    src10: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_9_VERSION_2_Recuperado.png",
    src11: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_10_VERSION_2_Recuperado.png",
    src12: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_11_VERSION_2_Recuperado.png",
    src13: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_12_VERSION_2_Recuperado.png",
    src14: "img/agenda_zonal/fase_1/semana/Zonal_avance-de-metas_calendario_pag_13_VERSION_2_Recuperado.png",
    src15: ""
};
var srcImg_fase2 = {
    src1: "",
    src2: "",
    src3: "",
    src4: "",
    src5: "",
    src6: "",
    src7: "",
    src8: "",
    src9: "",
    src10: "",
    src11: "",
    src12: "",
    src13: "",
    src14: "",
    src15: "",
    src16: "",
    src17: "",
    src18: "",
    src19: ""
};
var srcImg_fase1_mes = {
    src1: "img/agenda_zonal/fase_1/mes/Zonal_agenda_mes_con_contenido.png",
    src2: "img/agenda_zonal/fase_1/mes/Zonal_agenda_mes_sin_contenido.png"
};
var srcImg_fase2_mes = {},
    body = $('body'),
    bodyHeight = body.height(),
    vistaSemana = $('.vista_semana'),
    vistaMes = $('.vista_mes'),
    closeAgenda = $('.trigger_close_agenda'),
    agendaTrigger = $('.agenda_trigger'),
    agendaAsigna = $('.agenda_asignar'),
    btnNext = $('.btn_next'),
    agendaHolder = $('<img>').attr({
        'src': srcImg_fase1.src1,
        'usemap': '#agendar_semana',
        'class': 'agenda'

    });

function crearAgenda() {
    $(body).height(1910);
    $('.img-holder').append($(agendaHolder).css('margin-top', '-54px'));
}

function eliminarAgenda() {
    $(body).height(bodyHeight);
    $('.agenda').remove();
}

function scrollDown() {
    $(body).animate({
        scrollTop: 849
    }, 1000);
}

function scrollUp() {
    $(body).animate({
        scrollTop: 0
    }, 1000);
}
$(agendaTrigger).click(function () {
    scrollDown();
    if ($(body).height() > 1900) {

    } else {
        crearAgenda();
    }
});
// Vista Mes/Semana
$(vistaMes).click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1_mes.src1,
            usemap: '#mes_src1'
        });
    } else {
        crearAgenda();
    }
});
$(vistaSemana).click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src1,
            usemap: '#agendar_semana'
        });
    } else {
        crearAgenda();
    }
});


// click en signo de +
$(agendaAsigna).click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src2,
            usemap: '#src2'
        });
    } else {
        crearAgenda();
    }
});
//Agenda close trigger

$(closeAgenda).click(function () {
    if ($(body).height() > 1900) {
        $(body).animate({
            scrollTop: 0
        }, 1000, function () {
            $('.agenda').remove();
            $(body).height(bodyHeight);
        });
    }
});

// Pantalla 1
$(btnNext).click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src3,
            usemap: '#src3'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src1,
        usemap: '#agendar_semana'
    });
});

// Pantalla 2
$('.btn_siguiente_src3').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src4,
            usemap: '#src4'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src3').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src2,
        usemap: '#src2'
    });
});

// Pantalla 3
$('.btn_siguiente_src4').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src5,
            usemap: '#src5'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src4').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src3,
        usemap: '#src3'
    });
});
// Pantalla 4
$('.btn_siguiente_src5').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src6,
            usemap: '#src6'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src5').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src4,
        usemap: '#src4'
    });
});

// Pantalla 5
$('.btn_siguiente_src6').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src7,
            usemap: '#src7'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src6').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src5,
        usemap: '#src5'
    });
});

// Pantalla 6
$('.btn_siguiente_src7').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src8,
            usemap: '#src8'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src7').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src6,
        usemap: '#src6'
    });
});

// Pantalla 7
$('.btn_siguiente_src8').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src9,
            usemap: '#src9'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src8').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src7,
        usemap: '#src7'
    });
});

// Pantalla 8
$('.btn_siguiente_src9').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src10,
            usemap: '#src10'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src9').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src8,
        usemap: '#src8'
    });
});

// Pantalla 9
$('.btn_siguiente_src10,.btn_si_src10').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src11,
            usemap: '#src11'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src10,.btn_no_src10').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src9,
        usemap: '#src9'
    });
});
// Pantalla 10
$('.btn_siguiente_src11').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src12,
            usemap: '#src12'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src11').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src10,
        usemap: '#src10'
    });
});

// Pantalla 11
$('.btn_siguiente_src12').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src13,
            usemap: '#src13'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src12').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src11,
        usemap: '#src11'
    });
});

// Pantalla 12
$('.btn_siguiente_src13').click(function () {
    if ($(body).height() > 1900) {
        scrollDown();
        $(agendaHolder).attr({
            src: srcImg_fase1.src14,
            usemap: '#src14'
        });
    } else {
        crearAgenda();
    }
});
$('.btn_regresar_src13').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src12,
        usemap: '#src12'
    });
});

// Pantalla 13

//$('.btn_siguiente_src14').click(function(){
//    if($(body).height() > 1900){
//        scrollDown();
//        $(agendaHolder).attr({src:srcImg_fase1.src15,usemap:'#src15'});
//    }else{
//      crearAgenda();  
//    }
//});
$('.btn_regresar_src14').click(function () {
    $(agendaHolder).attr({
        src: srcImg_fase1.src13,
        usemap: '#src13'
    });
});