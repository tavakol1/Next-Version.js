const expect = require("chai").expect;
const incVersion = require("./NextVersion").incVersion;
const joinVersion = require("./NextVersion").joinVersion;
const NextVersion = require("./NextVersion").nextVersion;

// Test Function for incVersion.
const testIncVersion = () => {
    let expected =  2;
    const incVersionOutput = (incVersion(1));

    expect(expected, 'Method Failed to Increament by 1!').to.equal(incVersionOutput);
}

// Test Function for joinVersion
const testJoinVersion = () => {
    testArray = [1,1,1,1,1];
    let expected = testArray.join('.');
    joinVersionOutput = joinVersion(testArray);

    expect(expected, 'joinVersion failed to function as expected!').to.deep.equal(joinVersionOutput);
}

const test1NextVersion = () => {
    const expected = '1.1.1.2';
    const nextVersionOutput = NextVersion('1.1.1.1');

    expect(expected, 'nextVersion failed to function as expected!').to.equal(nextVersionOutput);
}

const test2NextVersion = () => {
    const expected = '10.0.0.0';
    const nextVersionOutput = NextVersion('9.9.9.9');

    expect(expected, 'nextVersion failed to function as expected!').to.equal(nextVersionOutput);
}

testIncVersion();
testJoinVersion();
test1NextVersion();
test2NextVersion();
