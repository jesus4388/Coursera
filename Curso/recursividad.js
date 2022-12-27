let counter = 3;
function recursiva() {
    console.log(counter);
    counter -= 1;
    if (counter === 0) return;
    recursiva();
}

recursiva();