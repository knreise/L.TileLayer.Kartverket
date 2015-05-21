L.TileLayer.Kartverket
======================

L.TileLayer.Kartverket is a [Leaflet.js][leaflet] plugin for creating tile
layers from [Kartverket][kartverket] (The Norwegian Mapping Authority). It is
essentially a wrapper over L.TileLayer.

Usage
-----

Either install using bower:

    bower install L.TileLayer.Kartverket -S

or, download manually. Include the file in yout page, and use it:

    L.tileLayer.kartverket('layer_name', options).addTo(map);

or, more verbose:

    var layer = new L.TileLayer.Kartverket('layer_name', options);

Where ``layer_name`` is the name of a layer from kartverket, and ``options`` is 
a set of [TileLayer options][tl-options]

To get a list of layer names, call:

    var layer_names = L.tileLayer.kartverket.getLayers();

License
-------
This plugin is licensed under the Apache Software License, Version 1.1, 
see LICENSE.md

Background
----------
This plugin is developed by Norkart on behalf of the Norwegian arts Council as
part of the ["Kultur- og naturreise demo"-project][knreise]


[kartverket]: http://kartverket.no/Kart/Gratis-kartdata/Cache-tjenester/
[leaflet]: http://leafletjs.com
[tl-options]: http://leafletjs.com/reference.html#tilelayer-options
[knreise]: https://github.com/knreise/demonstratorer