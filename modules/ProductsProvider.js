var path    = require('path');
var restify = require('restify');
var applog = require('winston');
var sqlHelper = require('../middleware/sqlhelper');
var jsonHelper = require('../middleware/sqltojsonconverter');

exports.ProductListV1 = ProductListV1;
exports.ProductItemV1 = ProductItemV1;
exports.GroupListV1 = GroupListV1;
exports.GroupItemV1 = GroupItemV1;
exports.ProductGroupItemV1 = ProductGroupItemV1;
exports.ContentListV1 = ContentListV1;
exports.ContentItemV1 = ContentItemV1;
exports.ProductContentItemV1 = ProductContentItemV1;
exports.ProductTitlesV1 = ProductTitlesV1;
exports.ProductClassificationsV1 = ProductClassificationsV1;
exports.ProductEdzonesV1 = ProductEdzonesV1;

function ProductListV1(req, res, next) {
    applog.debug('Getting a list of products');
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:ProductListSp'),function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function ProductItemV1(req, res, next) {
    applog.debug('Getting product details for product_id = ' + req.params.product_id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:ProductListSp') + " @product_id=" + req.params.product_id,function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function GroupListV1(req, res, next) {
    applog.debug('Getting a list of product groups');
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:GroupListSp'),function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            // Resitify currently has a bug which doesn't allow you to set default headers
            // This headers comply with CORS and allow us to server our response to any origin
            //res.header("Access-Control-Allow-Origin", "*");
            //res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.send(jsonString);
        });
    });
}

function GroupItemV1(req, res, next) {
    applog.debug('Getting group details for group_id = ' + req.params.group_id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:GroupListSp') + " @group_id=" + req.params.group_id,function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function ProductGroupItemV1(req, res, next) {
    applog.debug('Getting group details for product_id = ' + req.params.product_id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:GroupListSp') + " @product_id=" + req.params.product_id,function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function ContentListV1(req, res, next) {
    applog.debug('Getting a list of product text lines');
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:ContentListSp'),function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function ContentItemV1(req, res, next) {
    applog.debug('Getting text line details for style_id = ' + req.params.style_id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:ContentListSp') + " @style_id=" + req.params.style_id,function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function ProductContentItemV1(req, res, next) {
    applog.debug('Getting text line details for product_id = ' + req.params.product_id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:ContentListSp') + " @product_id=" + req.params.product_id,function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function ProductTitlesV1(req, res, next) {
    applog.debug('Getting titles for product_id = ' + req.params.product_id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:TitlesSp') + " @product_id=" + req.params.product_id,function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function ProductEdzonesV1(req, res, next) {
    applog.debug('Getting edzones for product_id = ' + req.params.product_id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:EdzonesSp') + " @product_id=" + req.params.product_id,function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function ProductClassificationsV1(req, res, next) {
    applog.debug('Getting classifications for product_id = ' + req.params.product_id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:ClassificationsSp') + " @product_id=" + req.params.product_id,function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

_queryTreeSort = (options) ->
    id = options.id or "id"
pid = options.parentid or "parentid"
ri  = [] # Root items
rfi = {} # Rows from id
cfi = {} # Children from id
o = []
# Setup Indexing
for e, i in options.q
    rfi[e[id]] = i
if not cfi[e[pid]]?
    cfi[e[pid]] = []
    cfi[e[pid]].push(options.q[i][id])
# Find parents without rows
for e in options.q when not rfi[e[pid]]?
    ri.push(e[id])

# Create the correct order
while ri.length
    thisid = ri.splice(0,1)
o.push(options.q[rfi[thisid]])

if cfi[thisid]?
    ri = cfi[thisid].concat(ri)
    return o


_makeTree = (options) ->
    id = options.id or "id"
pid = options.parentid or "parentid"
children = options.children or "children"

temp = {}
o = []

# Create the tree
for e in options.q
    e[children] = []
# Add the row to the index
temp[e[id]] = e
# This parent should be in the index
if temp[e[pid]]?
    # This row is a child
# Add the child to the parent
temp[e[pid]][children].push(e)
else
# Add a root item
o.push(e)
return o

_renderTree = (tree) ->
    html = "<ul>"
for e in tree
    html += "<li>#{e.name}"
if e.children?
    html += _renderTree(e.children)
    html += "</li>"
    html += "</ul>"
return html

sqlquery = [
	{"id": 456, "parentid": 123, "name": "Dogs"}
	{"id": 214, "parentid": 456, "name": "Labradors"}
	{"id": 123, "parentid": 0, "name": "Mammals"}
	{"id": 810, "parentid": 456, "name": "Pugs"}
	{"id": 919, "parentid": 456, "name": "Terriers"}
]

$('#sqlquery').html(JSON.stringify(sqlquery, true, 2))

sortedquery = _queryTreeSort({q:sqlquery})
$('#sortedquery').html(JSON.stringify(sortedquery, true, 2))

tree = _makeTree({q:sortedquery})
$('#tree').html(JSON.stringify(tree, true, 2))

htmllist = _renderTree(tree)
$('#htmllist').html(htmllist)

