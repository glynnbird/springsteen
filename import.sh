#!/bin/bash
export COUCH_URL="http://admin:admin@localhost:5984"
export COUCH_DATABASE="springsteen"
export COUCH_TRANSFORM="./transform.js"
cat springsteen.tsv | couchimport 