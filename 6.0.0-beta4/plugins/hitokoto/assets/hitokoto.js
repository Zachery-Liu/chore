;
(async () => {
    var _a;
    try {
        const resp = await fetch('https://v1.hitokoto.cn?encode=text');
        const hitokoto = document.createElement('div');
        hitokoto.style.marginTop = '3px';
        hitokoto.textContent = await resp.text();
        const container = document.querySelector('.breadcrumb');
        if (container) {
            container.appendChild(hitokoto);
        }
        else {
            const container = document.createElement('div');
            container.className = 'breadcrumb';
            container.appendChild(hitokoto);
            (_a = document.querySelector('.content-header')) === null || _a === void 0 ? void 0 : _a.appendChild(container);
        }
    }
    catch (_) {
        //
    }
})();
