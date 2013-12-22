module.exports = function(storeManager) {
    var id_attr = 'dossard'
    return function(req, res, next) {
        var crud = {
            create: function() {
                res.end(null);
            },
            
            read: function() {
                if (req.model.id) {
                    storeManager.getEntry(req.channel,id_attr,req.model[id_attr],function(item){
                       res.end(item); 
                    });
                } else {
                    storeManager.getAllEntry(req.channel,function(items){
                        res.end(items);
                    });
                }
            },
            
            update: function() {
                res.end(null);
            },
            
            delete: function() {
                res.end(null);
            }
        };
        
        if (!crud[req.method]) return next(new Error('Unsuppored method ' + req.method));
        crud[req.method]();
    }
};