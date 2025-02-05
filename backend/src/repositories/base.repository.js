const { getDB } = require("../../db-async");

class BaseRepository {
    _connection=null
    constructor(){
        this._connection = getDB();
    }

    async get(sql, params){
        try {
            const [result] = this._connection.query(sql, params);
            return result
        } catch (error) {
            console.error('REPOSITORY GET ERROR()', error);
            throw error;
        }
    }
}

module.exports = BaseRepository;