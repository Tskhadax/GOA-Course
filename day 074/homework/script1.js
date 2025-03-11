// codewars
function rounding(n, m) {
    let remainder = n % m;
    if (remainder < m / 2) {
        return n - remainder;
    } else if (remainder > m / 2) {
        return n + (m - remainder);
    } else {
        return n;
    }
}