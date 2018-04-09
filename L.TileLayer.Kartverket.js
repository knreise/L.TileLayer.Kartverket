/*global L:false*/

(function () {
    'use strict';

    L.TileLayer.Kartverket = L.TileLayer.extend({

        baseUrl: 'https://{s}.statkart.no/gatekeeper/gk/gk.open_gmaps',

        mappings: {
            topo2: 'topo4',
            topo2graatone: 'topo4graatone'
        },

        layers: [
            'matrikkel_bakgrunn',
            'topo4',
            'topo4graatone',
            'europa',
            'toporaster',
            'sjo_hovedkart2',
            'kartdata2',
            'norges_grunnkart',
            'norges_grunnkart_graatone',
            'egk'
        ],

        layerNames: [
            'Matrikkel bakgrunn',
            'Topografisk norgeskart 4',
            'Topografisk norgeskart 4 gråtone',
            'Europakart',
            'Topografisk norgeskart, raster 2',
            'Sjøkart hovedkartserien 2',
            null,
            'Norges Grunnkart',
            'Norges grunnkart gråtone',
            'Europeisk grunnkart'
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
