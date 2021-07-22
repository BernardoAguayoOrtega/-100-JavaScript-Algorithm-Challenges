var addBorder = function (picture) {
    var wall = '*'.repeat(picture[0].length + 2);
    picture.unshift(wall);
    picture.push(wall);
    for (var index = 1; index < picture.length - 1; index++) {
        picture[index] = '*'.concat(picture[index], '*');
    }
    return picture;
};
console.log(addBorder(["abc", "def"]));
// expected output: 
