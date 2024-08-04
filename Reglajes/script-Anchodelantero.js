document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const resultadoElemento = document.getElementById('resultado');

    const valoresAsignados = {
        rectas: {
            cortas: 1,
            largas: 2
        },
        curvas: {
            reviradas: 1,
            abiertas: 2
        },
        asfalto: {
            "poco-grip": 1,
            "mucho-grip": 2
        },
        temperatura: {
            "x-a-10": 1,
            "11-20": 2,
            "21-a-y": 3
        },
        compuesto: {
            duro: 1,
            blando: 2
        },
        meteorologia: {
            seco: 1,
            mojado: 2
        }
    };

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const rectas = document.getElementById('rectas').value;
        const curvas = document.getElementById('curvas').value;
        const asfalto = document.getElementById('asfalto').value;
        const temperatura = document.getElementById('temperatura').value;
        const compuesto = document.getElementById('compuesto').value;
        const meteorologia = document.getElementById('meteorologia').value;

        const valorRectas = valoresAsignados.rectas[rectas];
        const valorCurvas = valoresAsignados.curvas[curvas];
        const valorAsfalto = valoresAsignados.asfalto[asfalto];
        const valorTemperatura = valoresAsignados.temperatura[temperatura];
        const valorCompuesto = valoresAsignados.compuesto[compuesto];
        const valorMeteorologia = valoresAsignados.meteorologia[meteorologia];

        const valorTotal = 5 + valorRectas + valorCurvas + valorAsfalto + valorTemperatura + valorCompuesto + valorMeteorologia;

        let nivel;
        if (valorTotal < 3) {
            nivel = 'Bajo';
        } else if (valorTotal >= 3 && valorTotal < 6) {
            nivel = 'Medio';
        } else {
            nivel = 'Alto';
        }

        resultadoElemento.innerHTML = `La altura es de: ${nivel}`;
    });
});

