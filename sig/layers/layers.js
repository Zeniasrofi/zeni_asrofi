var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_oke_1 = new ol.format.GeoJSON();
var features_oke_1 = format_oke_1.readFeatures(json_oke_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oke_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_oke_1.addFeatures(features_oke_1);var lyr_oke_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oke_1, 
                style: style_oke_1,
    title: 'oke<br />\
    <img src="styles/legend/oke_1_0.png" />  32397 - 53256 <br />\
    <img src="styles/legend/oke_1_1.png" />  53256 - 74116 <br />\
    <img src="styles/legend/oke_1_2.png" />  74116 - 94975 <br />\
    <img src="styles/legend/oke_1_3.png" />  94975 - 115834 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_oke_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_oke_1];
lyr_oke_1.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Luas_wlyh': 'Luas_wlyh', 'jmlh_pddk': 'jmlh_pddk', });
lyr_oke_1.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Luas_wlyh': 'TextEdit', 'jmlh_pddk': 'TextEdit', });
lyr_oke_1.set('fieldLabels', {'ID_Kec': 'no label', 'Kecamatan': 'header label', 'Luas_wlyh': 'header label', 'jmlh_pddk': 'header label', });
lyr_oke_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});