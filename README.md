#product-api
ThomsonLocal API for internal processes to pull product lists from a REST interface.

##Current Version
This API is currently running at 1.0.0

##Encryption
There is no encryption on this API service.

#API Reference
##Example HTTP Request Header
GET http://[HOST]/Product/List HTTP/1.1

Host: [HOST]

accept-version: 1.0.0

##Example Product List GET Request
`GET http://[HOST]/Product/List HTTP/1.1`

##Successful Response
`{"product_name":"Business Listing","product_group":"Internet"}`

