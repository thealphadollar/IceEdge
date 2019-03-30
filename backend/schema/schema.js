const graph = require('graphql');
const lodash = require('lodash');
const User = require("../mongo-models/user");
const Sector = require("../mongo-models/sector");
const Category = require("../mongo-models/cat_users");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graph;

const NormDataType = new GraphQLObjectType({
    name: 'NormData',
    fields: () => ({
        amt_airlines: {type: GraphQLInt}, 
        amt_entertainment: {type: GraphQLInt},
        amt_auto_rentals: {type: GraphQLInt}, 
        amt_vehicles: {type: GraphQLInt}, 
        amt_business_serv: {type: GraphQLInt}, 
        amt_clothing_stores: {type: GraphQLInt}, 
        amt_contracted_serv: {type: GraphQLInt},
        amt_direct_marketing: {type: GraphQLInt}, 
        amt_govt_serv: {type: GraphQLInt}, 
        amt_hotel: {type: GraphQLInt}, 
        amt_misc: {type: GraphQLInt}, 
        amt_personal_serv_prov: {type: GraphQLInt}, 
        amt_repair_serv: {type: GraphQLInt}, 
        amt_retail_stores: {type: GraphQLInt}, 
        amt_service_prov: {type: GraphQLInt}, 
        amt_transport: {type: GraphQLInt}, 
        amt_utilities: {type: GraphQLInt}, 
        amt_wholesale_distributor: {type: GraphQLInt}
    })
})

const DataType = new GraphQLObjectType({
    name: 'Data',
    fields: () => ({
        cnt_airlines: {type: GraphQLInt},
        cnt_enterntainment: {type: GraphQLInt},
        cnt_auto_rentals: {type: GraphQLInt},
        cnt_vehicles: {type: GraphQLInt},
        cnt_business_serv: {type: GraphQLInt},
        cnt_clothing_stores: {type: GraphQLInt},
        cnt_contracted_serv: {type: GraphQLInt}, 
        cnt_direct_marketing: {type: GraphQLInt},
        cnt_govt_serv: {type: GraphQLInt},
        cnt_hotel: {type: GraphQLInt},
        cnt_misc: {type: GraphQLInt}, 
        cnt_personal_serv_prov: {type: GraphQLInt},
        cnt_repair_serv: {type: GraphQLInt},
        cnt_retail_stores: {type: GraphQLInt}, 
        cnt_service_prov: {type: GraphQLInt},
        cnt_transport: {type: GraphQLInt}, 
        cnt_utilities: {type: GraphQLInt}, 
        cnt_wholesale_distributor: {type: GraphQLInt}, 
        tot_tran_cnt: {type: GraphQLInt}, 
        amt_airlines: {type: GraphQLInt}, 
        amt_entertainment: {type: GraphQLInt},
        amt_auto_rentals: {type: GraphQLInt}, 
        amt_vehicles: {type: GraphQLInt}, 
        amt_business_serv: {type: GraphQLInt}, 
        amt_clothing_stores: {type: GraphQLInt}, 
        amt_contracted_serv: {type: GraphQLInt},
        amt_direct_marketing: {type: GraphQLInt}, 
        amt_govt_serv: {type: GraphQLInt}, 
        amt_hotel: {type: GraphQLInt}, 
        amt_misc: {type: GraphQLInt}, 
        amt_personal_serv_prov: {type: GraphQLInt}, 
        amt_repair_serv: {type: GraphQLInt}, 
        amt_retail_stores: {type: GraphQLInt}, 
        amt_service_prov: {type: GraphQLInt}, 
        amt_transport: {type: GraphQLInt}, 
        amt_utilities: {type: GraphQLInt}, 
        amt_wholesale_distributor: {type: GraphQLInt},
        tot_tran_amt: {type: GraphQLInt}, 
        payment: {type: GraphQLInt}
    })
})

const NormTimeDataType = new GraphQLObjectType({
    name: 'NormTimeData',
    fields: () => ({
        month: {type: GraphQLInt},
        year: {type: GraphQLInt},
        norm_time_data: {type: NormDataType}
    })
})

const TimeDataType = new GraphQLObjectType({
    name: 'TimeData',
    fields: () => ({
        month: {type: GraphQLInt},
        year: {type: GraphQLInt},
        time_data: {type: DataType}
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        cat_id: {type: GraphQLID},
        // TODO: Implement search based on month
        data: { type: GraphQLList(TimeDataType)},
        norm_data: {type: GraphQLList(NormTimeDataType)}
    })
});

const SectorDataType = new GraphQLObjectType({
    name: 'SectorData',
    fields: () => ({
        month: {type: GraphQLInt},
        year: {type: GraphQLInt},
        total_spent: {type: GraphQLInt},
        total_count: {type: GraphQLInt},
        per_transaction: {type: GraphQLInt}
    })
});

const SectorType = new GraphQLObjectType({
    name: 'Sector',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        data: {type: GraphQLList(SectorDataType)},
        total_expense: {type: GraphQLInt},
        total_purchase: {type: GraphQLInt}
    })
});

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        numUsers: {type: GraphQLInt},
        userIDs: {type: GraphQLList (GraphQLInt)},
        desc: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user: {
            type: UserType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return User.findById(args.id);
            }
        },
        sector: {
            type: SectorType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return Sector.findById(args.id);
            }
        },
        category: {
            type: CategoryType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return Category.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find({});
            }
        },
        sectors: {
            type: new GraphQLList(SectorType),
            resolve(parent, args){
                return Sector.find({});
            }
        },
        categories: {
            type: new GraphQLList(CategoryType),
            resolve(parent, args){
                return Category.find({});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});