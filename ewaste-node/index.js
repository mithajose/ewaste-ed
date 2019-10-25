
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Web3 = require('web3');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


var MPLContractAddress = "0x5f277d5cc375d598b662DEE7F8E8336673b4918A";

var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
var abi= [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "LoginAttempt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "userType",
				"type": "string"
			}
		],
		"name": "Registration",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "man",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "agg",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "rec",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "cat",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "des",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "aggregator",
				"type": "address"
			}
		],
		"name": "approveAggregate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recycler",
				"type": "address"
			}
		],
		"name": "approveRecycler",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllIds",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "aggregator",
				"type": "address"
			}
		],
		"name": "getListForAggregator",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recycler",
				"type": "address"
			}
		],
		"name": "getListForRecycler",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyList",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getMyListDetail",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "enum Ewaste.Status",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "login",
		"outputs": [
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "accountType",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contactAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "accountType",
				"type": "string"
			}
		],
		"name": "registration",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
   
var myContract =web3.eth.contract(abi).at(MPLContractAddress)


app.post('/registration',function(req,res){


    try{
console.log(req.body)
console.log("imside")
web3.eth.defaultAccount = web3.eth.accounts[0]

        myContract.registration.sendTransaction(req.body.username,req.body.address,req.body.accountType,{ gas: 2000000 }, function ( error,result) {
                    // console.log("The rss"+result)
                    res.send({ data: result })
                })
           
  
    }catch (error) {
        res.send( "Sorry....! Entered values are incorrect, Please try again" );
        console.log(error.Message+" from secondary Addrss Pushing")
    }
});

app.post('/addlist',function(req,res){


    try{
console.log(req.body)
console.log("imside")
web3.eth.defaultAccount = web3.eth.accounts[0]
//addList( uint id, address man, string memory cat, string memory des,uint amount)
        myContract.addList.sendTransaction(req.body.listid,req.body.addressManuf,req.body.addressAggr,req.body.addressReyc,req.body.category,req.body.description,req.body.amount,{ gas: 2000000 }, function ( error,result) {
                    // console.log("The rss"+result)
                    res.send({ data: result })
                })
           
  
    }catch (error) {
        res.send( "Sorry....! Entered values are incorrect, Please try again" );
        console.log(error.Message+" from secondary Addrss Pushing")
    }
});

app.post('/viewlist',function(req,res){


    try{
console.log(req.body)
console.log("inside viewlist")
web3.eth.defaultAccount = web3.eth.accounts[0]
//addList( uint id, address man, string memory cat, string memory des,uint amount)
        myContract.getMyListDetail.call(req.body.listid, function ( error,result) {
                     console.log(result)
                    res.send(data={"aggregatorName":result[0],"category":result[1],"description":result[2],"status":result[3],"amount":result[4]})
                })
           
  
    }catch (error) {
        res.send( "Sorry....! Entered values are incorrect, Please try again" );
        console.log(error.Message+" from secondary Addrss Pushing")
    }
});
app.get('/getListForAggregator', async function(req,res){

var arr=[];
var details=[];
    try{
// console.log(req.body)
console.log("inside viewlist")
web3.eth.defaultAccount = web3.eth.accounts[1]

await myContract.getAllIds.call(async function(error,result){
	// console.log(result)
	arr=result;
	console.log(arr)
	for(i of arr){
		console.log(Number(i))
	
	await myContract.getListForAggregator.call(Number(i),web3.eth.accounts[1], function ( error,result) {
		console.log(result)
		if(result!=null)
		details.push(result);
	//    res.send(data={"aggregatorName":result[0],"category":result[1],"description":result[2],"status":result[3],"amount":result[4]})
   })
}

setTimeout(()=>{
	console.log(details)
	res.send(data={details})
},3000)
})
 }catch (error) {
        res.send( "Sorry....! Entered values are incorrect, Please try again" );
        console.log(error.Message+" from getlist for aggregator")
    }
});


app.post('/approveAggregator',function(req,res){


    try{
console.log(req.body)
console.log("inside approve")
web3.eth.defaultAccount = web3.eth.accounts[1]
//addList( uint id, address man, string memory cat, string memory des,uint amount)
        myContract.approveAggregate.sendTransaction(req.body.listid,web3.eth.accounts[1], function ( error,result) {
                     console.log(result)
                    res.send(data={"aggregatorName":result[0],"category":result[1],"description":result[2],"status":result[3],"amount":result[4]})
                })
           
  
    }catch (error) {
        res.send( "Sorry....! Entered values are incorrect, Please try again" );
        console.log(error.Message+" from secondary Addrss Pushing")
    }
});

app.get('/getListForRecycler', async function(req,res){

	var arr=[];
	var details=[];
		try{
	// console.log(req.body)
	console.log("inside viewlist")
	web3.eth.defaultAccount = web3.eth.accounts[2]
	
	await myContract.getAllIds.call(async function(error,result){
		// console.log(result)
		arr=result;
		console.log(arr)
		for(i of arr){
			console.log(Number(i))
		
		await myContract.getListForRecycler.call(Number(i),web3.eth.accounts[2], function ( error,result) {
			console.log(result)
			if(result!=null)
			details.push(result);
		//    res.send(data={"aggregatorName":result[0],"category":result[1],"description":result[2],"status":result[3],"amount":result[4]})
	   })
	}
	
	setTimeout(()=>{
		console.log(details)
		res.send(data={details})
	},3000)
	})
	 }catch (error) {
			res.send( "Sorry....! Entered values are incorrect, Please try again" );
			console.log(error.Message+" from getlist for recycler")
		}
	});

	app.post('/approveRecycler',function(req,res){


		try{
	console.log(req.body)
	console.log("inside approve")
	web3.eth.defaultAccount = web3.eth.accounts[2]
	//addList( uint id, address man, string memory cat, string memory des,uint amount)
			myContract.approveRecycler.sendTransaction(req.body.listid,web3.eth.accounts[2], function ( error,result) {
						 console.log(result)
						res.send(data={"aggregatorName":result[0],"category":result[1],"description":result[2],"status":result[3],"amount":result[4]})
					})
			   
	  
		}catch (error) {
			res.send( "Sorry....! Entered values are incorrect, Please try again" );
			console.log(error.Message+" from secondary Addrss Pushing")
		}
	});
var server = app.listen(4040);
console.log("working");
