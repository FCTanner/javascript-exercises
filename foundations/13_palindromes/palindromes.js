const palindromes = function (x) {
   const sanitized =  x.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   const reversed = sanitized.split('').reverse().join('');
   const is_equal = sanitized == reversed;
   return(is_equal);
};

// Do not edit below this line
module.exports = palindromes;
