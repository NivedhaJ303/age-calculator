function age() {
    // Get values from input
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    // Current date setup
    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth() + 1; // Adjust for zero-based index
    var y2 = date.getFullYear();

    // Days in month array
    var month = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
    
    // Calculate differences
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    // Final calculations
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    // Display results
    document.getElementById('age').innerHTML = 'Your age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}