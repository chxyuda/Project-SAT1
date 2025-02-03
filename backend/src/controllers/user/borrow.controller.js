const ResponseTransformer = require("../../transforms/response/response.transform");

class BorrowController {

    async listAllBorrow(req, res){
        res.send(ResponseTransformer.transform(true, 'success', []))
    }

    async createNewBorrow(req, res) {
        res.send(ResponseTransformer.transform(true, 'เพิ่มข้อมูลสำเร็จ'))
    }

    async updateBorrow(req, res) {
        res.send(ResponseTransformer.transform(true, 'อัพเดทข้อมูลสำเร็จ'))
    }
    
}

module.exports = new BorrowController();