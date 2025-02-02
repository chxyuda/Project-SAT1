class ResponseTransformer {

    static transform(success=true, message= "success", data=undefined) {
        return {
            success,
            message,
            data
        }
    }

}

module.exports = ResponseTransformer;