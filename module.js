const SUM = (a,b) => {
    if (a && b){
        return a + b
    } else if(a && !b){
        return a
    }else if (b && !a){
        return b
    }else{
        return "Enter the input ", 0
    }
}

module.exports = SUM