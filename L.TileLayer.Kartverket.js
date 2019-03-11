/*global L:false*/

(function () {
    'use strict';

    L.TileLayer.Kartverket = L.TileLayer.extend({

        baseUrl: 'https://opencache{s}.statkart.no/gatekeeper/gk/gk.open_gmaps?'
               + 'layers={layer}&zoom={z}&x={x}&y={y}',

        options: {
            maxNativeZoom: 18,
            attribution: '&copy; <a href="http://kartverket.no">Kartverket</a>',
            subdomains: ['', '2', '3']
        },

        mappings: {
            kartdata2: 'topo4',
            norgeskart_bakgrunn: 'topo4',
            sjo_hovedkart2: 'sjokartraster',
            toporaster: 'toporaster3',
            topo2: 'topo4',
            topo2graatone: 'topo4graatone'
        },

        layers: {
            matrikkel_bakgrunn: 'Matrikkel bakgrunn',
            topo4:              'Topografisk norgeskart',
            topo4graatone:      'Topografisk norgeskart gråtone',
            europa:             'Europakart',
            toporaster3:        'Topografisk norgeskart, raster',
            sjokartraster:      'Sjøkart hovedkartserien',
            norges_grunnkart:   'Norges Grunnkart',
            norges_grunnkart_graatone: 'Norges grunnkart gråtone',
            egk:                'Europeiske grunnkart',
            terreng_norgeskart: 'Terreng',
            havbunn_grunnkart:  'Havbunn grunnkart',
            bakgrunnskart_forenklet: null
        },

        initialize: function (layer, options) {
            if (typeof this.layers[layer] === 'undefined') {
                if (this.mappings[layer]) {
                    layer = this.mappings[layer];
                } else {
                    throw new Error('Unknown layer "' + layer + '"');
                }
            }

            L.TileLayer.prototype.initialize.call(this, this.baseUrl, options);
            this.options.layer = layer;
            this._name = this.layers[layer] || layer;
        }

    });

    L.tileLayer.kartverket = function (layer, options) {
        return new L.TileLayer.Kartverket(layer, options);
    };

    L.tileLayer.kartverket.getLayers = function () {
        return L.extend({},L.TileLayer.Kartverket.prototype.layers);
    };

}());
