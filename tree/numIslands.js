// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

//  

// 示例 1：

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3



//BFS
function numIslands(grid) {
    const row = grid.length;
    const col = grid[0].length;
    let count = 0;
  
    // 方向数组，用于计算相邻格子的坐标偏移
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
    // 广度优先搜索
    function bfs(i, j) {
      const queue = [[i, j]];
      grid[i][j] = '0'; // 标记当前格子为已访问
  
      while (queue.length) {
        const [x, y] = queue.shift();
  
        for (const [dx, dy] of directions) {
          const newX = x + dx;
          const newY = y + dy;
  
          if (newX >= 0 && newX < row && newY >= 0 && newY < col && grid[newX][newY] === '1') {
            queue.push([newX, newY]);
            grid[newX][newY] = '0'; // 标记相邻的陆地格子为已访问
          }
        }
      }
    }
  
    // 遍历网格，找到岛屿并进行BFS
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (grid[i][j] === '1') {
          count++;
          bfs(i, j);
        }
      }
    }
  
    return count;
  }
  