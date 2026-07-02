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
