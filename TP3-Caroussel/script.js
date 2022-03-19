setInterval(() => {
    i=1
    document.getElementById?('radio'+i).checked=true:
    i++;
    if (i>5) {
        i=1;
    }
}, 1000);
