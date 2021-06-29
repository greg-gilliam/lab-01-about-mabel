export function isYes(word){
    if(word === 'yes'){
        return true; 
    }
});

word = word.toLowerCase();

if (word === 'yes' || word === 'y'){
    return true;
} else {
    return false; 
}