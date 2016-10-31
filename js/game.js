//規定的定義（用於填充色塊）
var canvas = document.getElementById('gamearea');
var context = canvas.getContext('2d');
//定義填充的顔色
var color = ['#884cb8', '#f84870', '#f87c00', '#f8dc00', '#10d000', '#106cf8'];
//設置一個游戲區
var board;
//定義游戲區宽度，高度16格
var level = 16;
//設定一個当前颜色作爲標準
var currentColorIndex;
//一個標志位，初始化時使用
var flag;
//顯示步數
var step = document.getElementById('step');
//記錄點擊的次數
var click;


//初始化数组，随即产生颜色index并存储
function newgame() {
    board = new Array();
    for (i = 0; i < level; i++) {
        var row = new Array();
        for (j = 0; j < level; j++) {
            row[j] = Math.floor(Math.random() * 6);
        }
        board[i] = row;
    }
    //設定當前顔色魏左上角顔色（初始）
    currentColorIndex = board[0][0];
    //令左上角色塊為-1值（邏輯設定：變色后的色塊都為-1 用於判斷下一次翻轉）
    board[0][0] = -1;
    //
    flag = false;
    drawColor(currentColorIndex);
    flag = true;
    _drawBoard();
    click = 0;
    step.innerText = click + '/27'
}


//繪製游戲區
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
    step.innerText = click + '/27'
    if (click == 27) { lose(); }
}



//染色
function drawColor(color_index) {
    //點擊同色無效，以便不同色翻轉
    if (color_index == currentColorIndex && flag) return;
    for (i = 0; i < level; i++) {
        for (j = 0; j < level; j++) {
            if (board[i][j] == -1) {
                _findSameColor(i, j, color_index);
            }
        }
    }
    click++;
    currentColorIndex = color_index;
    _drawBoard();
}




//按規律尋找同色色塊
function _findSameColor(cell_x, cell_y, color_index) {
    if (cell_x - 1 >= 0 && board[cell_x - 1][cell_y] == color_index) {
        board[cell_x - 1][cell_y] = -1;
        _findSameColor(cell_x - 1, cell_y, color_index);
    }
    if (cell_x + 1 < level && board[cell_x + 1][cell_y] == color_index) {
        board[cell_x + 1][cell_y] = -1;
        _findSameColor(cell_x + 1, cell_y, color_index);
    }
    if (cell_y - 1 >= 0 && board[cell_x][cell_y - 1] == color_index) {
        board[cell_x][cell_y - 1] = -1;
        _findSameColor(cell_x, cell_y - 1, color_index);
    }
    if (cell_y + 1 < level && board[cell_x][cell_y + 1] == color_index) {
        board[cell_x][cell_y + 1] = -1;
        _findSameColor(cell_x, cell_y + 1, color_index);
    }
}

//游戲失敗彈窗
function lose() {
    alert("沉迷游戲  無法自拔 英雄? 不如再來一把!?");

}

$('#example').tooltip(options);