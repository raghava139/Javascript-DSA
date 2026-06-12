/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    // //first note what are the rotten oranges.
    // let m = grid.length;
    // let n = grid[0].length;
    // let queue = [];
    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (grid[i][j] === 2) {
    //             queue.push([i, j,0])
    //         }
    //     }
    // }
    // let minutes = 0;

    // //mark next adjacent nodes and push into queue.

    // while (queue.length) {
    //     console.log('queue =>',queue)

    //     console.log('--------------')
    //     let [x, y,level] = queue.shift();
    //     console.log(grid[0],`${level}`)
    //     console.log(grid[1],`${level}`)
    //     console.log(grid[2],`${level}`)

    //     // right
    //     if (x < m-1 && grid[x + 1][y] === 1) {
    //         grid[x + 1][y] = 2;
    //         queue.push([x + 1, y,level+1])
    //     }
    //     // left
    //     if (x > 0 && grid[x - 1][y] === 1) {
    //         grid[x - 1][y] = 2
    //         queue.push([x - 1, y,level+1])
    //     }
    //     //top
    //     if (y < n-1 && grid[x][y + 1] === 1) {
    //         grid[x][y + 1] = 2;
    //         queue.push([x, y + 1,level+1])
    //     }
    //     //bottom
    //     if (y > 0 && grid[x][y - 1] === 1) {
    //         grid[x][y - 1] = 2;
    //         queue.push([x, y - 1,level+1]);
    //     }
    //     console.log(level)
    //     minutes = Math.max(level,minutes)
    // }
    // console.log('end of the queue',queue)
    // //and find if any fresh orange;
    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (grid[i][j] === 1) {
    //             return -1;
    //         }
    //     }
    // }
    // return minutes;


    // Day 2 revision
    let rows = grid.length;
    let columns = grid[0].length;

    let queue = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0])
            }
        }
    }
    let minutes = 0;
    // BFS Approach
    while (queue.length) {
        //console.log('queue =>', queue)
        let [row, col, level] = queue.shift();
        //top
        if (row < rows - 1 && grid[row + 1][col] === 1) {
            grid[row + 1][col] = 2
            queue.push([row + 1, col, level + 1]);
        }
        // left
        if (row > 0 && grid[row - 1][col] === 1) {
            grid[row - 1][col] = 2
            queue.push([row - 1, col, level + 1]);
        }
        // top
        if (col < columns - 1 && grid[row][col + 1] === 1) {
            grid[row][col + 1] = 2
            queue.push([row, col + 1, level + 1]);
        }
        // bottom
        if (col > 0 && grid[row][col - 1] === 1) {
            grid[row][col - 1] = 2
            queue.push([row, col - 1, level + 1]);
        }

        minutes = Math.max(level, minutes);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 1) {
                return -1
            }
        }
    }
    return minutes;
    // Time  : O(m × n)
    // Space : O(m × n)
};