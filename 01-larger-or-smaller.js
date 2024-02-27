<!DOCTYPE html>
<html>
<head>
    <title>Find Larger Integer</title>
</head>
<body>
    <script>
        // Prompt the user for the first integer
        var num1 = parseInt(prompt("Enter the first integer:"), 10);

        // Prompt the user for the second integer
        var num2 = parseInt(prompt("Enter the second integer:"), 10);

        // Check if the first number is larger than the second number
        if (num1 > num2) {
            document.write("The larger integer is: " + num1);
        } 
        // Check if the second number is larger than the first number
        else if (num2 > num1) {
            document.write("The larger integer is: " + num2);
        } 
        // If neither number is larger, then they must be equal
        else {
            document.write("Both integers are equal.");
        }
    </script>
</body>
</html>
