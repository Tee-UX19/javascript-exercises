const removeFromArray = function(array,...remove) {
    for (let i = 0; i < remove.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (remove[i] === array[j]) {
                array.splice(j, 1);
                j--;
                
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
