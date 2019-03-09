/*global L:false*/

(function () {
    'use strict';

    L.TileLayer.Kartverket = L.TileLayer.extend({

        baseUrl: 'https://{s}.statkart.no/gatekeeper/gk/gk.open_gmaps',

        mappings: {
            kartdata2: 'topo4',
            norgeskart_bakgrunn: 'topo4',
            sjo_hovedkart2: 'sjokartraster',
            toporaster: 'toporaster3',
            topo2: 'topo4',
            topo2graatone: 'topo4graatone'
        },

        layers: [
            'matrikkel_bakgrunn',
            'topo4',
            'topo4graatone',
            'europa',
            'toporaster3',
            'sjokartraster',
            'norges_grunnkart',
            'norges_grunnkart_graatone',
            'egk',
            'terreng_norgeskart'
        ],

        layerNames: [
            'Matrikkel bakgrunn',
            'Topografisk norgeskart',
            'Topografisk norgeskart gråtone',
            'Europakart',
            'Topografisk norgeskart, raster',
            'Sjøkart hovedkartserien',
            'Norges Grunnkart',
            'Norges grunnkart gråtone',
            'Europeisk grunnkart',
            'Terreng'
        ],

        initialize: function (layer, options) {
            if (this.layers.indexOf(layer) === -1) {
                if (this.mappings[layer]) {
                    layer = this.mappings[layer];
                } else {
                    throw new Error('Unknown layer "' + layer + '"');
                }
            }
            options = options || {};
            var url = this.baseUrl + '?layers=' + layer + '&zoom={z}&x={x}&y={y}';

            options =  L.extend(
                {
                    attribution: '&copy; <a href="http://kartverket.no">Kartverket</a>',
                    subdomains: ['opencache', 'opencache2', 'opencache3']
                },
                options
            );
            L.TileLayer.prototype.initialize.call(this, url, options);
        }

    });

    L.tileLayer.kartverket = function (layer, options) {
        return new L.TileLayer.Kartverket(layer, options);
    };

    L.tileLayer.kartverket.getLayers = function () {
        return L.TileLayer.Kartverket.prototype.layers.slice();
    };

    L.tileLayer.kartverket.getLayerName = function (layer) {
        var idx = L.TileLayer.Kartverket.prototype.layers.indexOf(layer);
        var name = null;
        if (idx !== -1) {
            name = L.TileLayer.Kartverket.prototype.layerNames[idx];
        }
        return (name !== null) ? name : layer;
    };

}());
