$('form').card({
    container: '.card-wrapper',
    width: 280,
 
    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }
});