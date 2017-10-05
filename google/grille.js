const container = document.getElementById('container-grille');


const ask = (heho) => {
	let firstTime = true, 
		n; 


	if (heho) {
	let firsttime = true
	}

	if (firsttime) {
		n = prompt("Quel type de grille veux tu? (choisi un chiffre entre 1 et 100)");
} else {
	n = prompt(" Allo??Quel type de grille veux tu? (choisi un chiffre entre 1 et 100)");
}


 var p = prompt("Valeur entre 1 et 100", "");
 console.log(p)

var drawGrid = function(w, h, id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = (20*p);
    ctx.canvas.height = (20*p);

 console.log(p)

    for (x=0;x<=w;x+=100) {

        for (y=0;y<=h;y+=100) {
 console.log(p)
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();

            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }

    };


    drawGrid(400 , 400, "grid");
		}
	}
}; 


ask(false); 




