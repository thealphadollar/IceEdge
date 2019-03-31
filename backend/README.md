# IceEdge Backend

Backend Goes here, mostly in nodejs

## TechStack

The backend for IceEdge uses the following technologies and libraries:

```
- Node.js: main programming language
- Express: node library to serve http web applications
- MongoDB: database layer for the program
- NodeMon: node monitoring service for producing production ready API server
- Moongoose: an Odject Relational Mapper for mongoDB document based schema
```

## Environment Variables

Create `.env` file in the current directory with the following variables.

```text
IE_PORT=<port for the app>
IE_CONN=<mongodb connection string>
```

NOTE: These are crucial for the API to work.

## Running

The express node.js server can be run using the following commands.

NOTE: `Node.js` and `npm` should be installed in the system.

```sh
cd /to/project/dir
npm install
npm start
```

The API can then be accessed at `https://127.0.0.1:4000//api/v1`

## Queries

The API accepts the following Graph Queries as HTTP GET requests.

```JSON
# Fetches customer with $ID for $MONTH and $YEAR
{
    customer (id:$ID, month:$MONTH, year:$YEAR{
        id                  # customer id
        cat_id              # category the customer belongs to
        data                # customer data for queried time frame
        norm_data           # customer normalised data for queried time frame
    }
}

# Fetches sector with $ID for $MONTH and $YEAR
{
    sector (id:$ID, month:$MONTH, year:$YEAR{
        id                  # sector id
        name                # name of the sector
        data                # expenditure data for the sector
        total_expense       # total sector expense
        total_purchase      # total sector purchases
    }
}

# Fetches category with $ID for $MONTH and $YEAR
{
    category (id:$ID){
        id                  # category id
        name                # name of the category
        numUsers            # number of users in the category
        userIDs             # users belonging to this category
        desc                # description of the category
    }
}
```

NOTE: The above queries are minimal representation. To know more about schema, open `https://127.0.0.1/api/v1` in browser to navigate using GraphiQL.