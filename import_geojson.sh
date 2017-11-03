#!/bin/bash
export COUCH_URL="http://admin:admin@localhost:5984"
export COUCH_DATABASE="springsteengeojson"
export COUCH_TRANSFORM="./transform2.js"
cat springsteen.tsv | couchimport 
