// script.js - Análise Diagnóstica com 4 gráficos individuais

// ============================================================
// UTILITÁRIOS
// ============================================================

/** Obtém todos os anos disponíveis nos dados */
function getAllAnos() {
    const anosSet = new Set();
    db.cursos.forEach(curso => {
        curso.cotas.forEach(cota => {
            if (cota.ano) anosSet.add(cota.ano);
        });
    });
    return Array.from(anosSet).sort((a, b) => a - b);
}

/** Retorna os dados de candidatos por tipo de cota para um curso */
function getDadosPorCota(curso, anos) {
    const mapa = {};

    // Inicializa estrutura para cada tipo de cota
    curso.cotas.forEach(cota => {
        cota.tipoCota.forEach(tipo => {
            if (!mapa[tipo.tipo]) {
                mapa[tipo.tipo] = {};
            }
            // Converte "n/a" para 0 (zero) para não quebrar o gráfico
            const valor = tipo.candidatos === "n/a" ? 0 : Number(tipo.candidatos);
            mapa[tipo.tipo][cota.ano] = isNaN(valor) ? 0 : valor;
        });
    });

    // Converte para arrays alinhados com os anos
    const resultado = {};
    Object.keys(mapa).forEach(tipo => {
        resultado[tipo] = anos.map(ano => mapa[tipo][ano] || 0);
    });

    return resultado;
}

/** Paleta de cores para os tipos de cota */
const CORES_COTAS = {
    'negro': { bg: 'rgba(111, 66, 193, 0.3)', border: '#6f42c1' },
    'publica': { bg: 'rgba(13, 110, 253, 0.3)', border: '#0d6efd' },
    'universal': { bg: 'rgba(25, 135, 84, 0.3)', border: '#198754' },
    'publica_negro': { bg: 'rgba(253, 126, 20, 0.3)', border: '#fd7e14' },
    'pcd': { bg: 'rgba(220, 53, 69, 0.3)', border: '#dc3545' }
};

/** Nomes amigáveis para os tipos de cota */
const NOMES_COTAS = {
    'negro': 'Cota Negro',
    'publica': 'Cota Pública',
    'universal': 'Ampla Concorrência',
    'publica_negro': 'Cota Pública + Negro',
    'pcd': 'Cota PCD'
};

// ============================================================
// CRIA UM GRÁFICO INDIVIDUAL PARA UM CURSO
// ============================================================

