const BaseRepository = require("./base.repository");


class BorrowRequestRepository extends BaseRepository {

    async findBorrowRequest(userId, status){
        let where = `WHERE b.user_id=?`;
        const params = [userId];
        if(status){
            where += 'AND b.approve_status IN ?';
            if(Array.isArray(status)){
                params.push(status)
            }else{
                params.push([status]);
            }
        }

        const sql = `SELECT * FROM borrow_requests b ${where}`;
        const baseRepository = new BaseRepository()
       try {
        const result = baseRepository.get(sql, params);
        return result;
       } catch (error) {
        console.error('BorrowRequestRepository findBorrowRequest error', error);
        throw error;
       }

    }
}

module.exports = BorrowRequestRepository;