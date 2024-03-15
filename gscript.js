console.log("Violent Monkey basic version2.12");
window.log = (l) => console.log(l);
window.qa = (x) => {
    return [...document.querySelectorAll(x)];
};
window.af = (x) => {
    return Array.from(x);
};
window.qs = (x) => {
    return document.querySelector(x);
};
window.frequencies = arr =>
    arr.reduce((a, v) => {
        a[v] = (a[v] ?? 0) + 1;
        return a;
    }, {});

strH = [];
myh = [...document.querySelectorAll("head>*")];
myh.forEach((x) => strH.push(x.outerHTML));
myht = () => { window.hout = document.querySelector('html').outerHTML }

window.hrm = () => {
    document.querySelector('head').remove()
}

let gfetch = async (yyy) => {
    let response = await fetch(yyy)
    window.wtext = await response.text()
    console.log(wtext)
}

window.help = () => {
    console.log('hrm-remove head\nmyht-copy html to hout\ninjectCSS\ngfetch')
}

window.injectCSS = css => {
    let el = document.createElement('style');
    el.type = 'text/css';
    el.innerText = css;
    document.head.appendChild(el);
    return el;
};

