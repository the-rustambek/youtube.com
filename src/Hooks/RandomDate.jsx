const RandomDate = () => {
    function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    const a = Math.round(Math.random() * 50);
    if (a <= 7) {
        let arr = ['day', 'month', 'year', 'week'];
        return String(a) + ' ' + random(arr);
    } else if (a > 7 && a <= 31) {
        let arr = ['day', 'month', 'year'];
        return String(a) + ' ' + random(arr);
    } else if (a > 31) {
        let arr = ['month', 'year'];
        return String(a) + ' ' + random(arr);
    }
};

export default RandomDate;
