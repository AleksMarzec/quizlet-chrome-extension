document.addEventListener("selectionchange", event => {
    let selection = document.getSelection ? document.getSelection().toString() : document.selection.createRange().toString();
    console.log(selection);
})