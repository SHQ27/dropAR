class DropAr {

    constructor(renderDivId, clientCode, filterCode) {
        this.endpoint = 'http://dropar.ar/filters';
        this.renderDivId = renderDivId;
        this.clientCode = clientCode;
        this.filterCode = filterCode;
        this.init();
    }

    init() {
        let renderDiv = document.getElementById(this.renderDivId);
        let frame = this.createFrame();

        renderDiv.append(frame);
    }

    getFullUrl() {
        let fullUrl = this.endpoint + '?client=' + this.clientCode + '&filter=' + this.filterCode;
        return fullUrl;
    }

    createFrame() {
        let ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", this.getFullUrl());
        ifrm.height = "100%";
        ifrm.width = "100%";
        ifrm.style.border = '0px';
        return ifrm;
    }

}
