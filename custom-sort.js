function myDate(d,m,y) {
    this.d = d;
    this.m = m;
    this.y = y;
}

function setupList(n) {
    let tmp = [];
    for(let i = 0; i < n; i++)
        tmp.push(new myDate(
            rnd(1, 31),
            rnd(1, 12),
            rnd(1900, 2019)            
        ));

    return tmp;
}

let rnd = (min, max) => Math.floor(Math.random() * (+max - +min)) + +min;


function toSeconds(d) {
    let seconds = 86400;
    return (d.d * seconds) + (d.m * 31 * seconds) + (d.y * 12 * 31 * seconds);
}

// sort functions
function sortUp(left, right) {

    left = toSeconds(left);
    right = toSeconds(right);

    if(left > right)
        return 1;
    
    if(left < right)
        return -1;

    return 0;
}


// init section
let randomList = setupList(125);

let initList = [
    new myDate(10, 12, 2019),
    new myDate(8, 12, 2019),
    new myDate(2, 2, 2018),
    new myDate(2, 3, 2018),
    new myDate(5, 2, 2018),
    new myDate(1, 1, 2000),
    new myDate(10, 10, 2015),
    new myDate(10, 11, 2019)
];

randomList.sort(sortUp);
initList.sort(sortUp);

console.log('random', randomList);
console.log('init', initList);