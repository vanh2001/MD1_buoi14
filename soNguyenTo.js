function checkPrime(a) {
    let check = true;
    if (a <= 1){
        check = false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if(a%i==0){
            check = false;
            break;
        }
    }
    return check;
}

