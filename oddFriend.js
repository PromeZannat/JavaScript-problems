//probelm 4
function oddFriend(name){
    const odd = [];
    for(let  i = 0; i<name.length; i++){
        let friend = name[i];
        let friendLength = friend.length;        
        if(friendLength%2 ==1){
            odd.push(name[i]);
            break;
        }
    }    
    return odd;
}
const friendsName = ['tuntun', 'maowa', 'prome'];
const myFriends = oddFriend(friendsName);
console .log(myFriends);