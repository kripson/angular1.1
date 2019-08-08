  
class user{
    constructor(name,password,birthdate, age,email,valid)
    this.name = name;
    this.password = password;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.valid = valid;
}

  module.exports = function(req,res){

    if (!req.body) {
        return res.sendStatus(400)
    }

    var user1 = new user("sankit","123","31-07-1998","21","sankit@gmail.com",true);
    if (req.body.firstName == user1.name && req.body.password == user1.password){
        res.send(user1);
    }else{
        res.send(false)
    }
};