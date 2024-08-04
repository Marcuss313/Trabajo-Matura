document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const calculado1 = document.getElementById('calculado1');

        const valoresAsignados = {
            rectas: {
                cortas: 1,
                largas: -1
            },
            curvas: {
                reviradas: 1,
                abiertas: -1
            },
            asfalto: {
                "poco-grip": 1,
                "mucho-grip": -1
            },
            temperatura: {
                "x-a-10": 1,
                "11-20": 0,
                "21-a-y": -1,
                "30-a-y": -6
            },
            compuesto: {
                duro: 1,
                blando: -1
            },
            meteorologia: {
                seco: 1,
                mojado: -1
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


        calculado1.innerHTML = `El nivel es: ${nivel}`;
    });
});