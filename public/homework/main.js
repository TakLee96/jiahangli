var MAP_WIDTH = 4084;
var MAP_HEIGHT = 3164;
var MIN_SCALE = 0.2;
var MAX_SCALE = 20.0;
var MIN_RATIO = 0.25;
var MAX_RATIO = 4;
var DEFAULT_SCALE = config.scale;
var DEFAULT_RATIO = MAP_WIDTH / MAP_HEIGHT;

var data = {
    mouse: {
        isDown: false,
        toDrag: true,
        x: 0, y: 0
    },
    map: { x: 0, y: 0 },
    box: { x: 0, y: 0 },
    boxElem: null,
    containerElem: null,
    imageElem: null,
    controlElems: null
};

function mouseDown(evt) {
    evt.preventDefault();

    data.mouse.x = evt.clientX;
    data.mouse.y = evt.clientY;
    data.mouse.isDown = true;

    if (data.mouse.toDrag) {
        this.style.cursor = "-webkit-grabbing";
    } else {
        data.boxElem = document.createElement("div");
        data.boxElem.style.height = "0px";
        data.boxElem.style.width = "0px";
        data.boxElem.style.left = evt.clientX + "px";
        data.boxElem.style.top = evt.clientY + "px";
        data.boxElem.style.cursor = "crosshair";
        data.boxElem.classList.add("box");
        data.boxElem.addEventListener("mousemove", mouseMove.bind(data.imageElem));
        data.boxElem.addEventListener("mouseup", mouseUp.bind(data.imageElem));

        data.containerElem.appendChild(data.boxElem);

        data.box.x = evt.clientX;
        data.box.y = evt.clientY;
    }
}

function mouseUp(evt) {
    data.mouse.isDown = false;

    if (data.mouse.toDrag) {
        this.style.cursor = "-webkit-grab";

        var deltaX = evt.clientX - data.mouse.x;
        var deltaY = evt.clientY - data.mouse.y;
        data.map.x = data.map.x + deltaX;
        data.map.y = data.map.y + deltaY;
    } else {
        var deltaX = evt.clientX - data.box.x;
        var deltaY = evt.clientY - data.box.y;      
        data.box.x = (deltaX < 0) ? evt.clientX : data.box.x;
        data.box.y = (deltaY < 0) ? evt.clientY : data.box.y;
        var width = Math.abs(deltaX);
        var height = Math.abs(deltaY);
        var ratio = config.box.height / height;
        var rect = data.containerElem.getBoundingClientRect();

        data.map.x += rect.left - data.map.x - ratio * (data.box.x - data.map.x);
        data.map.y += rect.top - data.map.y - ratio * (data.box.y - data.map.y);
        this.style.left = data.map.x + "px";
        this.style.top = data.map.y + "px";

        config.scale *= ratio;
        renderBox();

        data.boxElem.remove();
        data.boxElem = null;
    }
}
    
function mouseMove(evt) {
    if (data.mouse.isDown) {
        var deltaX = evt.clientX - data.mouse.x;
        var deltaY = evt.clientY - data.mouse.y;

        if (data.mouse.toDrag) {
            this.style.left = data.map.x + deltaX + "px";
            this.style.top = data.map.y + deltaY + "px";
        } else {
            data.boxElem.style.width = Math.abs(deltaX) + "px";
            data.boxElem.style.height = Math.abs(deltaY) + "px";
            if (deltaY < 0) {
                data.boxElem.style.top = data.box.y + deltaY + "px";
            } else {
                data.boxElem.style.top = data.box.y + "px";
            }
            if (deltaX < 0) {
                data.boxElem.style.left = data.box.x + deltaX + "px";
            } else {
                data.boxElem.style.left = data.box.x + "px";
            }
        }
    }
}

function changeCtrl(evt) {
    if (this.value === "drag") {
        data.imageElem.style.cursor = "-webkit-grab";
    } else {
        data.imageElem.style.cursor = "crosshair";
    }
    data.mouse.toDrag = (this.value === "drag");
}

function renderBox() {
    data.containerElem.style.width = config.box.width + "px";
    data.containerElem.style.height = config.box.height + "px";
    data.imageElem.style.width = MAP_WIDTH * config.scale + "px";
}

function resize() {
    config.scale = DEFAULT_SCALE;
    config.box.width = MAP_WIDTH * DEFAULT_SCALE;
    config.box.height = MAP_HEIGHT * DEFAULT_SCALE;
    data.imageElem.style.left = "0px";
    data.imageElem.style.top = "0px";
    data.map.x = 0;
    data.map.y = 0;
    renderBox();
}

function main(evt) {
    data.containerElem = document.getElementById("container");
    data.imageElem = document.getElementById("container-map");
    data.controlElems = document.getElementById("control").mouse;

    renderBox();
    changeCtrl.apply(data.controlElems[0]);

    var rect = data.containerElem.getBoundingClientRect();

    data.imageElem.addEventListener("mousedown", mouseDown);
    data.imageElem.addEventListener("mouseup", mouseUp);
    data.imageElem.addEventListener("mousemove", mouseMove);
    document.getElementById("control").resize.addEventListener("click", resize);

    for (var i = 0; i < data.controlElems.length; i++) {
        data.controlElems[i].addEventListener("click", changeCtrl);
    }
}