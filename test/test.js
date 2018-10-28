

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});


QUnit.test('Testing AI function with String', function (assert) {

    assert.throws(function () { wagecheck('a'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

QUnit.test('Testing AI function with No Arguments', function (assert) {

    assert.throws(function () { wagecheck(); }, /The given argument is not a number/, 'no Argument method check');
});



