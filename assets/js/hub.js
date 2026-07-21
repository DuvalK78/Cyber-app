function drawNodeLines(){

    const svg = document.getElementById("node-lines");
    const nodes = document.querySelectorAll(".node");
    const map = document.getElementById("node-map");
    const rect = map.getBoundingClientRect();

    nodes.forEach((nodeA, i)=>{

        const next = nodes[i + 1];

        if(!next) return;

        const a = nodeA.getBoundingClientRect();
        const b = next.getBoundingClientRect();

        const line = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        line.setAttribute("x1", a.left + a.width/2 - rect.left);
        line.setAttribute("y1", a.top + a.height/2 - rect.top);
        line.setAttribute("x2", b.left + b.width/2 - rect.left);
        line.setAttribute("y2", b.top + b.height/2 - rect.top);

        svg.appendChild(line);

    });

}

function initNodes(){

    document.querySelectorAll(".node").forEach(node=>{

        node.addEventListener("click", function(){

            document.querySelectorAll(".node")
            .forEach(n => n.classList.remove("active"));

            this.classList.add("active");

            console.log(
                "CONNECTION_ATTEMPT :: " +
                this.dataset.node
            );

        });

    });

}

drawNodeLines();
initNodes();

window.addEventListener("resize", ()=>{

    document.getElementById("node-lines").innerHTML = "";

    drawNodeLines();

});
function spawnLoreLine(){

    const feed = document.getElementById("lore-feed");

    const line = document.createElement("div");
    line.classList.add("lore-line");

    line.innerText =
        loreFragments[
            Math.floor(Math.random() * loreFragments.length)
        ];

    feed.appendChild(line);

    if(feed.children.length > 4){
        feed.removeChild(feed.children[0]);
    }

    setTimeout(()=>{
        line.remove();
    }, 5000);

}

setInterval(spawnLoreLine, 3500);
function spawnTear(){

    const layer = document.getElementById("glitch-layer");

    const tear = document.createElement("div");
    tear.classList.add("tear");
    tear.style.top = Math.random() * 100 + "%";
    tear.style.animation = "tearFlash .15s ease-out forwards";

    layer.appendChild(tear);

    setTimeout(()=>{
        tear.remove();
    }, 200);

}

function spawnRgbSplit(){

    const layer = document.getElementById("glitch-layer");

    const split = document.createElement("div");
    split.classList.add("rgb-split");
    split.style.animation = "rgbFlash .3s ease-out forwards";

    layer.appendChild(split);

    setTimeout(()=>{
        split.remove();
    }, 300);

}

function scheduleGlitch(){

    const delay = 800 + Math.random() * 2500;

    setTimeout(()=>{

        if(Math.random() > 0.5){
            spawnTear();
        }else{
            spawnRgbSplit();
        }

        scheduleGlitch();

    }, delay);

}

scheduleGlitch();
drawNodeLines();
initNodes();
scheduleGlitch();

window.addEventListener("resize", ()=>{

    document.getElementById("node-lines").innerHTML = "";

    drawNodeLines();

});
