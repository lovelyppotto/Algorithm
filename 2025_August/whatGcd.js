function solution(n, m) {
    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    
    const whatGcd = gcd(n, m);
    const whatLcm = lcm(n, m);
    
    return [whatGcd, whatLcm];
}