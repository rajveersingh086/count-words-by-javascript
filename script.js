document.getElementById('submitButton').onclick = function() {
    const text = document.getElementById('textInput').value;
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const words = text.split(/\s+/).filter(word => word.trim() !== '');


    const wordCount = words.length;

    alert(`\nWords: ${wordCount}`);
};
