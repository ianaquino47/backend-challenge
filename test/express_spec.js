const request = require("request"),
    assert = require('assert'),
    base_url = "http://localhost:7500/";
    

describe("checkAgainstRules", () => {
    describe("/api/account/role", function() {
        it("GET returns status code 200", function(done) {
            request.get((base_url + "api/account/role" ), function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("GET returns status code 404 when extraneous parameter given", function(done) {
            request.get((base_url + "api/account/role?sort_by=name" ), function(error, response, body) {
                assert.equal(404, response.statusCode);
                done();
            });
        });



    })    

    describe("/api/account/profile", function() {
        it("PUT returns status code 200", function(done) {
            request.put((base_url + "api/account/profile" ), function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        
        it("PUT returns status code 200 when accepted parameter given", function(done) {
            request({
                url: base_url + "api/account/profile",
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    },
                json: {"name" : "ian"}},function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("PUT returns status code 200 when multiple (accepted) parameters given", function(done) {
            request({
                url: base_url + "api/account/profile",
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    },
                json: {"name" : "ian", "job_title" : "software developer", "photo_url" : "shorturl.at/knBN1"}},function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("PUT returns status code 400 when extraneous parameter given", function(done) {
            request({
                url: base_url + "api/account/profile",
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    },
                json: {"age" : 25}},function(error, response, body) {
                assert.equal(400, response.statusCode);
                done();
            });
        });

        it("PUT returns status code 400 when type of parameter given is wrong", function(done) {
            request({
                url: base_url + "api/account/profile",
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    },
                json: {"age" : "25"}},function(error, response, body) {
                assert.equal(400, response.statusCode);
                done();
            });
        });

        it("PUT returns status code 404 when extraneous parameter given", function(done) {
            request.put((base_url + "api/account/role?age=25" ), function(error, response, body) {
                assert.equal(404, response.statusCode);
                done();
            });
        });
    })    

    describe("/api/account/member", function() {
        it("DELETE returns status code 404 if required parameter not given", function(done) {
            request.delete((base_url + "/api/account/member" ), function(error, response, body) {
                assert.equal(404, response.statusCode);
                done();
            });
        });

        it("DELETE returns status code 200 if required parameter given", function(done) {
            request({
                url: base_url + "api/account/member",
                method: 'DELETE',
                headers: {
                    "content-type": "application/json",
                    },
                json: {"account_id" : 123}},function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("DELETE returns status code 400 if type of parameter given is wrong", function(done) {
            request({
                url: base_url + "api/account/member",
                method: 'DELETE',
                headers: {
                    "content-type": "application/json",
                    },
                json: {"account_id" : "123"}},function(error, response, body) {
                assert.equal(400, response.statusCode);
                done();
            });
        });

        it("DELETE returns status code 400 when extraneous parameter given", function(done) {
            request({
                url: base_url + "api/account/profile",
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    },
                json: {"age" : 25}},function(error, response, body) {
                assert.equal(404, response.statusCode);
                done();
            });
        });

        it("DELETE returns status code 404 when extraneous parameter given", function(done) {
            request.delete((base_url + "api/account/role?age=25" ), function(error, response, body) {
                assert.equal(404, response.statusCode);
                done();
            });
        });
    })   

    describe("/api/account/search", function() {
        it("GET returns status code 200", function(done) {
            request.get((base_url + "api/account/search" ), function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("GET returns status code 200 if accepted parameter given (integer)", function(done) {
            request.get((base_url + "api/account/search/?page=25" ), function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("GET returns status code 200 if accepted parameter given (array)", function(done) {
            request.get((base_url + "api/account/search?skill[]=137792" ), function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("GET returns status code 200 if accepted parameter given (string)", function(done) {
            request.get((base_url + "api/account/search?remote=hello" ), function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("DELETE returns status code 404 when extraneous parameter given", function(done) {
            request.get((base_url + "/api/account/search?age=25" ), function(error, response, body) {
                assert.equal(404, response.statusCode);
                done();
            });
        });
    })    
});

