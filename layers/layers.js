ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([180757.878773, 2704491.788578, 181842.467477, 2705367.236630]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13171027.333389, 2807763.520792, 13172139.077906, 2808693.362874]
                            })
                        });
var format_Type_T_2 = new ol.format.GeoJSON();
var features_Type_T_2 = format_Type_T_2.readFeatures(json_Type_T_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_Type_T_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Type_T_2.addFeatures(features_Type_T_2);
var lyr_Type_T_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Type_T_2, 
                style: style_Type_T_2,
                interactive: true,
                title: '<img src="styles/legend/Type_T_2.png" /> Type_T'
            });
var format_Type_R_3 = new ol.format.GeoJSON();
var features_Type_R_3 = format_Type_R_3.readFeatures(json_Type_R_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_Type_R_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Type_R_3.addFeatures(features_Type_R_3);
var lyr_Type_R_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Type_R_3, 
                style: style_Type_R_3,
                interactive: true,
                title: '<img src="styles/legend/Type_R_3.png" /> Type_R'
            });
var format_Type_M_4 = new ol.format.GeoJSON();
var features_Type_M_4 = format_Type_M_4.readFeatures(json_Type_M_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_Type_M_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Type_M_4.addFeatures(features_Type_M_4);
var lyr_Type_M_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Type_M_4, 
                style: style_Type_M_4,
                interactive: true,
                title: '<img src="styles/legend/Type_M_4.png" /> Type_M'
            });
var format_Type_B_5 = new ol.format.GeoJSON();
var features_Type_B_5 = format_Type_B_5.readFeatures(json_Type_B_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_Type_B_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Type_B_5.addFeatures(features_Type_B_5);
var lyr_Type_B_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Type_B_5, 
                style: style_Type_B_5,
                interactive: true,
                title: '<img src="styles/legend/Type_B_5.png" /> Type_B'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1975_1.setVisible(true);lyr_Type_T_2.setVisible(true);lyr_Type_R_3.setVisible(true);lyr_Type_M_4.setVisible(true);lyr_Type_B_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1975_1,lyr_Type_T_2,lyr_Type_R_3,lyr_Type_M_4,lyr_Type_B_5];
lyr_Type_T_2.set('fieldAliases', {'Type': 'Type', '璅�': '璅�', });
lyr_Type_R_3.set('fieldAliases', {'Type': 'Type', '璅�': '璅�', });
lyr_Type_M_4.set('fieldAliases', {'Type': 'Type', '璅�': '璅�', });
lyr_Type_B_5.set('fieldAliases', {'Type': 'Type', '璅�': '璅�', });
lyr_Type_T_2.set('fieldImages', {'Type': '', '璅�': '', });
lyr_Type_R_3.set('fieldImages', {'Type': '', '璅�': '', });
lyr_Type_M_4.set('fieldImages', {'Type': '', '璅�': '', });
lyr_Type_B_5.set('fieldImages', {'Type': '', '璅�': '', });
lyr_Type_T_2.set('fieldLabels', {'Type': 'no label', '璅�': 'no label', });
lyr_Type_R_3.set('fieldLabels', {'Type': 'no label', '璅�': 'no label', });
lyr_Type_M_4.set('fieldLabels', {'Type': 'header label', '璅�': 'no label', });
lyr_Type_B_5.set('fieldLabels', {'Type': 'no label', '璅�': 'no label', });
lyr_Type_B_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});