<!DOCTYPE html>
<html>
<head>
    <title>Compare Integers</title>
    <script>
        // Prompt the user for two integers
        var num1 = parseInt(prompt("Enter the first integer:"));
        var num2 = parseInt(prompt("Enter the second integer:"));

        // Compare the two integers
        if (num1 > num2) {
            // Display the larger integer if the first one is larger
            document.write("The larger integer is: " + num1);
        } else if (num2 > num1) {
            // Display the larger integer if the second one is larger
            document.write("The larger integer is: " + num2);
        } else {
            // Display a message if the two integers are equal
            document.write("Both integers are equal.");
        }
    </script>
</head>
<body>
</body>
</html>
