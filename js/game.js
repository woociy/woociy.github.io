var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
//定义填充的颜色
var color = ['#884cb8', '#f84870', '#f87c00', '#f8dc00', '#10d000', '#106cf8'];
//格子区域
var board;
//宽度，高度最难级别22格
var level = 22;
//当前颜色索引 0-5
var currentColorIndex;
//一个标志位仅在初始化时开启
var flag;
//显示步数的div
var hint = document.getElementById('hint');
//记录点击步数
var step;
//初始化数组，随即产生颜色index并存储
function init() {
    board = new Array();
    for (i = 0; i < level; i++) {
        var row = new Array();
        for (j = 0; j < level; j++) {
            row[j] = Math.floor(Math.random() * 6);
        }
        board[i] = row;
    }
    //当前颜色等于左上角的色块
    currentColorIndex = board[0][0];
    //翻转过的格子存储-1值，先另左上角的为-1
    board[0][0] = -1;
    //一下几行自己看吧，一言难尽
    flag = false;
    drawColor(currentColorIndex);
    flag = true;
    _drawBoard();
    step = 0;
    hint.innerText = step + '/36'
}

//绘制格子区域
function _drawBoard() {
    context.fillStyle = color[currentColorIndex];
    context.fillRect(0, 0, 30 * level, 30 * level);
    for (i = 0; i < level; i++) {
        for (j = 0; j < level; j++) {
            if (board[i][j] != -1) {
                context.fillStyle = color[board[i][j]];
                context.fillRect(j * 30, i * 30, 30, 30);
            }
        }
    }
    hint.innerText = step + '/36'
}
//染色
function drawColor(color_index) {
    //点击当前颜色值无效。初始化时除外。
    if (color_index == currentColorIndex && flag) return;
    for (i = 0; i < level; i++) {
        for (j = 0; j < level; j++) {
            if (board[i][j] == -1) {
                _findSameColor(i, j, color_index);
            }
        }
    }
    step++;
    currentColorIndex = color_index;
    _drawBoard();
}
//递归寻找同色格子
function _findSameColor(cell_x, cell_y, color_index) {
    if (cell_x - 1 >= 0 && board[cell_x - 1][cell_y] == color_index) { board[cell_x - 1][cell_y] = -1;
        _findSameColor(cell_x - 1, cell_y, color_index); }
    if (cell_x + 1 < level && board[cell_x + 1][cell_y] == color_index) { board[cell_x + 1][cell_y] = -1;
        _findSameColor(cell_x + 1, cell_y, color_index); }
    if (cell_y - 1 >= 0 && board[cell_x][cell_y - 1] == color_index) { board[cell_x][cell_y - 1] = -1;
        _findSameColor(cell_x, cell_y - 1, color_index); }
    if (cell_y + 1 < level && board[cell_x][cell_y + 1] == color_index) { board[cell_x][cell_y + 1] = -1;
        _findSameColor(cell_x, cell_y + 1, color_index); }
}