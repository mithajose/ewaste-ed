pragma solidity ^0.5.0;
contract Ewaste{
event LoginAttempt(address sender);
event Registration(address user,string userType);
enum Status {create, aggregate, recycle, complete}
struct userData{
address userAddress;
string userName;
string contactAddress;
string accountType;
uint[] myIds;
}

struct List{
        uint listId;
        address manufacture;
        address aggregator;
        address recycler;
        string category;
        string description;
        uint amountOffered;
        Status status;
    }
mapping(address => userData) users;
mapping (uint => List) lists;
uint[] allIds;

function login() public returns (string memory userName,string memory accountType){
if(msg.sender==users[msg.sender].userAddress){
}else{
return ("","");
}

}
function registration (string memory userName,string memory contactAddress,string memory accountType) public{
  users[msg.sender].userAddress=msg.sender;
  users[msg.sender].userName=userName;
  users[msg.sender].contactAddress=contactAddress;
  users[msg.sender].accountType=accountType;
  emit Registration(msg.sender,accountType);
}
function addList( uint id, address man,address agg,address rec, string memory cat, string memory des,uint amount) public returns(bool){
        lists[id].listId=id;
        lists[id].manufacture=man;
        lists[id].aggregator=agg;
        lists[id].recycler=rec;
        lists[id].category=cat;
        lists[id].description=des;
        lists[id].amountOffered=amount;
        lists[id].status=Status.create;
        users[msg.sender].myIds.push(id);
        allIds.push(id);
    }
    
     function getMyList()public view returns(uint[] memory){
       return users[msg.sender].myIds;
    }
    
    function getMyListDetail(uint id) public view returns(string memory, string memory,string memory,Status status,uint){
        return (users[lists[id].aggregator].userName,lists[id].category,lists[id].description,lists[id].status,lists[id].amountOffered);
    }
    
    function getAllIds() public view returns(uint[] memory){
        return allIds;
    }
    function getListForAggregator(uint id, address aggregator) public view returns(uint,string memory, string memory, string memory, uint amount){
        require(lists[id].status==Status.create);
        require(lists[id].aggregator==aggregator);
        string memory name=users[lists[id].manufacture].userName;
        return (lists[id].listId,name,lists[id].category,lists[id].description,lists[id].amountOffered);
    }
    
    function approveAggregate(uint id, address aggregator) public returns(bool){
         require(lists[id].aggregator==aggregator);
        lists[id].aggregator=aggregator;
        lists[id].status=Status.aggregate;
        return true;
    }
    
    /**
     * aggregator can add the recycler in this function
     */
      function getListForRecycler(uint id, address recycler) public view returns(uint,string memory, string memory, string memory, uint amount){
        require(lists[id].status==Status.aggregate);
        require(lists[id].recycler==recycler);
        string memory name=users[lists[id].manufacture].userName;
        return (lists[id].listId,name,lists[id].category,lists[id].description,lists[id].amountOffered);
    }
    
    function approveRecycler(uint id, address recycler) public returns(bool){
        lists[id].recycler=recycler;
        lists[id].status=Status.recycle;
        return true;
    }
    
}
