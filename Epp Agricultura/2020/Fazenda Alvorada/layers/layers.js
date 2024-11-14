var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_P_1 = new ol.format.GeoJSON();
var features_P_1 = format_P_1.readFeatures(json_P_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_1.addFeatures(features_P_1);
var lyr_P_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P_1, 
                style: style_P_1,
                popuplayertitle: "P",
                interactive: false,
    title: 'P<br />\
    <img src="styles/legend/P_1_0.png" /> 21.2 - 36<br />\
    <img src="styles/legend/P_1_1.png" /> 36 - 42.1<br />\
    <img src="styles/legend/P_1_2.png" /> 42.1 - 47.6<br />\
    <img src="styles/legend/P_1_3.png" /> 47.6 - 54.3<br />\
    <img src="styles/legend/P_1_4.png" /> 54.3 - 78.6<br />'
        });
var format_pH_2 = new ol.format.GeoJSON();
var features_pH_2 = format_pH_2.readFeatures(json_pH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pH_2.addFeatures(features_pH_2);
var lyr_pH_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pH_2, 
                style: style_pH_2,
                popuplayertitle: "pH",
                interactive: false,
    title: 'pH<br />\
    <img src="styles/legend/pH_2_0.png" /> 5.474 - 5.539<br />\
    <img src="styles/legend/pH_2_1.png" /> 5.539 - 5.603<br />\
    <img src="styles/legend/pH_2_2.png" /> 5.603 - 5.668<br />\
    <img src="styles/legend/pH_2_3.png" /> 5.668 - 5.733<br />\
    <img src="styles/legend/pH_2_4.png" /> 5.733 - 5.798<br />'
        });
var format_V_3 = new ol.format.GeoJSON();
var features_V_3 = format_V_3.readFeatures(json_V_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V_3.addFeatures(features_V_3);
var lyr_V_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_V_3, 
                style: style_V_3,
                popuplayertitle: "V%",
                interactive: false,
    title: 'V%<br />\
    <img src="styles/legend/V_3_0.png" /> 55.1 - 60.4<br />\
    <img src="styles/legend/V_3_1.png" /> 60.4 - 62.3<br />\
    <img src="styles/legend/V_3_2.png" /> 62.3 - 63.6<br />\
    <img src="styles/legend/V_3_3.png" /> 63.6 - 66<br />\
    <img src="styles/legend/V_3_4.png" /> 66 - 74.2<br />'
        });
var format_MO_4 = new ol.format.GeoJSON();
var features_MO_4 = format_MO_4.readFeatures(json_MO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MO_4.addFeatures(features_MO_4);
var lyr_MO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MO_4, 
                style: style_MO_4,
                popuplayertitle: "MO",
                interactive: false,
    title: 'MO<br />\
    <img src="styles/legend/MO_4_0.png" /> 9.89 - 11.69<br />\
    <img src="styles/legend/MO_4_1.png" /> 11.69 - 12.23<br />\
    <img src="styles/legend/MO_4_2.png" /> 12.23 - 12.72<br />\
    <img src="styles/legend/MO_4_3.png" /> 12.72 - 14.01<br />\
    <img src="styles/legend/MO_4_4.png" /> 14.01 - 19.6<br />'
        });
var format_CTC_5 = new ol.format.GeoJSON();
var features_CTC_5 = format_CTC_5.readFeatures(json_CTC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CTC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CTC_5.addFeatures(features_CTC_5);
var lyr_CTC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CTC_5, 
                style: style_CTC_5,
                popuplayertitle: "CTC",
                interactive: false,
    title: 'CTC<br />\
    <img src="styles/legend/CTC_5_0.png" /> 4.03 - 4.5<br />\
    <img src="styles/legend/CTC_5_1.png" /> 4.5 - 4.81<br />\
    <img src="styles/legend/CTC_5_2.png" /> 4.81 - 5.19<br />\
    <img src="styles/legend/CTC_5_3.png" /> 5.19 - 5.75<br />\
    <img src="styles/legend/CTC_5_4.png" /> 5.75 - 7.35<br />'
        });
