const getCelsius = (F) => (F - 32) * 5 / 9;

        function convertToCelsius() {
            const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
            const celsius = getCelsius(fahrenheit);
            document.getElementById('result').innerText = `The temperature is ${celsius.toFixed(2)} °C`;
        }
        const minMax = (arr) => ({
            min: Math.min(...arr),
            max: Math.max(...arr)
        });

        function findMinMax() {
            const input = document.getElementById('numberInput').value;
            const numberArray = input.split(',').map(Number); // Convert input string to an array of numbers
            const result = minMax(numberArray);
            document.getElementById('result2').innerText = `Min: ${result.min}, Max: ${result.max}`;
        }
        function calculateArea() {
            const length = parseFloat(document.getElementById('lengthInput').value);
            const width = parseFloat(document.getElementById('widthInput').value);
            
            (function(length, width) {
                const area = length * width;
                console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
                document.getElementById('result3').innerText = `Area: ${area}`;
            })(length, width); 
        }
