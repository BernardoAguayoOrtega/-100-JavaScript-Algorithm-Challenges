const addBorder = (picture: string[]) => {
    const wall = '*'.repeat(picture[0].length + 2);
    
    picture.unshift(wall)
    picture.push(wall)

    for (let index = 1; index < picture.length - 1; index++) {
        picture[index] = '*'.concat(picture[index], '*')
    }

    return picture;
}

console.log(addBorder(["abc", "def"]));
// expected output: 