var format_K_6 = new ol.format.GeoJSON();
var features_K_6 = format_K_6.readFeatures(json_K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_6.addFeatures(features_K_6);
var lyr_K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K_6, 
                style: style_K_6,
                popuplayertitle: "K",
                interactive: false,
    title: 'K<br />\
    <img src="styles/legend/K_6_0.png" /> 0.129 - 0.177<br />\
    <img src="styles/legend/K_6_1.png" /> 0.177 - 0.2<br />\
    <img src="styles/legend/K_6_2.png" /> 0.2 - 0.223<br />\
    <img src="styles/legend/K_6_3.png" /> 0.223 - 0.245<br />\
    <img src="styles/legend/K_6_4.png" /> 0.245 - 0.35<br />'
        });
var format_Mg_7 = new ol.format.GeoJSON();
var features_Mg_7 = format_Mg_7.readFeatures(json_Mg_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mg_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mg_7.addFeatures(features_Mg_7);
var lyr_Mg_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mg_7, 
                style: style_Mg_7,
                popuplayertitle: "Mg",
                interactive: false,
    title: 'Mg<br />\
    <img src="styles/legend/Mg_7_0.png" /> 0.6 - 0.735<br />\
    <img src="styles/legend/Mg_7_1.png" /> 0.735 - 0.799<br />\
    <img src="styles/legend/Mg_7_2.png" /> 0.799 - 0.878<br />\
    <img src="styles/legend/Mg_7_3.png" /> 0.878 - 0.97<br />\
    <img src="styles/legend/Mg_7_4.png" /> 0.97 - 1.2<br />'
        });
var format_Ca_8 = new ol.format.GeoJSON();
var features_Ca_8 = format_Ca_8.readFeatures(json_Ca_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ca_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ca_8.addFeatures(features_Ca_8);
var lyr_Ca_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ca_8, 
                style: style_Ca_8,
                popuplayertitle: "Ca",
                interactive: false,
    title: 'Ca<br />\
    <img src="styles/legend/Ca_8_0.png" /> 1.5 - 1.8<br />\
    <img src="styles/legend/Ca_8_1.png" /> 1.8 - 2.01<br />\
    <img src="styles/legend/Ca_8_2.png" /> 2.01 - 2.32<br />\
    <img src="styles/legend/Ca_8_3.png" /> 2.32 - 2.59<br />\
    <img src="styles/legend/Ca_8_4.png" /> 2.59 - 3.39<br />'
        });
var format_Pontoscoletados2020_9 = new ol.format.GeoJSON();
var features_Pontoscoletados2020_9 = format_Pontoscoletados2020_9.readFeatures(json_Pontoscoletados2020_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontoscoletados2020_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontoscoletados2020_9.addFeatures(features_Pontoscoletados2020_9);
var lyr_Pontoscoletados2020_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pontoscoletados2020_9, 
                style: style_Pontoscoletados2020_9,
                popuplayertitle: "Pontos coletados 2020",
                interactive: false,
                title: '<img src="styles/legend/Pontoscoletados2020_9.png" /> Pontos coletados 2020'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_P_1.setVisible(true);lyr_pH_2.setVisible(true);lyr_V_3.setVisible(true);lyr_MO_4.setVisible(true);lyr_CTC_5.setVisible(true);lyr_K_6.setVisible(true);lyr_Mg_7.setVisible(true);lyr_Ca_8.setVisible(true);lyr_Pontoscoletados2020_9.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_P_1,lyr_pH_2,lyr_V_3,lyr_MO_4,lyr_CTC_5,lyr_K_6,lyr_Mg_7,lyr_Ca_8,lyr_Pontoscoletados2020_9];
