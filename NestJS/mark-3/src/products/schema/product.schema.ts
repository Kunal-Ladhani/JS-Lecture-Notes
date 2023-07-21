import { Category } from '../enums/category.enum';
import * as mongoose from "mongoose";

const schema = mongoose.Schema;
const types = schema.Types;

const ProdSchema = new schema({
    // id: {
    //     type: types.ObjectId,
    //     required: true, these two are not req
    //     unique: true, 
    //     sparse: true,   // null keys are ignored
    //     default: 123,    // 24bit key
    //     enum: [...a]
    // },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: Category,
        enum : Object.keys(Category),
        default : Category.OTHERS
    },
    completedAt: {
        type: Date
    },
    createdAt: {
        type: Date
    },
    deletedAt: {
        type: types.Date
    }
});

ProdSchema.methods.getProductsInPriceRange = (start:number,end:number) => {
    // this is basically plugin
    // always used query. 
    
};

// DEFINE MONGODB SCHEMA ACCORDING TO mongoose - default manual defination.
module.exports = mongoose.model('Product', ProdSchema);






// DB pe store kar rahe hai Master Slave config - 1M 2S

// what is a pod? - assume mongodb server


// if master goes down then internal voting will happen b/w 2 slaves
// whichever has recent sync data that will be new master
// earlier down pod when it will get up -> will become new slave.
// if at any time 2 are down then there is a problem

// syncing is very freq, automatically happens b/w db replicas (m and s) in background

// write query will by default go to master
// 2 parallel conn - 1 master (pry) 1 slave (sec)
// w -> master
// r -> slave (legacy data) we know for sure the data is synced
// r -> curr transaction data (imp recent data) -> master

// CAP THEOREM - you cannot achieve all 3 simultaneously. read on it.
// CA is our focus.
// postgreSQL comes close to CAP. read on it!

// query - find findOne update updateOne findById findAll
// aggregation is very less used.

// db query + find + lean in mongodb

// steps -
// keys define kar do acc to prod req.
// identify all queries - it should always be indexed
// db indexing

// currying

// keys - unique and composite
// indexing in mongodb - composite and single key
// timestamp
// embedded document in mongodb
