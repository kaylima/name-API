var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = (function(){
	return {

	  show_all: function(req, res){
	    Person.find({}, function (err, data){
	      if(err){
	        console.log('error finding people from db!');
	      } else{
	        res.json(data);
	      }
	    })
	  },

		add: function(req, res, name){

			people = new Person({name: name});
				people.save(function(err){
					if(err){
						console.log('db error!');
					}else{
						Person.find({}, function(err, peoples){
							if(err){
								console.log('error!!!! from db!!');
							}else{
								console.log('peoples in db: ', peoples);
								res.json(peoples);
							}
						});

					}
				});
		},

		remove: function(req, res, id){
			Person.remove({_id: id}, function(err){
				if(err){
					res.send('can not find id to remove');
				}else{
					Person.find({}, function(err, peoples){
						if(err){
							console.log('error!!!! from db!!');
						}else{
							console.log('peoples in db: ', peoples);
							res.json(peoples);
						}
					});
				}
			})
	}

};

})();
