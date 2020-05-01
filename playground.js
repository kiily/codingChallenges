
function solveMaze(mazeToTraverse, currentRow, currentCol, destRow, destCol) {
	console.log(currentRow, currentCol);
	console.log(destRow, destCol);
	if (currentRow === destRow && currentCol === destCol) {
		// Found a ppath
		return true;
	}
	if (isSafe(mazeToTraverse, currentRow, currentCol)) {
		console.log('e', currentRow, currentCol);
		if (solveMaze(mazeToTraverse, currentRow + 1, currentCol, destRow, destCol) === true) {
			return true; 
		}
            
		if (solveMaze(mazeToTraverse, currentRow, currentCol + 1, destRow, destCol) === true) {
			return true; 
		}
		return false;
	}
	return false;
}

const isSafe = (mazeToTraverse, x, y) => {
	if(x >= 0 && x < mazeToTraverse.length && y >= 0 && y < mazeToTraverse.length && mazeToTraverse[x][y] !== 1) {
		return true;
	}
	console.log(x, y);
	return false;
};

const solution = (maze, startRow, startCol, destRow, destCol) => {
	// Edge cases, there will be no path if start or end are a one
	if (maze[startRow][startCol] === 1 || maze[destRow][destCol] === 1) {
		return false;
	}
    
	return solveMaze(maze, startRow, startCol, destRow, destCol);
};




console.log(solution([
	[1, 0, 0, 1, 1],
	[1, 1, 0, 1, 1],
	[1, 0, 0, 1, 1],
	[1, 0, 1, 1, 0],
	[1, 0, 0, 0, 0],
], 0, 1, 3, 4));


// console.log(solution([
// 	[0, 0],
// 	[1, 0],
// ], 0, 0, 1, 1)); // true

// console.log(solution([
// 	[0, 1],
// 	[1, 0],
// ], 0, 0, 1, 1)); //false