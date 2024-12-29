var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteUAT_2 = new ol.format.GeoJSON();
var features_LimiteUAT_2 = format_LimiteUAT_2.readFeatures(json_LimiteUAT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteUAT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteUAT_2.addFeatures(features_LimiteUAT_2);
var lyr_LimiteUAT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteUAT_2, 
                style: style_LimiteUAT_2,
                popuplayertitle: 'Limite UAT',
                interactive: true,
                title: '<img src="styles/legend/LimiteUAT_2.png" /> Limite UAT'
            });
var format_cursuri_apa_PH_3 = new ol.format.GeoJSON();
var features_cursuri_apa_PH_3 = format_cursuri_apa_PH_3.readFeatures(json_cursuri_apa_PH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cursuri_apa_PH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cursuri_apa_PH_3.addFeatures(features_cursuri_apa_PH_3);
var lyr_cursuri_apa_PH_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cursuri_apa_PH_3, 
                style: style_cursuri_apa_PH_3,
                popuplayertitle: 'cursuri_apa_PH',
                interactive: true,
                title: '<img src="styles/legend/cursuri_apa_PH_3.png" /> cursuri_apa_PH'
            });
var format_eterra_4 = new ol.format.GeoJSON();
var features_eterra_4 = format_eterra_4.readFeatures(json_eterra_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eterra_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eterra_4.addFeatures(features_eterra_4);
var lyr_eterra_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eterra_4, 
                style: style_eterra_4,
                popuplayertitle: 'eterra',
                interactive: true,
                title: 'eterra'
            });
var format_DrumuriJudetene_5 = new ol.format.GeoJSON();
var features_DrumuriJudetene_5 = format_DrumuriJudetene_5.readFeatures(json_DrumuriJudetene_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrumuriJudetene_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrumuriJudetene_5.addFeatures(features_DrumuriJudetene_5);
var lyr_DrumuriJudetene_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrumuriJudetene_5, 
                style: style_DrumuriJudetene_5,
                popuplayertitle: 'Drumuri Judetene',
                interactive: true,
                title: '<img src="styles/legend/DrumuriJudetene_5.png" /> Drumuri Judetene'
            });
var format_TipImbracaminte_6 = new ol.format.GeoJSON();
var features_TipImbracaminte_6 = format_TipImbracaminte_6.readFeatures(json_TipImbracaminte_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipImbracaminte_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipImbracaminte_6.addFeatures(features_TipImbracaminte_6);
var lyr_TipImbracaminte_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipImbracaminte_6, 
                style: style_TipImbracaminte_6,
                popuplayertitle: 'Tip Imbracaminte',
                interactive: true,
    title: 'Tip Imbracaminte<br />\
    <img src="styles/legend/TipImbracaminte_6_0.png" /> Asfalt<br />\
    <img src="styles/legend/TipImbracaminte_6_1.png" /> Asfalt tip beton<br />\
    <img src="styles/legend/TipImbracaminte_6_2.png" /> Beton, ciment<br />\
    <img src="styles/legend/TipImbracaminte_6_3.png" /> Împietruit<br />\
    <img src="styles/legend/TipImbracaminte_6_4.png" /> Pământ<br />\
    <img src="styles/legend/TipImbracaminte_6_5.png" /> <br />'
        });
var group_INTABULARI = new ol.layer.Group({
                                layers: [lyr_eterra_4,],
                                fold: "open",
                                title: 'INTABULARI'});
