


var bing = new Cesium.BingMapsImageryProvider({
    url : 'http://dev.virtualearth.net',
    key : 'Aj36V6IYWMUkiI1_fOnxPyZxkODEupee3R4MbPCqhYZTDo3deX4UdC7Zc67H8zZf',
    mapStyle : Cesium.BingMapsStyle.AERIAL
});


var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider : bing,
    baseLayerPicker : false,
    vrButton : true
});



//here one may add features that do not be used in sync Mode