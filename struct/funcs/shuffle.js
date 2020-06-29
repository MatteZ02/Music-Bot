module.exports = function (a) {
    for (let i = a.length - 1; i > 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        if (i === 0 || j === 0) {
            console.log(`J or I is 0. I: ${i} J: ${j}`);
        } else {
            [a[i], a[j]] = [a[j], a[i]];
        }
    }
    return a;
};