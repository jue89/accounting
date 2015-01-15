var ca = new Buffer( 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNkRENDQWQyZ0F3SUJBZ0lKQUxSZkk0dFYrd1lETUEwR0NTcUdTSWIzRFFFQkJRVUFNRk14Q3pBSkJnTlYKQkFZVEFrUkZNUXd3Q2dZRFZRUUlEQU5PUkZNeEVUQVBCZ05WQkFjTUNFaGhibTV2ZG1WeU1Rb3dDQVlEVlFRSwpEQUVnTVFvd0NBWURWUVFMREFFZ01Rc3dDUVlEVlFRRERBSkRRVEFlRncweE5ERXlNamd5TXpNM01ESmFGdzB5Ck5ERXlNalV5TXpNM01ESmFNRk14Q3pBSkJnTlZCQVlUQWtSRk1Rd3dDZ1lEVlFRSURBTk9SRk14RVRBUEJnTlYKQkFjTUNFaGhibTV2ZG1WeU1Rb3dDQVlEVlFRS0RBRWdNUW93Q0FZRFZRUUxEQUVnTVFzd0NRWURWUVFEREFKRApRVENCbnpBTkJna3Foa2lHOXcwQkFRRUZBQU9CalFBd2dZa0NnWUVBNUZsTDFlWXdjTWVGL2V4MTd6cnVRWGt5CmI2TDZ4cWpUNXdGa1UyRlZKakVCbzFQMy9HS2hzMFlJRmlPclFnL0x4K2xGakNQeWp6Nmt3ZUoyWCtxWlZkOHQKcWdRck92THlRSlFwdUhDSGFPcWxoQUo1OExCWkFXaWZoU0hRMHFjdjNyQ1hrUDFqK1hBZjBXbC9vNlNNUW4xWQp6STkzNzNYZjZoYWVDblZ6SjVrQ0F3RUFBYU5RTUU0d0hRWURWUjBPQkJZRUZCL0I2N0Z3ZlloZThCaVp3Sk4zCnk2U2xHa2ttTUI4R0ExVWRJd1FZTUJhQUZCL0I2N0Z3ZlloZThCaVp3Sk4zeTZTbEdra21NQXdHQTFVZEV3UUYKTUFNQkFmOHdEUVlKS29aSWh2Y05BUUVGQlFBRGdZRUFUV2JJRjRMSVVMOEVNUzBwMnBzOXhpUGNra1pWc1plVwp6K0cxMmpPU3ZQb3RrUEtENURoSDdBQkpCSHo3ZUdMSkN3clY0OTZDR05oWlFvb2ZjRHV2TDZUdmNmL2xtNnYwCnhIVkNiOXhmV0JJaFhxTWlvKzlGVmpQMVRDNDJZcVdjcWpMdDVqeFhzNXFNWXVjN2xEQ1lxZ0s1QWhRYmR4dXgKTkFvREYwcXZlb2M9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K', 'base64' );
var server_key = new Buffer( 'LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBNXFQemxyOEM1a1U4Ky94MmV4N1c3TGtrN1VvR3RyeTl1WGhpVUxmRW52emtPSTV3CmNSUXpoUHZ6dWQzRnJwYkk2OEJMM0RuYkl3V2JkZHF0K25IUFFmbGNpL0VVTDBaWFNxNjF4NTEzQ01zM3Y0UFUKeE9MdlJETWJCVEFuV0xha3F1TU5jdmw4YlQzQ09TRU1JTUpyQ2phS1RpQ2JiSlJrUHRqUGpEakZTT3AxRGo4NApHNGZSY2ZnMmdJZ3dVKzNZTnBZVFRheXZOQUt6Qk9LcEFwOFJML3lpR28ySHBqUzdOT2RyWWlBYzR1RUZvcXpXCmFFSzBscGMxYU9IT3pSOXhpa3NSZjhFL3RRZFp5cktTbjRuYjhRTFUwQnh4UHJGV3RzY2c2MGJ4dWJFSng2Mm4KQWpmYVB3cFZtM3ZUZ0pySEhzZC82MjB4QzVWalJzQTliTjJMblFJREFRQUJBb0lCQUgvdWNTOHN4RzcxK04zTgpLK3NmTUJnZW1sMEVzclNwL0pMa002U1NTbjNseUxHV1VNaG9iQ3RYbGRtREtpT3RmOFZFNU05RFNFb2swaGFOCk5mTzFMVUZyRCtxUHpxSnFZZ0VLNThuUmpqVlNnNW0zaGsydmt3aEJVTHVQK2tNN0RCdTkxYmZ3cXhQdExjNkMKaGplbG43b0tocXpQYVdiUTZNbnplU3hPVVNBZjN2L1JhczkvWjBtTFpjcHpHNkRrVWIrZTNCblRxRlZtOHA2RQplYlVVQytSWTlyeGlPaGFON3BQazFvNlFDeEU3bDh2N2Z1Mms0dDkzZ0I4L0tYaEhkek9GaDdrMm9WUU1pVHViCnYzVnB6TWNzTmphcjlkcUgrTFBrQWtReHgzY0ZCTGZKOThYV1owQ3FzdkN6Y3U3WEZPcmFid1lxdmJKcXEwNGYKTWh0M0NBRUNnWUVBL1hBUFpzY2E2S2ZDdHNXU3hGWENlZUpXNzMya1RrcXkwMzRhMXpPR3Bab0k5S1ljM2NjRwo3WkRVV1ovdElKNVFRdSttQWU1VkhETnkyQWpGTkpRRHpNTmN2RGtraVpXMDIwS01qSk5nYVZlSGhJdXVSR3dWCjVweWE3SkVDN0QwYytWNWtwclhYT0FrYW5WU1dZeE1YMmd4Y2JyODNuK3FYQXJ5c1N2aWU0R2NDZ1lFQTZQamoKV1RYdVU0czBRNkgrbmxTMGVnVUg5WEVNYTNCcWFJQ0lqT1dJbzRiUnJ4dDV2cWV2a2VqbFA5R3p0Tko5aXNJMgorbjhWbDNTSXBqcTFWR3lZSjRRLzhhM1Z3NUY2WnBaUGhlMDVOUFY1aDNWUkJEYXR5QVRKa2REaWxsTjU5QW9WClNUTjlLVUp1QVJrYTBuQ1lpSTBnaE1ZckxHcWYrSG82dEw3Rm9Wc0NnWUVBM1NxMXhoTnJRQzFtbHVuRU11SkUKWE9sUXhKNzRpL3BVSkl5Z0Q3MC9lN1Q0cThkcTJYK2VaQ05IclE4TGVMT3ZoenBydkxPb1Fud0RkTlB5aFBmRwplU0xrQXI0N1RIWUE1bmNsQUdoOGNuR1lLZXRib1FwUjhuWW9ITnBQbXFtYVoyUWdvZnQrWGNCVUlZaDMxTzRNCm1wUys5VWFaM0V4MGpFYnFkR0tUQTNFQ2dZQVlScDhDRThHU3lRV1lLcEFxbFc3ODYvdEpVdzlWUHJDSDFTVGwKY2FHTVVLY1cxUWtabWNXTXNiVDVzbk5FVzA2am45czB2UHRWL2RtallLaTJkRjVpZDhCbUFaUXR2Y0lBWUpkRwp3RkpldDFtRGlQRDVQRzFkVTBwaHZGOXdCS0RIa2lsbnFFclplc2VWcTdVRXlxREtVZEphbzMrcU1DNGRLVGRtCjBCNHQwd0tCZ0Q1T1Y2MzNaT2xKUzZCTHQzeXhqZXl2MFlEelV4ZUxQZWgxbk5HdDVkOXdkM2RtdXpNMGFtSzIKTVMybURZMWhjWE9aeGZhaG56WUJsbkw0cWNuSVNiU1ZSeDQzcWU1Rmh0a3c3M21PRXJYczlJejBPR2Q5blBPUAowWFFmR1pqU3NWSmdkcGhnc1FVa0JBNmVoL3VaZndsUGtoZ0lBNGN0U3hMQm1nSVREKzVOCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg==', 'base64' );
var server_cert = new Buffer( 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNrVENDQWZvQ0FRRXdEUVlKS29aSWh2Y05BUUVGQlFBd1V6RUxNQWtHQTFVRUJoTUNSRVV4RERBS0JnTlYKQkFnTUEwNUVVekVSTUE4R0ExVUVCd3dJU0dGdWJtOTJaWEl4Q2pBSUJnTlZCQW9NQVNBeENqQUlCZ05WQkFzTQpBU0F4Q3pBSkJnTlZCQU1NQWtOQk1CNFhEVEUwTVRJeU9ESXpNemd6TjFvWERURTFNVEl5T0RJek16Z3pOMW93ClN6RUxNQWtHQTFVRUJoTUNSRVV4RERBS0JnTlZCQWdNQTA1RVV6RVJNQThHQTFVRUJ3d0lTR0Z1Ym05MlpYSXgKQ2pBSUJnTlZCQW9NQVNBeER6QU5CZ05WQkFNTUJuTmxjblpsY2pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRApnZ0VQQURDQ0FRb0NnZ0VCQU9hajg1YS9BdVpGUFB2OGRuc2UxdXk1Sk8xS0JyYTh2Ymw0WWxDM3hKNzg1RGlPCmNIRVVNNFQ3ODduZHhhNld5T3ZBUzl3NTJ5TUZtM1hhcmZweHowSDVYSXZ4RkM5R1YwcXV0Y2VkZHdqTE43K0QKMU1UaTcwUXpHd1V3SjFpMnBLcmpEWEw1ZkcwOXdqa2hEQ0RDYXdvMmlrNGdtMnlVWkQ3WXo0dzR4VWpxZFE0LwpPQnVIMFhINE5vQ0lNRlB0MkRhV0UwMnNyelFDc3dUaXFRS2ZFUy84b2hxTmg2WTB1elRuYTJJZ0hPTGhCYUtzCjFtaEN0SmFYTldqaHpzMGZjWXBMRVgvQlA3VUhXY3F5a3ArSjIvRUMxTkFjY1Q2eFZyYkhJT3RHOGJteENjZXQKcHdJMzJqOEtWWnQ3MDRDYXh4N0hmK3R0TVF1VlkwYkFQV3pkaTUwQ0F3RUFBVEFOQmdrcWhraUc5dzBCQVFVRgpBQU9CZ1FEWnVvUkh3VXAxeVBOTjYzMzg4MDNJWUdKenpNWWVLS2ZmalZxMmV6MmZoZUdPeW8vOWQ4dnFWTDRNCkFMQjVlZTB2T3RaeVhobEQwdUYvODh5TStyYVBZOE5PZitGa21zcFJiRmI3eG5GSVN1d0FFSjFyc0FDUXVJTW8KSWRkR0d5ckxpc2M1cHY1WGJwdmhRNDFwanpJWTR2QTFJajh1cDZOeW1zaXd5YjB6M1E9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==', 'base64' );
var client_pfx = new Buffer( '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', 'base64' );

var should = require( 'should' );
var fireup = require( 'fire-up' ).newInjector( {
	basePath: __dirname + '/..',
	bustRequireCache: true,
	require: require,
	modules: [
		'./modules/app/*.js',
		'./modules/jsonapi/*.js',
		{ implements: 'config', factory: function() {
			return {
				app: { user: null, group: null },
				https: {
					port: 8000,
					ca: ca,
					key: server_key,
					cert: server_cert
				}
			}
		} },
		{ implements: 'app/routes:jsonapi', factory: function() { return {
			register: function( app ) {
				app.get( '/simplelist', function( req, res ) {
					res.endJSONapiList( [ { id: 1 }, { id: 2 } ] );
				} );

				app.get( '/simplelist/item', function( req, res ) {
					res.endJSONapiItem( [ { id: 1 } ] );
				} );

				app.delete( '/simplelist/item', function( req, res ) {
					res.endJSONapiCheck( 1 );
				} );

				app.get( '/list', function( req, res ) {
					res.endJSONapiList( {
						data: [ { id: 1 }, { id: 2 } ],
						page: 1,
						limit: 2
					} );
				} );
			}
		} } },
	]
} );
var request = require( 'request' ).defaults( { agentOptions: {
	ca: ca,
	pfx: client_pfx,
	passphrase: '1234567890',
	rejectUnauthorized: false
} } );

var app;

describe( "API JSONAPI", function() {

	before( function( done ) {
		// Start API
		fireup( 'app' ).then( function( m ) {
			app = m;
			return done();
		} );
	} );

	it( "should return unpaged list", function( done ) {
		request.get( {
			url: 'https://localhost:8000/simplelist'
		}, function( err, res, body ) {
			body = JSON.parse( body );
			body.should.properties('meta', 'simplelist');
			body.meta.count.should.eql( 2 );
			body.simplelist.should.eql( [{id:1},{id:2}] )
			done( err );
		} );
	} );

	it( "should return paged list", function( done ) {
		request.get( {
			url: 'https://localhost:8000/list'
		}, function( err, res, body ) {
			body = JSON.parse( body );
			body.should.properties('meta', 'list');
			body.meta.count.should.eql( 2 );
			body.meta.limit.should.eql( 2 );
			body.meta.page.should.eql( 1 );
			body.list.should.eql( [{id:1},{id:2}] )
			done( err );
		} );
	} );

	it( "should return item", function( done ) {
		request.get( {
			url: 'https://localhost:8000/simplelist/item'
		}, function( err, res, body ) {
			body = JSON.parse( body );
			body.should.properties('simplelist');
			body.simplelist.should.eql( {id:1} )
			done( err );
		} );
	} );

	it( "should return ok status", function( done ) {
		request.del( {
			url: 'https://localhost:8000/simplelist/item'
		}, function( err, res, body ) {
			res.statusCode.should.eql( 200 );
			done( err );
		} );
	} );

	it( "should return not found status", function( done ) {
		request.get( {
			url: 'https://localhost:8000/simplelist/item2'
		}, function( err, res, body ) {
			res.statusCode.should.eql( 404 );
			done( err );
		} );
	} );

	after( function( done ) {
		app.close();
		return done();
	} );
} );