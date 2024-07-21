document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("check-btn");
    const input = document.getElementById("text-input");
    const result = document.getElementById("result");

    function isPalindrome(str) {
        const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }

    btn.addEventListener("click", () => {
        const value = input.value.trim();
        if (value === "") {
            alert("Please input a value");
        } else if (isPalindrome(value)) {
            result.textContent = `${value} is a palindrome`;
        } else {
            result.textContent = `${value} is not a palindrome`;
        }
    });
});
