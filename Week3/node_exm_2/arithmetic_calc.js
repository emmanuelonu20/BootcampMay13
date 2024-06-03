function add(x, y){
    return x + y;
}

function sub(x, y){
    return x - y;
}

function mul(x, y){
    return x * y;
}

let databasename = 'Robogarden';

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.databasename = databasename;

module.exports = {
    add,
    sub,
    mul,
    databasename
};