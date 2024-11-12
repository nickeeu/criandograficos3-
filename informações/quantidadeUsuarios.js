import { getCSS, tickConfig} from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
        }
    }
]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: ('--bg-color'),
        tittle: {
            text: 'Redes sociais com masis usuários',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            tittle: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            tittle: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
}
