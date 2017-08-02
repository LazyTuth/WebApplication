const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'NODEJS2906',
    password: 'Tuth@21293',
    max: 20,
    idleTimeoutMillis: 1000
});

function queryDB(sql, arrData){
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if(err) return reject(err);
            client.query(sql, arrData, (err, result) => {
                done();
                if(err) return reject(err);
                resolve(result);
            });
        });
    });
}
