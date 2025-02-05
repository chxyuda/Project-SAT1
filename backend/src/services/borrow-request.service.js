const BorrowRequestRepository = require("../repositories/borrow-request.repository");

class BorrowRequestService {
    async getList(userId, status){
        const borrowRequestRepo = new BorrowRequestRepository();
        return borrowRequestRepo.findBorrowRequest(userId, status);
    }
}

module.exports = new BorrowRequestService();