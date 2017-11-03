var t = function(doc) {
  var template = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: []
    },
    properties: {

    }
  };
  var geo = JSON.parse('[' + doc.geo + ']');
  var docs = [];
  for (var i in geo) {
    var d = JSON.parse(JSON.stringify(template));
    d.geometry.coordinates = [ geo[i][1], geo[i][0]];
    d.properties.name = doc.name;
    d.properties.album = doc.album;
    d.properties.year = parseInt(doc.year);
    docs.push(d);
  }
  //console.log(docs);
  return docs;
}

module.exports = t;