lyr_P_1.set('fieldAliases', {'V___': 'V___', 'P1_SOLO_MG': 'P1_SOLO_MG', 'PH_SOLO__1': 'PH_SOLO__1', 'SOLO_MO_MG': 'SOLO_MO_MG', 'SOLO_MG_MG': 'SOLO_MG_MG', 'K_SOLO_MG_': 'K_SOLO_MG_', 'CEC_SOLO_M': 'CEC_SOLO_M', 'CA_SOLO_MG': 'CA_SOLO_MG', 'SOLO_CL_AL': 'SOLO_CL_AL', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CALCARIO': 'CALCARIO', 'KCL': 'KCL', 'STP': 'STP', 'MG_CTCPOS': 'MG_CTCPOS', 'AREA': 'AREA', 'TALHAO': 'TALHAO', 'V70': 'V70', 'KCL_MIN': 'KCL_MIN', 'P_45': 'P_45', 'P_50': 'P_50', 'P_40': 'P_40', 'K_PPM': 'K_PPM', 'KCL_PPM': 'KCL_PPM', 'P40_20': 'P40_20', 'calc800': 'calc800', });
lyr_pH_2.set('fieldAliases', {'V___': 'V___', 'P1_SOLO_MG': 'P1_SOLO_MG', 'PH_SOLO__1': 'PH_SOLO__1', 'SOLO_MO_MG': 'SOLO_MO_MG', 'SOLO_MG_MG': 'SOLO_MG_MG', 'K_SOLO_MG_': 'K_SOLO_MG_', 'CEC_SOLO_M': 'CEC_SOLO_M', 'CA_SOLO_MG': 'CA_SOLO_MG', 'SOLO_CL_AL': 'SOLO_CL_AL', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CALCARIO': 'CALCARIO', 'KCL': 'KCL', 'STP': 'STP', 'MG_CTCPOS': 'MG_CTCPOS', 'AREA': 'AREA', 'TALHAO': 'TALHAO', 'V70': 'V70', 'KCL_MIN': 'KCL_MIN', 'P_45': 'P_45', 'P_50': 'P_50', 'P_40': 'P_40', 'K_PPM': 'K_PPM', 'KCL_PPM': 'KCL_PPM', 'P40_20': 'P40_20', 'calc800': 'calc800', });
lyr_V_3.set('fieldAliases', {'V___': 'V___', 'P1_SOLO_MG': 'P1_SOLO_MG', 'PH_SOLO__1': 'PH_SOLO__1', 'SOLO_MO_MG': 'SOLO_MO_MG', 'SOLO_MG_MG': 'SOLO_MG_MG', 'K_SOLO_MG_': 'K_SOLO_MG_', 'CEC_SOLO_M': 'CEC_SOLO_M', 'CA_SOLO_MG': 'CA_SOLO_MG', 'SOLO_CL_AL': 'SOLO_CL_AL', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CALCARIO': 'CALCARIO', 'KCL': 'KCL', 'STP': 'STP', 'MG_CTCPOS': 'MG_CTCPOS', 'AREA': 'AREA', 'TALHAO': 'TALHAO', 'V70': 'V70', 'KCL_MIN': 'KCL_MIN', 'P_45': 'P_45', 'P_50': 'P_50', 'P_40': 'P_40', 'K_PPM': 'K_PPM', 'KCL_PPM': 'KCL_PPM', 'P40_20': 'P40_20', 'calc800': 'calc800', });
lyr_MO_4.set('fieldAliases', {'V___': 'V___', 'P1_SOLO_MG': 'P1_SOLO_MG', 'PH_SOLO__1': 'PH_SOLO__1', 'SOLO_MO_MG': 'SOLO_MO_MG', 'SOLO_MG_MG': 'SOLO_MG_MG', 'K_SOLO_MG_': 'K_SOLO_MG_', 'CEC_SOLO_M': 'CEC_SOLO_M', 'CA_SOLO_MG': 'CA_SOLO_MG', 'SOLO_CL_AL': 'SOLO_CL_AL', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CALCARIO': 'CALCARIO', 'KCL': 'KCL', 'STP': 'STP', 'MG_CTCPOS': 'MG_CTCPOS', 'AREA': 'AREA', 'TALHAO': 'TALHAO', 'V70': 'V70', 'KCL_MIN': 'KCL_MIN', 'P_45': 'P_45', 'P_50': 'P_50', 'P_40': 'P_40', 'K_PPM': 'K_PPM', 'KCL_PPM': 'KCL_PPM', 'P40_20': 'P40_20', 'calc800': 'calc800', });
lyr_CTC_5.set('fieldAliases', {'V___': 'V___', 'P1_SOLO_MG': 'P1_SOLO_MG', 'PH_SOLO__1': 'PH_SOLO__1', 'SOLO_MO_MG': 'SOLO_MO_MG', 'SOLO_MG_MG': 'SOLO_MG_MG', 'K_SOLO_MG_': 'K_SOLO_MG_', 'CEC_SOLO_M': 'CEC_SOLO_M', 'CA_SOLO_MG': 'CA_SOLO_MG', 'SOLO_CL_AL': 'SOLO_CL_AL', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CALCARIO': 'CALCARIO', 'KCL': 'KCL', 'STP': 'STP', 'MG_CTCPOS': 'MG_CTCPOS', 'AREA': 'AREA', 'TALHAO': 'TALHAO', 'V70': 'V70', 'KCL_MIN': 'KCL_MIN', 'P_45': 'P_45', 'P_50': 'P_50', 'P_40': 'P_40', 'K_PPM': 'K_PPM', 'KCL_PPM': 'KCL_PPM', 'P40_20': 'P40_20', 'calc800': 'calc800', });
lyr_K_6.set('fieldAliases', {'V___': 'V___', 'P1_SOLO_MG': 'P1_SOLO_MG', 'PH_SOLO__1': 'PH_SOLO__1', 'SOLO_MO_MG': 'SOLO_MO_MG', 'SOLO_MG_MG': 'SOLO_MG_MG', 'K_SOLO_MG_': 'K_SOLO_MG_', 'CEC_SOLO_M': 'CEC_SOLO_M', 'CA_SOLO_MG': 'CA_SOLO_MG', 'SOLO_CL_AL': 'SOLO_CL_AL', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CALCARIO': 'CALCARIO', 'KCL': 'KCL', 'STP': 'STP', 'MG_CTCPOS': 'MG_CTCPOS', 'AREA': 'AREA', 'TALHAO': 'TALHAO', 'V70': 'V70', 'KCL_MIN': 'KCL_MIN', 'P_45': 'P_45', 'P_50': 'P_50', 'P_40': 'P_40', 'K_PPM': 'K_PPM', 'KCL_PPM': 'KCL_PPM', 'P40_20': 'P40_20', 'calc800': 'calc800', });
lyr_Mg_7.set('fieldAliases', {'V___': 'V___', 'P1_SOLO_MG': 'P1_SOLO_MG', 'PH_SOLO__1': 'PH_SOLO__1', 'SOLO_MO_MG': 'SOLO_MO_MG', 'SOLO_MG_MG': 'SOLO_MG_MG', 'K_SOLO_MG_': 'K_SOLO_MG_', 'CEC_SOLO_M': 'CEC_SOLO_M', 'CA_SOLO_MG': 'CA_SOLO_MG', 'SOLO_CL_AL': 'SOLO_CL_AL', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CALCARIO': 'CALCARIO', 'KCL': 'KCL', 'STP': 'STP', 'MG_CTCPOS': 'MG_CTCPOS', 'AREA': 'AREA', 'TALHAO': 'TALHAO', 'V70': 'V70', 'KCL_MIN': 'KCL_MIN', 'P_45': 'P_45', 'P_50': 'P_50', 'P_40': 'P_40', 'K_PPM': 'K_PPM', 'KCL_PPM': 'KCL_PPM', 'P40_20': 'P40_20', 'calc800': 'calc800', });
lyr_Ca_8.set('fieldAliases', {'V___': 'V___', 'P1_SOLO_MG': 'P1_SOLO_MG', 'PH_SOLO__1': 'PH_SOLO__1', 'SOLO_MO_MG': 'SOLO_MO_MG', 'SOLO_MG_MG': 'SOLO_MG_MG', 'K_SOLO_MG_': 'K_SOLO_MG_', 'CEC_SOLO_M': 'CEC_SOLO_M', 'CA_SOLO_MG': 'CA_SOLO_MG', 'SOLO_CL_AL': 'SOLO_CL_AL', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CALCARIO': 'CALCARIO', 'KCL': 'KCL', 'STP': 'STP', 'MG_CTCPOS': 'MG_CTCPOS', 'AREA': 'AREA', 'TALHAO': 'TALHAO', 'V70': 'V70', 'KCL_MIN': 'KCL_MIN', 'P_45': 'P_45', 'P_50': 'P_50', 'P_40': 'P_40', 'K_PPM': 'K_PPM', 'KCL_PPM': 'KCL_PPM', 'P40_20': 'P40_20', 'calc800': 'calc800', });
lyr_Pontoscoletados2020_9.set('fieldAliases', {'ID_Amostra': 'ID_Amostra', 'id': 'id', });
lyr_P_1.set('fieldImages', {'V___': 'TextEdit', 'P1_SOLO_MG': 'TextEdit', 'PH_SOLO__1': 'TextEdit', 'SOLO_MO_MG': 'TextEdit', 'SOLO_MG_MG': 'TextEdit', 'K_SOLO_MG_': 'TextEdit', 'CEC_SOLO_M': 'TextEdit', 'CA_SOLO_MG': 'TextEdit', 'SOLO_CL_AL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'CALCARIO': 'TextEdit', 'KCL': 'TextEdit', 'STP': 'TextEdit', 'MG_CTCPOS': 'TextEdit', 'AREA': 'TextEdit', 'TALHAO': 'TextEdit', 'V70': 'TextEdit', 'KCL_MIN': 'TextEdit', 'P_45': 'TextEdit', 'P_50': 'TextEdit', 'P_40': 'TextEdit', 'K_PPM': 'TextEdit', 'KCL_PPM': 'TextEdit', 'P40_20': 'TextEdit', 'calc800': 'TextEdit', });
lyr_pH_2.set('fieldImages', {'V___': 'TextEdit', 'P1_SOLO_MG': 'TextEdit', 'PH_SOLO__1': 'TextEdit', 'SOLO_MO_MG': 'TextEdit', 'SOLO_MG_MG': 'TextEdit', 'K_SOLO_MG_': 'TextEdit', 'CEC_SOLO_M': 'TextEdit', 'CA_SOLO_MG': 'TextEdit', 'SOLO_CL_AL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'CALCARIO': 'TextEdit', 'KCL': 'TextEdit', 'STP': 'TextEdit', 'MG_CTCPOS': 'TextEdit', 'AREA': 'TextEdit', 'TALHAO': 'TextEdit', 'V70': 'TextEdit', 'KCL_MIN': 'TextEdit', 'P_45': 'TextEdit', 'P_50': 'TextEdit', 'P_40': 'TextEdit', 'K_PPM': 'TextEdit', 'KCL_PPM': 'TextEdit', 'P40_20': 'TextEdit', 'calc800': 'TextEdit', });
lyr_V_3.set('fieldImages', {'V___': 'TextEdit', 'P1_SOLO_MG': 'TextEdit', 'PH_SOLO__1': 'TextEdit', 'SOLO_MO_MG': 'TextEdit', 'SOLO_MG_MG': 'TextEdit', 'K_SOLO_MG_': 'TextEdit', 'CEC_SOLO_M': 'TextEdit', 'CA_SOLO_MG': 'TextEdit', 'SOLO_CL_AL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'CALCARIO': 'TextEdit', 'KCL': 'TextEdit', 'STP': 'TextEdit', 'MG_CTCPOS': 'TextEdit', 'AREA': 'TextEdit', 'TALHAO': 'TextEdit', 'V70': 'TextEdit', 'KCL_MIN': 'TextEdit', 'P_45': 'TextEdit', 'P_50': 'TextEdit', 'P_40': 'TextEdit', 'K_PPM': 'TextEdit', 'KCL_PPM': 'TextEdit', 'P40_20': 'TextEdit', 'calc800': 'TextEdit', });
lyr_MO_4.set('fieldImages', {'V___': 'TextEdit', 'P1_SOLO_MG': 'TextEdit', 'PH_SOLO__1': 'TextEdit', 'SOLO_MO_MG': 'TextEdit', 'SOLO_MG_MG': 'TextEdit', 'K_SOLO_MG_': 'TextEdit', 'CEC_SOLO_M': 'TextEdit', 'CA_SOLO_MG': 'TextEdit', 'SOLO_CL_AL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'CALCARIO': 'TextEdit', 'KCL': 'TextEdit', 'STP': 'TextEdit', 'MG_CTCPOS': 'TextEdit', 'AREA': 'TextEdit', 'TALHAO': 'TextEdit', 'V70': 'TextEdit', 'KCL_MIN': 'TextEdit', 'P_45': 'TextEdit', 'P_50': 'TextEdit', 'P_40': 'TextEdit', 'K_PPM': 'TextEdit', 'KCL_PPM': 'TextEdit', 'P40_20': 'TextEdit', 'calc800': 'TextEdit', });
lyr_CTC_5.set('fieldImages', {'V___': 'TextEdit', 'P1_SOLO_MG': 'TextEdit', 'PH_SOLO__1': 'TextEdit', 'SOLO_MO_MG': 'TextEdit', 'SOLO_MG_MG': 'TextEdit', 'K_SOLO_MG_': 'TextEdit', 'CEC_SOLO_M': 'TextEdit', 'CA_SOLO_MG': 'TextEdit', 'SOLO_CL_AL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'CALCARIO': 'TextEdit', 'KCL': 'TextEdit', 'STP': 'TextEdit', 'MG_CTCPOS': 'TextEdit', 'AREA': 'TextEdit', 'TALHAO': 'TextEdit', 'V70': 'TextEdit', 'KCL_MIN': 'TextEdit', 'P_45': 'TextEdit', 'P_50': 'TextEdit', 'P_40': 'TextEdit', 'K_PPM': 'TextEdit', 'KCL_PPM': 'TextEdit', 'P40_20': 'TextEdit', 'calc800': 'TextEdit', });
lyr_K_6.set('fieldImages', {'V___': 'TextEdit', 'P1_SOLO_MG': 'TextEdit', 'PH_SOLO__1': 'TextEdit', 'SOLO_MO_MG': 'TextEdit', 'SOLO_MG_MG': 'TextEdit', 'K_SOLO_MG_': 'TextEdit', 'CEC_SOLO_M': 'TextEdit', 'CA_SOLO_MG': 'TextEdit', 'SOLO_CL_AL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'CALCARIO': 'TextEdit', 'KCL': 'TextEdit', 'STP': 'TextEdit', 'MG_CTCPOS': 'TextEdit', 'AREA': 'TextEdit', 'TALHAO': 'TextEdit', 'V70': 'TextEdit', 'KCL_MIN': 'TextEdit', 'P_45': 'TextEdit', 'P_50': 'TextEdit', 'P_40': 'TextEdit', 'K_PPM': 'TextEdit', 'KCL_PPM': 'TextEdit', 'P40_20': 'TextEdit', 'calc800': 'TextEdit', });
lyr_Mg_7.set('fieldImages', {'V___': 'TextEdit', 'P1_SOLO_MG': 'TextEdit', 'PH_SOLO__1': 'TextEdit', 'SOLO_MO_MG': 'TextEdit', 'SOLO_MG_MG': 'TextEdit', 'K_SOLO_MG_': 'TextEdit', 'CEC_SOLO_M': 'TextEdit', 'CA_SOLO_MG': 'TextEdit', 'SOLO_CL_AL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'CALCARIO': 'TextEdit', 'KCL': 'TextEdit', 'STP': 'TextEdit', 'MG_CTCPOS': 'TextEdit', 'AREA': 'TextEdit', 'TALHAO': 'TextEdit', 'V70': 'TextEdit', 'KCL_MIN': 'TextEdit', 'P_45': 'TextEdit', 'P_50': 'TextEdit', 'P_40': 'TextEdit', 'K_PPM': 'TextEdit', 'KCL_PPM': 'TextEdit', 'P40_20': 'TextEdit', 'calc800': 'TextEdit', });
lyr_Ca_8.set('fieldImages', {'V___': 'TextEdit', 'P1_SOLO_MG': 'TextEdit', 'PH_SOLO__1': 'TextEdit', 'SOLO_MO_MG': 'TextEdit', 'SOLO_MG_MG': 'TextEdit', 'K_SOLO_MG_': 'TextEdit', 'CEC_SOLO_M': 'TextEdit', 'CA_SOLO_MG': 'TextEdit', 'SOLO_CL_AL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'CALCARIO': 'TextEdit', 'KCL': 'TextEdit', 'STP': 'TextEdit', 'MG_CTCPOS': 'TextEdit', 'AREA': 'TextEdit', 'TALHAO': 'TextEdit', 'V70': 'TextEdit', 'KCL_MIN': 'TextEdit', 'P_45': 'TextEdit', 'P_50': 'TextEdit', 'P_40': 'TextEdit', 'K_PPM': 'TextEdit', 'KCL_PPM': 'TextEdit', 'P40_20': 'TextEdit', 'calc800': 'TextEdit', });
lyr_Pontoscoletados2020_9.set('fieldImages', {'ID_Amostra': 'TextEdit', 'id': 'Range', });
lyr_P_1.set('fieldLabels', {'V___': 'no label', 'P1_SOLO_MG': 'no label', 'PH_SOLO__1': 'no label', 'SOLO_MO_MG': 'no label', 'SOLO_MG_MG': 'no label', 'K_SOLO_MG_': 'no label', 'CEC_SOLO_M': 'no label', 'CA_SOLO_MG': 'no label', 'SOLO_CL_AL': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CALCARIO': 'no label', 'KCL': 'no label', 'STP': 'no label', 'MG_CTCPOS': 'no label', 'AREA': 'no label', 'TALHAO': 'no label', 'V70': 'no label', 'KCL_MIN': 'no label', 'P_45': 'no label', 'P_50': 'no label', 'P_40': 'no label', 'K_PPM': 'no label', 'KCL_PPM': 'no label', 'P40_20': 'no label', 'calc800': 'no label', });
lyr_pH_2.set('fieldLabels', {'V___': 'no label', 'P1_SOLO_MG': 'no label', 'PH_SOLO__1': 'no label', 'SOLO_MO_MG': 'no label', 'SOLO_MG_MG': 'no label', 'K_SOLO_MG_': 'no label', 'CEC_SOLO_M': 'no label', 'CA_SOLO_MG': 'no label', 'SOLO_CL_AL': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CALCARIO': 'no label', 'KCL': 'no label', 'STP': 'no label', 'MG_CTCPOS': 'no label', 'AREA': 'no label', 'TALHAO': 'no label', 'V70': 'no label', 'KCL_MIN': 'no label', 'P_45': 'no label', 'P_50': 'no label', 'P_40': 'no label', 'K_PPM': 'no label', 'KCL_PPM': 'no label', 'P40_20': 'no label', 'calc800': 'no label', });
lyr_V_3.set('fieldLabels', {'V___': 'no label', 'P1_SOLO_MG': 'no label', 'PH_SOLO__1': 'no label', 'SOLO_MO_MG': 'no label', 'SOLO_MG_MG': 'no label', 'K_SOLO_MG_': 'no label', 'CEC_SOLO_M': 'no label', 'CA_SOLO_MG': 'no label', 'SOLO_CL_AL': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CALCARIO': 'no label', 'KCL': 'no label', 'STP': 'no label', 'MG_CTCPOS': 'no label', 'AREA': 'no label', 'TALHAO': 'no label', 'V70': 'no label', 'KCL_MIN': 'no label', 'P_45': 'no label', 'P_50': 'no label', 'P_40': 'no label', 'K_PPM': 'no label', 'KCL_PPM': 'no label', 'P40_20': 'no label', 'calc800': 'no label', });
lyr_MO_4.set('fieldLabels', {'V___': 'no label', 'P1_SOLO_MG': 'no label', 'PH_SOLO__1': 'no label', 'SOLO_MO_MG': 'no label', 'SOLO_MG_MG': 'no label', 'K_SOLO_MG_': 'no label', 'CEC_SOLO_M': 'no label', 'CA_SOLO_MG': 'no label', 'SOLO_CL_AL': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CALCARIO': 'no label', 'KCL': 'no label', 'STP': 'no label', 'MG_CTCPOS': 'no label', 'AREA': 'no label', 'TALHAO': 'no label', 'V70': 'no label', 'KCL_MIN': 'no label', 'P_45': 'no label', 'P_50': 'no label', 'P_40': 'no label', 'K_PPM': 'no label', 'KCL_PPM': 'no label', 'P40_20': 'no label', 'calc800': 'no label', });
lyr_CTC_5.set('fieldLabels', {'V___': 'no label', 'P1_SOLO_MG': 'no label', 'PH_SOLO__1': 'no label', 'SOLO_MO_MG': 'no label', 'SOLO_MG_MG': 'no label', 'K_SOLO_MG_': 'no label', 'CEC_SOLO_M': 'no label', 'CA_SOLO_MG': 'no label', 'SOLO_CL_AL': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CALCARIO': 'no label', 'KCL': 'no label', 'STP': 'no label', 'MG_CTCPOS': 'no label', 'AREA': 'no label', 'TALHAO': 'no label', 'V70': 'no label', 'KCL_MIN': 'no label', 'P_45': 'no label', 'P_50': 'no label', 'P_40': 'no label', 'K_PPM': 'no label', 'KCL_PPM': 'no label', 'P40_20': 'no label', 'calc800': 'no label', });
lyr_K_6.set('fieldLabels', {'V___': 'no label', 'P1_SOLO_MG': 'no label', 'PH_SOLO__1': 'no label', 'SOLO_MO_MG': 'no label', 'SOLO_MG_MG': 'no label', 'K_SOLO_MG_': 'no label', 'CEC_SOLO_M': 'no label', 'CA_SOLO_MG': 'no label', 'SOLO_CL_AL': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CALCARIO': 'no label', 'KCL': 'no label', 'STP': 'no label', 'MG_CTCPOS': 'no label', 'AREA': 'no label', 'TALHAO': 'no label', 'V70': 'no label', 'KCL_MIN': 'no label', 'P_45': 'no label', 'P_50': 'no label', 'P_40': 'no label', 'K_PPM': 'no label', 'KCL_PPM': 'no label', 'P40_20': 'no label', 'calc800': 'no label', });
lyr_Mg_7.set('fieldLabels', {'V___': 'no label', 'P1_SOLO_MG': 'no label', 'PH_SOLO__1': 'no label', 'SOLO_MO_MG': 'no label', 'SOLO_MG_MG': 'no label', 'K_SOLO_MG_': 'no label', 'CEC_SOLO_M': 'no label', 'CA_SOLO_MG': 'no label', 'SOLO_CL_AL': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CALCARIO': 'no label', 'KCL': 'no label', 'STP': 'no label', 'MG_CTCPOS': 'no label', 'AREA': 'no label', 'TALHAO': 'no label', 'V70': 'no label', 'KCL_MIN': 'no label', 'P_45': 'no label', 'P_50': 'no label', 'P_40': 'no label', 'K_PPM': 'no label', 'KCL_PPM': 'no label', 'P40_20': 'no label', 'calc800': 'no label', });
lyr_Ca_8.set('fieldLabels', {'V___': 'no label', 'P1_SOLO_MG': 'no label', 'PH_SOLO__1': 'no label', 'SOLO_MO_MG': 'no label', 'SOLO_MG_MG': 'no label', 'K_SOLO_MG_': 'no label', 'CEC_SOLO_M': 'no label', 'CA_SOLO_MG': 'no label', 'SOLO_CL_AL': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CALCARIO': 'no label', 'KCL': 'no label', 'STP': 'no label', 'MG_CTCPOS': 'no label', 'AREA': 'no label', 'TALHAO': 'no label', 'V70': 'no label', 'KCL_MIN': 'no label', 'P_45': 'no label', 'P_50': 'no label', 'P_40': 'no label', 'K_PPM': 'no label', 'KCL_PPM': 'no label', 'P40_20': 'no label', 'calc800': 'no label', });
lyr_Pontoscoletados2020_9.set('fieldLabels', {'ID_Amostra': 'no label', 'id': 'no label', });
lyr_Pontoscoletados2020_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});