function criarGraficoCurso(cursoId, canvasId) {
    // Busca o curso pelo ID
    const curso = db.cursos.find(c => c.id === cursoId);
    if (!curso) {
        console.error(`❌ Curso ID ${cursoId} não encontrado.`);
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            const parent = canvas.parentElement;
            parent.innerHTML = `<p class="text-muted text-center py-4">⚠️ Curso não encontrado</p>`;
        }
        return;
    }

    console.log(`📊 Criando gráfico para: ${curso.nome} (ID ${curso.id})`);

    const anos = getAllAnos();
    if (anos.length === 0) {
        console.warn(`⚠️ Nenhum ano disponível para ${curso.nome}`);
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            const parent = canvas.parentElement;
            parent.innerHTML = `<p class="text-muted text-center py-4">⚠️ Nenhum dado disponível</p>`;
        }
        return;
    }

    const dadosPorCota = getDadosPorCota(curso, anos);

    // Monta os datasets
    const datasets = [];
    Object.keys(dadosPorCota).forEach(tipo => {
        const cor = CORES_COTAS[tipo] || { bg: 'rgba(128, 128, 128, 0.3)', border: '#808080' };
        const dados = dadosPorCota[tipo];

        // Pula se todos os dados forem zero (exceto PCD, que deve aparecer como linha zero)
        if (tipo !== 'pcd' && dados.every(v => v === 0)) return;

        datasets.push({
            label: NOMES_COTAS[tipo] || tipo,
            data: dados,
            borderColor: cor.border,
            backgroundColor: cor.bg,
            borderWidth: 2.5,
            tension: 0.2,
            pointRadius: 5,
            pointHoverRadius: 9,
            pointBackgroundColor: cor.border,
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            fill: false,
            spanGaps: false
        });
    });

    // Se não houver datasets, mostra mensagem
    if (datasets.length === 0) {
        console.warn(`⚠️ Nenhum dado disponível para ${curso.nome}`);
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            const parent = canvas.parentElement;
            parent.innerHTML = `<p class="text-muted text-center py-4">⚠️ Dados insuficientes para gerar gráfico de ${curso.nome}</p>`;
        }
        return;
    }

    // Ordena datasets para consistência visual
    const ordemPrioridade = ['negro', 'publica', 'universal', 'publica_negro', 'pcd'];
    datasets.sort((a, b) => {
        const idxA = ordemPrioridade.indexOf(a.label);
        const idxB = ordemPrioridade.indexOf(b.label);
        return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
    });

    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`❌ Canvas ${canvasId} não encontrado.`);
        return;
    }

    const ctx = canvas.getContext('2d');

    // Destroi gráfico anterior se existir
    if (window.charts && window.charts[canvasId]) {
        window.charts[canvasId].destroy();
    }

    // Cria o gráfico
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: anos,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: true,
                    text: `Candidatos por Tipo de Cota - ${curso.nome}`,
                    font: { size: 14, weight: 'bold' },
                    color: '#0d6efd',
                    padding: { bottom: 12 }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 16,
                        font: { size: 11 },
                        boxWidth: 14
                    }
                },
                tooltip: {
                    intersect: true,
                    mode: 'index',
                    callbacks: {
                        title: function(tooltipItems) {
                            return `📅 ${tooltipItems[0].label}`;
                        },
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const valor = context.parsed.y;
                            return `${label}: ${valor} candidato${valor !== 1 ? 's' : ''}`;
                        },
                        footer: function(tooltipItems) {
                            let total = 0;
                            tooltipItems.forEach(item => {
                                total += item.parsed.y;
                            });
                            return `📊 Total: ${total} candidatos`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Ano',
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: { display: true, color: '#e9ecef' }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Nº de Candidatos',
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: { display: true, color: '#e9ecef' },
                    beginAtZero: true
                }
            },
            interaction: {
                mode: 'index',
                intersect: true
            }
        }
    });

    // Armazena referência para destruir depois
    if (!window.charts) window.charts = {};
    window.charts[canvasId] = chart;

    console.log(`✅ Gráfico criado: ${curso.nome} (${canvasId}) com ${datasets.length} linhas`);
}

// ============================================================
// GERAR ANÁLISE DIAGNÓSTICA
// ============================================================

