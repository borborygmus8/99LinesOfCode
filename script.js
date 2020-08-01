const friends = ['Buddy', 'Kitty', 'Teia', 'Zoe', 'Chloe'];

for (let i = 0; i < friends.length; i++) {
    console.log(`${friends[i].toUpperCase()}:`);

    for (let j = 99; j > 0; j--) {
        console.log(`${j} ${j > 1 ? 'lines' : 'line'} of code in the file, ${j} ${j > 1 ? 'lines' : 'line'} of code; ${friends[i]} strikes one out, clears it all out, ${j > 1 ? j - 1 : 'no more'} lines of code in the file`);
    }
}