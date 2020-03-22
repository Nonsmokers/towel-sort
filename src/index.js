module.exports = function towelSort(matrix) {
    let result=[];
    if (matrix == undefined) {
        return [];
    }
    let reversValue = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            reversValue.push(matrix[i]);
        } else {
            reversValue.push(matrix[i].reverse());
        }
    }
    return (result.concat.apply([], reversValue));
};