var group_ape = new ol.layer.Group({
                                layers: [lyr_cursuri_apa_PH_3,],
                                fold: "open",
                                title: 'ape'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_LimiteUAT_2.setVisible(true);lyr_cursuri_apa_PH_3.setVisible(true);lyr_eterra_4.setVisible(true);lyr_DrumuriJudetene_5.setVisible(true);lyr_TipImbracaminte_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_LimiteUAT_2,group_ape,group_INTABULARI,lyr_DrumuriJudetene_5,lyr_TipImbracaminte_6];
lyr_LimiteUAT_2.set('fieldAliases', {'fid': 'fid', 'ADMIN_UNIT': 'ADMIN_UNIT', 'NAME': 'NAME', 'AREA_VALUE': 'AREA_VALUE', 'nr_crt': 'nr_crt', 'tip_localitate': 'tip_localitate', 'Populatie_2021': 'Populatie_2021', });
lyr_cursuri_apa_PH_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID', 'Denumire': 'Denumire', 'DenumireAl': 'DenumireAl', 'Denumire_1': 'Denumire_1', 'Ordin': 'Ordin', 'Bazin': 'Bazin', 'CodConfCad': 'CodConfCad', 'Canal': 'Canal', });
lyr_eterra_4.set('fieldAliases', {'fid': 'fid', 'LABEL': 'LABEL', 'Nr_cad': 'Nr. cadastral', 'Indicativ_DJ': 'Indicativ DJ', 'UAT': 'UAT', 'Proprietar': 'Proprietar', 'Administrator': 'Administrator', 'Sarcini': 'Sarcini', 'Obs': 'Observații', 'km_inceput': 'km început', 'km_final': 'km final', 'extras': 'Extras CF', 'denumire_CF': 'Denumire în CF', 'km_inc_CF': 'km început CF', 'km_fin_CF': 'km final CF', 'Categ_fol': 'Categorie de folosință', });
lyr_DrumuriJudetene_5.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'Categorie': 'Categorie drum', 'Numar': 'Indicativ drum', 'km_început': 'Km început', 'km_final': 'Km final', 'Nr.crt': 'Nr. crt.', 'Localități': 'Localități traversate', 'Traseu HG': 'Traseu HG 540/2000', 'KM HG': 'Lungime HG 540/2000', 'lungime_viabilitate': 'Lungime viabilitate', 'LUN': 'Lungime [m]', 'Observatii': 'Observații', 'Modificat': 'Modificare', 'HCJ_modificare': 'HCJ modificare', 'Carte_scanata': 'Carte_scanata', 'Indicativ_vechi': 'Indicativ_vechi', 'm_from': 'm_from', 'm_to': 'm_to', });
lyr_TipImbracaminte_6.set('fieldAliases', {'fid': 'fid', 'Viabilitate': 'Viabilitate', 'Categorie': 'Categorie', 'Numar': 'Numar', 'Lungime_tronson': 'Lungime tronson', 'Imbracaminte': 'Tip îmbrăcăminte', 'Sector 2 benzi - km inceput': 'de la km', 'Sector 2 benzi - km final': 'la km', 'Sector 3 benzi - km inceput': 'de la km (2)', 'Sector 3 benzi - km final': 'la km (2)', 'Sector 4 benzi - km inceput': 'de la km (3)', 'Sector 4 benzi - km final': 'la km (3)', 'Declivitate - km inceput': 'de la km (4)', 'Declivitate - km final': 'la km (4)', 'Raze - km inceput': 'de la km (5)', 'Raze - km final': 'la km (5)', 'Tip restrictie': 'Tip restricție', 'Restrictie - km inceput': 'de la km (6)', 'Restrictie - km final': 'la km (6)', 'Valoare restrictie': 'Valoare restricție', 'km inceput': 'de la km (7)', 'km final': 'la km (7)', 'Nr tronson': 'Nr. tronson', 'Localitati': 'Localitati', });
lyr_LimiteUAT_2.set('fieldImages', {'fid': 'TextEdit', 'ADMIN_UNIT': 'TextEdit', 'NAME': 'TextEdit', 'AREA_VALUE': 'TextEdit', 'nr_crt': 'Range', 'tip_localitate': 'TextEdit', 'Populatie_2021': 'Range', });
lyr_cursuri_apa_PH_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'Denumire': 'TextEdit', 'DenumireAl': '', 'Denumire_1': '', 'Ordin': 'Range', 'Bazin': 'TextEdit', 'CodConfCad': '', 'Canal': 'Range', });
lyr_eterra_4.set('fieldImages', {'fid': 'TextEdit', 'LABEL': 'TextEdit', 'Nr_cad': 'Range', 'Indicativ_DJ': 'TextEdit', 'UAT': 'ValueRelation', 'Proprietar': 'ValueRelation', 'Administrator': 'ValueRelation', 'Sarcini': 'TextEdit', 'Obs': 'TextEdit', 'km_inceput': 'TextEdit', 'km_final': 'TextEdit', 'extras': 'ExternalResource', 'denumire_CF': 'TextEdit', 'km_inc_CF': 'TextEdit', 'km_fin_CF': 'TextEdit', 'Categ_fol': 'ValueRelation', });
lyr_DrumuriJudetene_5.set('fieldImages', {'fid': 'TextEdit', 'LAYER': 'TextEdit', 'Categorie': 'ValueRelation', 'Numar': 'TextEdit', 'km_început': 'TextEdit', 'km_final': 'TextEdit', 'Nr.crt': 'TextEdit', 'Localități': 'TextEdit', 'Traseu HG': 'TextEdit', 'KM HG': 'TextEdit', 'lungime_viabilitate': 'TextEdit', 'LUN': 'TextEdit', 'Observatii': 'TextEdit', 'Modificat': 'TextEdit', 'HCJ_modificare': 'ExternalResource', 'Carte_scanata': '', 'Indicativ_vechi': '', 'm_from': '', 'm_to': '', });
lyr_TipImbracaminte_6.set('fieldImages', {'fid': 'TextEdit', 'Viabilitate': 'TextEdit', 'Categorie': 'TextEdit', 'Numar': 'TextEdit', 'Lungime_tronson': 'TextEdit', 'Imbracaminte': 'TextEdit', 'Sector 2 benzi - km inceput': 'TextEdit', 'Sector 2 benzi - km final': 'TextEdit', 'Sector 3 benzi - km inceput': 'TextEdit', 'Sector 3 benzi - km final': 'TextEdit', 'Sector 4 benzi - km inceput': 'TextEdit', 'Sector 4 benzi - km final': 'TextEdit', 'Declivitate - km inceput': 'TextEdit', 'Declivitate - km final': 'TextEdit', 'Raze - km inceput': 'TextEdit', 'Raze - km final': 'TextEdit', 'Tip restrictie': 'TextEdit', 'Restrictie - km inceput': 'TextEdit', 'Restrictie - km final': 'TextEdit', 'Valoare restrictie': 'TextEdit', 'km inceput': 'TextEdit', 'km final': 'TextEdit', 'Nr tronson': 'Range', 'Localitati': 'TextEdit', });
lyr_LimiteUAT_2.set('fieldLabels', {'fid': 'no label', 'ADMIN_UNIT': 'no label', 'NAME': 'inline label - always visible', 'AREA_VALUE': 'no label', 'nr_crt': 'no label', 'tip_localitate': 'no label', 'Populatie_2021': 'no label', });
lyr_cursuri_apa_PH_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'Denumire': 'no label', 'DenumireAl': 'no label', 'Denumire_1': 'no label', 'Ordin': 'no label', 'Bazin': 'no label', 'CodConfCad': 'no label', 'Canal': 'no label', });
lyr_eterra_4.set('fieldLabels', {'fid': 'no label', 'LABEL': 'no label', 'Nr_cad': 'inline label - always visible', 'Indicativ_DJ': 'no label', 'UAT': 'no label', 'Proprietar': 'no label', 'Administrator': 'no label', 'Sarcini': 'no label', 'Obs': 'no label', 'km_inceput': 'no label', 'km_final': 'no label', 'extras': 'no label', 'denumire_CF': 'no label', 'km_inc_CF': 'no label', 'km_fin_CF': 'no label', 'Categ_fol': 'no label', });
lyr_DrumuriJudetene_5.set('fieldLabels', {'fid': 'no label', 'LAYER': 'no label', 'Categorie': 'no label', 'Numar': 'no label', 'km_început': 'no label', 'km_final': 'no label', 'Nr.crt': 'no label', 'Localități': 'no label', 'Traseu HG': 'no label', 'KM HG': 'no label', 'lungime_viabilitate': 'no label', 'LUN': 'no label', 'Observatii': 'no label', 'Modificat': 'no label', 'HCJ_modificare': 'no label', 'Carte_scanata': 'no label', 'Indicativ_vechi': 'no label', 'm_from': 'no label', 'm_to': 'no label', });
lyr_TipImbracaminte_6.set('fieldLabels', {'fid': 'no label', 'Viabilitate': 'no label', 'Categorie': 'no label', 'Numar': 'no label', 'Lungime_tronson': 'no label', 'Imbracaminte': 'no label', 'Sector 2 benzi - km inceput': 'no label', 'Sector 2 benzi - km final': 'no label', 'Sector 3 benzi - km inceput': 'no label', 'Sector 3 benzi - km final': 'no label', 'Sector 4 benzi - km inceput': 'no label', 'Sector 4 benzi - km final': 'no label', 'Declivitate - km inceput': 'no label', 'Declivitate - km final': 'no label', 'Raze - km inceput': 'no label', 'Raze - km final': 'no label', 'Tip restrictie': 'no label', 'Restrictie - km inceput': 'no label', 'Restrictie - km final': 'no label', 'Valoare restrictie': 'no label', 'km inceput': 'no label', 'km final': 'no label', 'Nr tronson': 'no label', 'Localitati': 'no label', });
lyr_TipImbracaminte_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});