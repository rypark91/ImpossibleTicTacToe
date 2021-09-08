let spaces = ['','','','','','','','',''];

let turn = 1;
let compTurn = true;
let spotFound = false;

let grid = document.querySelector('.tic-tac-container');

let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');
let item5 = document.querySelector('.item5');
let item6 = document.querySelector('.item6');
let item7 = document.querySelector('.item7');
let item8 = document.querySelector('.item8');
let item9 = document.querySelector('.item9');

item1.addEventListener('click',function(){
    if(spaces[0] === ''){
        item1.style.background = "url('cross_2.jpg')";
        item1.style.backgroundSize = "140px 140px";
        spaces[0] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});
item2.addEventListener('click',function(){
    if(spaces[1] === ''){
        item2.style.background = "url('cross_2.jpg')";
        item2.style.backgroundSize = "140px 140px";
        spaces[1] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});
item3.addEventListener('click',function(){
    if(spaces[2] === ''){
        item3.style.background = "url('cross_2.jpg')";
        item3.style.backgroundSize = "140px 140px";
        spaces[2] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});
item4.addEventListener('click',function(){
    if(spaces[3] === ''){
        item4.style.background = "url('cross_2.jpg')";
        item4.style.backgroundSize = "140px 140px";
        spaces[3] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});
item5.addEventListener('click',function(){
    if(spaces[4] === ''){
        item5.style.background = "url('cross_2.jpg')";
        item5.style.backgroundSize = "140px 140px";
        spaces[4] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});
item6.addEventListener('click',function(){
    if(spaces[5] === ''){
        item6.style.background = "url('cross_2.jpg')";
        item6.style.backgroundSize = "140px 140px";
        spaces[5] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});
item7.addEventListener('click',function(){
    if(spaces[6] === ''){
        item7.style.background = "url('cross_2.jpg')";
        item7.style.backgroundSize = "140px 140px";
        spaces[6] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});
item8.addEventListener('click',function(){
    if(spaces[7] === ''){
        item8.style.background = "url('cross_2.jpg')";
        item8.style.backgroundSize = "140px 140px";
        spaces[7] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});
item9.addEventListener('click',function(){
    if(spaces[8] === ''){
        item9.style.background = "url('cross_2.jpg')";
        item9.style.backgroundSize = "140px 140px";
        spaces[8] = 'x';
        turn++;
        compTurn = true;
        computerPick();
    }
});

let choicesBox = document.querySelector('.choice');
let choice1 = document.querySelector('#first');
let choice2 = document.querySelector('#second');

choice1.addEventListener('click', function(){
    setUpGame();
})
choice2.addEventListener('click', function(){
    setUpGame();
    computerPick();
})




//Victor check section
function checkDiagonalVictor(symbol){
    if(spaces[0] === symbol && spaces[4] === symbol && spaces[8] === symbol){
        return true;
    }
    else if(spaces[2] === symbol && spaces[4] === symbol && spaces[6] === symbol){
        return true;
    }
    else{
        return false;
    }
}
function checkHorizonalVictor(symbol){
    if(spaces[0] === symbol && spaces[1] === symbol && spaces[2] === symbol){
        return true;
    }
    else if(spaces[3] === symbol && spaces[4] === symbol && spaces[5] === symbol){
        return true;
    }
    else if(spaces[6] === symbol && spaces[7] === symbol && spaces[8] === symbol){
        return true;
    }
    else{
        return false;
    }
}
function checkVerticalVictor(symbol){
    if(spaces[0] === symbol && spaces[3] === symbol && spaces[6] === symbol){
        return true;
    }
    else if(spaces[1] === symbol && spaces[4] === symbol && spaces[7] === symbol){
        return true;
    }
    else if(spaces[2] === symbol && spaces[5] === symbol && spaces[8] === symbol){
        return true;
    }
    else{
        return false;
    }
}
function checkStaleMate(){
    if(spaces[0] !== '' && spaces[1] !== '' && spaces[2] !== ''
    && spaces[3] !== '' && spaces[4] !== '' && spaces[5] !== ''
    && spaces[6] !== '' && spaces[7] !== '' && spaces[8] !== ''){
        //message stale mate
        alert("Technically speaking, you still didn't beat me.  Let's go for another round!");
        //restart game
        restartGame();
    }
}
//---------------------------------------------
function computerPick(){
    if(turn === 1) {
        computerFill(4,item5);
    }
    else if(turn === 2){
        if(spaces[4] === ''){
            computerFill(4,item5);
        }
        else{
            pickCorner();
        }
    }    
    else{
        spotFound = false;
        searchHorizontalWinMove('o');
        if(spotFound === false){
            searchVerticalWinMove('o');
        }
        if(spotFound === false){
            searchDiagonalWinMove('o');
        }
        if(spotFound === false){
            searchHorizontalWinMove('x');
        }
        if(spotFound === false){
            searchVerticalWinMove('x');
        }
        if(spotFound === false){
            searchDiagonalWinMove('x');
        }
        if(spotFound === false){
            blockCorner();
        }
        if(spotFound === false){
            pickCorner();
        }
        if(spotFound === false){
            searchRandomSpot();
        }
    }
    compTurn = false;
    if(checkDiagonalVictor('o') || checkHorizonalVictor('o') || checkVerticalVictor('o')){
        //give message and restart
        alert("Welp.. I win! Let's play again, if you still think you can beat me!");
        restartGame();
    }
    else{
        checkStaleMate();
    }
}
function computerFill(i, item){
    spaces[i] = 'o'
    item.style.background= "url('circle_2.jpg')";
    item.style.backgroundSize = "140px  140px";
    spotFound = true;
    turn++;
}
function blockCorner(){
    if(spaces[1] === 'x' && spaces[3] === 'x' && spaces[0] === ''){
        computerFill(0,item1);
    }
    else if(spaces[1] === 'x' && spaces[5] === 'x' && spaces[2] === ''){
        computerFill(2,item3);
    }
    else if(spaces[3] === 'x' && spaces[7] === 'x' && spaces[6] === ''){
        computerFill(6,item7);
    }
    else if(spaces[5] === 'x' && spaces[7] === 'x' && spaces[8] === ''){
        computerFill(8,item9);
    }
}
function pickCorner(){
    if(spaces[0] === '' || spaces[2] === '' || spaces[6] === '' || spaces[8] === ''){
        let num = Math.floor((Math.random() * 4) + 1);
        while(spotFound === false){
            if(num === 1 && spaces[0] === ''){
                computerFill(0,item1);
            }
            else if(num === 2 && spaces[2] === ''){
                computerFill(2,item3);
            }
            else if(num === 3 && spaces[6] === ''){
                computerFill(6,item7);
            }
            else if(num === 4 && spaces[8] === ''){
                computerFill(8,item9);
            }
            num = Math.floor((Math.random() * 4) + 1);
        }
    }
}



//win move search
function searchHorizontalWinMove(symbol){
    //row1
    if(spaces[0] === symbol && spaces[1] === symbol && spaces[2] === ''){
        computerFill(2,item3);
    }
    else if(spaces[0] === symbol && spaces[1] === '' && spaces[2] === symbol){
        computerFill(1,item2);
    }
    else if(spaces[0] === '' && spaces[1] === symbol && spaces[2] === symbol){
        computerFill(0,item1);
    }
    //row2
    else if(spaces[3] === symbol && spaces[4] === symbol && spaces[5] === ''){
        computerFill(5,item6);
    }
    else if(spaces[3] === symbol && spaces[4] === '' && spaces[5] === symbol){
        computerFill(4,item5);
    }
    else if(spaces[3] === '' && spaces[4] === symbol && spaces[5] === symbol){
        computerFill(3,item4);
    }
    //row3
    else if(spaces[6] === symbol && spaces[7] === symbol && spaces[8] === ''){
        computerFill(8,item9);
    }
    else if(spaces[6] === symbol && spaces[7] === '' && spaces[8] === symbol){
        computerFill(7,item8);
    }
    else if(spaces[6] === '' && spaces[7] === symbol && spaces[8] === symbol){
        computerFill(6,item7);        
    }
}
function searchVerticalWinMove(symbol){
    //column1
    if(spaces[0] === symbol && spaces[3] === symbol && spaces[6] === ''){
        computerFill(6,item7);
    }
    else if(spaces[0] === symbol && spaces[3] === '' && spaces[6] === symbol){
        computerFill(3,item4);
    }
    else if(spaces[0] === '' && spaces[3] === symbol && spaces[6] === symbol){
        computerFill(0,item1);
    }
    //column2
    else if(spaces[1] === symbol && spaces[4] === symbol && spaces[7] === ''){
        computerFill(7,item8);
    }
    else if(spaces[1] === symbol && spaces[4] === '' && spaces[7] === symbol){
        computerFill(4,item5);
    }
    else if(spaces[1] === '' && spaces[4] === symbol && spaces[7] === symbol){
        computerFill(1,item2);
    }
    //column3
    else if(spaces[2] === symbol && spaces[5] === symbol && spaces[8] === ''){
        computerFill(8,item9);
    }
    else if(spaces[2] === symbol && spaces[5] === '' && spaces[8] === symbol){
        computerFill(5,item6);
    }
    else if(spaces[2] === '' && spaces[5] === symbol && spaces[8] === symbol){
        computerFill(2,item3);
    }
}
function searchDiagonalWinMove(symbol){
    //diagnol1
    if(spaces[0] === symbol && spaces[4] === symbol && spaces[8] === ''){
        computerFill(8,item9);
    }
    else if(spaces[0] === symbol && spaces[4] === '' && spaces[8] === symbol){
        computerFill(4,item5);
    }
    else if(spaces[0] === '' && spaces[4] === symbol && spaces[8] === symbol){
        computerFill(0,item1);
    }
    //diagnol2
    else if(spaces[2] === symbol && spaces[4] === symbol && spaces[6] === ''){
        computerFill(6,item7);
    }
    else if(spaces[2] === symbol && spaces[4] === '' && spaces[6] === symbol){
        computerFill(4,item5);
    }
    else if(spaces[2] === '' && spaces[4] === symbol && spaces[6] === symbol){
        computerFill(2,item3);
    }
}
function searchRandomSpot(){
    if(spaces[0] === ''){
        computerFill(0,item1);
    }
    else if(spaces[1] === ''){
        computerFill(1,item2);
    }
    else if(spaces[2] === ''){
        computerFill(2,item3);
    }
    else if(spaces[3] === ''){
        computerFill(3,item4);
    }
    else if(spaces[4] === ''){
        computerFill(4,item5);
    }
    else if(spaces[5] === ''){
        computerFill(5,item6);
    }
    else if(spaces[6] === ''){
        computerFill(6,item7);
    }
    else if(spaces[7] === ''){
        computerFill(7,item8);
    }
    else if(spaces[8] === ''){
        computerFill(8,item9);
    }
}

function init(){
    document.body.removeChild(grid);
    //grid.style.visibility = 'hidden';
}
function setUpGame(){
    document.body.removeChild(choicesBox);
    document.body.appendChild(grid);
}

function restartGame(){
    spaces = ['','','','','','','','',''];
    turn = 1;
    compTurn = true;
    spotFound = false;

    item1.style.background = "";
    item2.style.background = "";
    item3.style.background = "";
    item4.style.background = "";
    item5.style.background = "";
    item6.style.background = "";
    item7.style.background = "";
    item8.style.background = "";
    item9.style.background = "";

    item1.style.backgroundColor = "white";
    item2.style.backgroundColor = "white";
    item3.style.backgroundColor = "white";
    item4.style.backgroundColor = "white";
    item5.style.backgroundColor = "white";
    item6.style.backgroundColor = "white";
    item7.style.backgroundColor = "white";
    item8.style.backgroundColor = "white";
    item9.style.backgroundColor = "white";

    
    document.body.removeChild(grid);
    document.body.prepend(choicesBox);
}
init();