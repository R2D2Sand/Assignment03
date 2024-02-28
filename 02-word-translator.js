// Prompt the user for a language code
var languageCode = prompt("Enter a language code (es, de, en, fr): ");

// Check the language code and display the translated "Hello World"
if (languageCode === "es") {
  document.write("Hello World translated in Spanish is: Hola Mundo");
} else if (languageCode === "de") {
  document.write("Hello World translated in German is: Hallo Welt");
} else if (languageCode === "fr") {
  document.write("Hello World translated in French is: Bonjour le monde");
} else if (languageCode === "en") {
  document.write("Hello World translated in English is: Hello World");
} 