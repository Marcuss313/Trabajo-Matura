document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const calculado2Elemento = document.getElementById('calculado2');

    const valoresAsignados = {
        rectas: {
            "cortas": 1,
            "largas": 2
        },
        curvas: {
            "reviradas": 1,
            "abiertas": 2
        },
        asfalto: {
            "poco-grip": 1,
            "mucho-grip": 2
        },
        temperatura: {
            "x-a-10": 1,
            "11-20": 2,
            "21-a-y": 3,
            "30-a-y": -200,
            "40-a-y": -500
            
        },
        compuesto: {
            "duro": 1,
            "blando": 2
        },
        estadoneumatico: {
            "muybien": 1,
            "bien": 2,
            "normal": 3,
            "mal": 4
        },
        meteorologia: {
            "seco": 1,
            "mojado": 2
        }
    };

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const rectas = document.getElementById('rectas').value;
        const curvas = document.getElementById('curvas').value;
        const asfalto = document.getElementById('asfalto').value;
        const temperatura = document.getElementById('temperatura').value;
        const compuesto = document.getElementById('compuesto').value;
        const estadoneumatico = document.getElementById('estadoneumatico').value;
        const meteorologia = document.getElementById('meteorologia').value;

        const valorRectas = valoresAsignados.rectas[rectas];
        const valorCurvas = valoresAsignados.curvas[curvas];
        const valorAsfalto = valoresAsignados.asfalto[asfalto];
        const valorTemperatura = valoresAsignados.temperatura[temperatura];
        const valorCompuesto = valoresAsignados.compuesto[compuesto];
        const valorEstadoneumatico = valoresAsignados.estadoneumatico[estadoneumatico];
        const valorMeteorologia = valoresAsignados.meteorologia[meteorologia];

        const valorTotal = 5 + valorRectas + valorCurvas + valorAsfalto + valorTemperatura + valorCompuesto + valorEstadoneumatico + valorMeteorologia;

        let nivel;
        if (valorTotal <= 10) {
            nivel = '1 Muesca';
        } else if (valorTotal > 10 && valorTotal <= 15) {
            nivel = '2 Muescas';
        } else {
            nivel = '3 Muescas';
        }

        calculado2Elemento.innerHTML = `La altura delantera es de: ${nivel}`;
        calculado2Elemento.innerHTML = `El valor total es: ${valorTotal}`;
    });
});
