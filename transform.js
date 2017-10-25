var t = function(doc) {
  doc.year = parseInt(doc.year);
  doc.duration = parseInt(doc.duration);
  var geo = JSON.parse('[' + doc.geo + ']');
  var docs = [];
  doc.id = parseInt(doc._id)
  delete doc._id;
  delete doc.geo;
  for (var i in geo) {
    var d = JSON.parse(JSON.stringify(doc));
    d.latitude = geo[i][0];
    d.longitude = geo[i][1];
    docs.push(d);
  }
  return docs;
}

module.exports = t;
