// code your solution here

function superbowlWin(array) {
    const winRecord = array.find(entry => entry.result === "W")
    return winRecord ? winRecord.year : undefined  
}