function gerarAnaliseDiagnostica() {
    const container = document.getElementById('analiseContainer');
    if (!container) return;

    // Cursos para análise (excluindo Turismo - ID 5)
    const cursosAnalise = db.cursos.filter(c => c.id !== 5);
    const anos = getAllAnos();

    let html = `
        <div class="row">
            <div class="col-12">
                <h5 class="mb-3"><i class="fas fa-search me-2"></i>Diagnóstico por Curso</h5>
            </div>
    `;

    cursosAnalise.forEach(curso => {
        // Dados por ano
        let totalCandidatos = {};
        let totalVagas = {};
        let concorrencia = {};

        curso.cotas.forEach(cota => {
            const ano = cota.ano;
            totalCandidatos[ano] = 0;
            totalVagas[ano] = 0;
            cota.tipoCota.forEach(tipo => {
                const cand = tipo.candidatos === "n/a" ? 0 : Number(tipo.candidatos);
                const vag = tipo.vagas === "n/a" ? 0 : Number(tipo.vagas);
                if (!isNaN(cand)) totalCandidatos[ano] += cand;
                if (!isNaN(vag)) totalVagas[ano] += vag;
            });
            concorrencia[ano] = totalVagas[ano] > 0 
                ? (totalCandidatos[ano] / totalVagas[ano]).toFixed(2) 
                : 0;
        });

        // Tendência (comparação 2016 vs 2025)
        const primeiroAno = anos[0];
        const ultimoAno = anos[anos.length - 1];
        const candidatosInicio = totalCandidatos[primeiroAno] || 0;
        const candidatosFim = totalCandidatos[ultimoAno] || 0;
        const variacao = candidatosFim - candidatosInicio;
        const tendencia = variacao > 0 ? '📈 aumento' : (variacao < 0 ? '📉 queda' : '➡️ estável');
        const variacaoPercentual = candidatosInicio > 0 
            ? ((variacao / candidatosInicio) * 100).toFixed(1) 
            : 0;

        // Pico de candidatos
        let picoAno = null;
        let picoValor = 0;
        Object.keys(totalCandidatos).forEach(ano => {
            if (totalCandidatos[ano] > picoValor) {
                picoValor = totalCandidatos[ano];
                picoAno = ano;
            }
        });

        // Maior concorrência
        let maiorConcAno = null;
        let maiorConcValor = 0;
        Object.keys(concorrencia).forEach(ano => {
            if (concorrencia[ano] > maiorConcValor) {
                maiorConcValor = concorrencia[ano];
                maiorConcAno = ano;
            }
        });

        // Cota mais procurada
        const somaPorCota = {};
        curso.cotas.forEach(cota => {
            cota.tipoCota.forEach(tipo => {
                if (!somaPorCota[tipo.tipo]) somaPorCota[tipo.tipo] = 0;
                const cand = tipo.candidatos === "n/a" ? 0 : Number(tipo.candidatos);
                if (!isNaN(cand)) {
                    somaPorCota[tipo.tipo] += cand;
                }
            });
        });
        let cotaMaisProcurada = '';
        let cotaMaiorValor = 0;
        Object.keys(somaPorCota).forEach(tipo => {
            if (somaPorCota[tipo] > cotaMaiorValor) {
                cotaMaiorValor = somaPorCota[tipo];
                cotaMaisProcurada = NOMES_COTAS[tipo] || tipo;
            }
        });

        // Valores válidos para menor demanda
        const valoresValidos = Object.values(totalCandidatos).filter(v => v > 0);
        const menorDemanda = valoresValidos.length > 0 ? Math.min(...valoresValidos) : 0;

        html += `
            <div class="col-lg-6 mb-3">
                <div class="insight-box">
                    <strong><i class="fas fa-graduation-cap me-1"></i> ${curso.nome}</strong>
                    <ul class="mb-0 mt-2">
                        <li>📊 <strong>Tendência:</strong> ${tendencia} de ${Math.abs(variacaoPercentual)}% (${candidatosInicio} → ${candidatosFim} candidatos)</li>
                        <li>📌 <strong>Pico de candidatos:</strong> ${picoValor} em ${picoAno}</li>
                        <li>⚡ <strong>Maior concorrência:</strong> ${maiorConcValor} cand/vaga em ${maiorConcAno}</li>
                        <li>🎯 <strong>Cota mais procurada:</strong> ${cotaMaisProcurada || 'N/A'} (${cotaMaiorValor} candidatos no total)</li>
                        <li>📉 <strong>Menor demanda:</strong> ${menorDemanda} candidatos</li>
                    </ul>
                </div>
            </div>
        `;
    });

    html += `
            <div class="col-12 mt-3">
                <div class="insight-box">
                    <strong>💡 Conclusão Diagnóstica</strong>
                    <ul class="mb-0 mt-2">
                        <li><strong>Direito</strong> e <strong>Engenharia Civil</strong> mantêm alta demanda estável.</li>
                        <li><strong>Educação Física</strong> apresentou queda significativa pós-2020, possivelmente devido à pandemia.</li>
                        <li><strong>Engenharia de Alimentos</strong> tem demanda crescente, refletindo tendências do mercado.</li>
                        <li>A cota <strong>Ampla Concorrência</strong> é a mais procurada em todos os cursos.</li>
                        <li>Cotas <strong>PCD</strong> e <strong>Pública + Negro</strong> têm menor volume de candidatos.</li>
                        <li>A cota <strong>PCD</strong> em Engenharia de Alimentos não registrou candidatos em nenhum ano.</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// ============================================================
// INICIALIZAR
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando Análise Diagnóstica...');
    console.log('📚 Cursos disponíveis:', db.cursos.map(c => `${c.id} - ${c.nome}`).join(', '));

    // Cria os 4 gráficos (IDs 1, 2, 3, 4 - excluindo Turismo ID 5)
    setTimeout(function() {
        criarGraficoCurso(1, 'chartEngCivil');
        criarGraficoCurso(2, 'chartDireito');
        criarGraficoCurso(3, 'chartEduFisica');
        criarGraficoCurso(4, 'chartEngAlimentos');

        // Gera análise diagnóstica
        gerarAnaliseDiagnostica();
    }, 100);

    console.log('✅ Análise Diagnóstica inicializada com 4 gráficos!');
});