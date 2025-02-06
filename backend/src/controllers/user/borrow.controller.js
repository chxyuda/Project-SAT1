const borrowRequestService = require("../../services/borrow-request.service");
const ResponseTransformer = require("../../transforms/response/response.transform");

class BorrowController {

    async listAllBorrow(req, res){
        const {id} = req.user;
        const data = borrowRequestService.getList(id, req.query.status ?? null);
        res.send(ResponseTransformer.transform(true, 'success', data))
    }

    async createNewBorrow(req, res) {
        res.send(ResponseTransformer.transform(true, 'เพิ่มข้อมูลสำเร็จ'))
    }

    async updateBorrow(req, res) {
        res.send(ResponseTransformer.transform(true, 'อัพเดทข้อมูลสำเร็จ'))
    }
    
}

module.exports = new BorrowController();