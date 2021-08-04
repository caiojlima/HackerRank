function staircase(n) {    
    for (let i = 1; i <= n; i += 1){
        let print = '';
        for (let i2 = 1; i2 <= n-i; i2 += 1) {
            print += ' ';
        }
        for (let i3 = 0; i3 < i; i3 += 1) {
            print += '#';                
        }       
        console.log(print); 
    }
}
console.log(staircase(5));