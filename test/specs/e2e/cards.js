describe('Cards CRUD Test Suite', function(){

    it('should edit a Card', function () {
        var title = '';
        var id = '';
        return browser
            .url('http://localhost:8080/#/1')
            .waitForVisible('#card', 2000)
            .click('.card-update')
            .waitForVisible('.header2')
            .getValue('#title').then((res, err) => {
                title += res;
                return browser
                    .getAttribute('.card-submit', 'id').then((res) => {
                        id += res;
                        return browser
                            .setValue('#title', title + id)
                            .click('.card-submit');
                });
            })
            .waitForVisible('#card', 1000)
            .click('.card-update')
            .waitForVisible('.header2')
            .getValue('#title').then((res,err) => {
                res.should.equal(title + id);
                // revert title back
                return browser
                    .setValue('#title', title)
                    .click('.card-submit');
            });
    });


    it('should add Card', function() {
        var title = '1-NEWTESTTITLE';
        return browser
            .url('http://localhost:8080/#/card-add')
            .waitForVisible('.header2')
            .setValue('#title', '1-NEWTESTTITLE')
            .setValue('#description', 'NEWTESTDESC')
            .click('.card-submit')
            .waitForVisible('#card')
            .getText('#3', (err,res) => {
                res[0].should.equal(title);
            });
    });

});
