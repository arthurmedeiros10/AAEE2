// db.js - Base de dados com todos os cursos

var db = {
    cursos: [
      // ============================================================
      // CURSO 1: Engenharia Civil (ID 1 - dados reais)
      // ============================================================
      {
        id: 1,
        nome: 'Engenharia Civil',
        turno: 'Integral',
        salariosAtuais: [
          {
            cargo: 'Engenheiro Civil CBO',
            salario: 9600.48,
            referencia: 'https://www.salario.com.br/profissao/engenheiro-civil-cbo-214205/'
          }
        ],
        cotas: [
          {
            ano: 2016,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 11, notaMinima: 2830 },
              { tipo: 'publica', vagas: 7, candidatos: 152, notaMinima: 3080 },
              { tipo: 'universal', vagas: 9, candidatos: 280, notaMinima: 4191 }
            ]
          },
          {
            ano: 2017,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 11, notaMinima: 2858 },
              { tipo: 'publica', vagas: 7, candidatos: 111, notaMinima: 3306 },
              { tipo: 'universal', vagas: 9, candidatos: 181, notaMinima: 4305 }
            ]
          },
          {
            ano: 2018,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 3, notaMinima: "n/a" },
              { tipo: 'publica', vagas: 7, candidatos: 91, notaMinima: 2903 },
              { tipo: 'universal', vagas: 9, candidatos: 153, notaMinima: 4282 }
            ]
          },
          {
            ano: 2019,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 3, notaMinima: "n/a" },
              { tipo: 'publica', vagas: 7, candidatos: 68, notaMinima: 2983 },
              { tipo: 'universal', vagas: 9, candidatos: 137, notaMinima: 4113 }
            ]
          },
          {
            ano: 2020,
            tipoCota: [
              { tipo: 'negro', vagas: 4, candidatos: 2, notaMinima: 2825 },
              { tipo: 'publica', vagas: 15, candidatos: 87, notaMinima: 3001 },
              { tipo: 'universal', vagas: 18, candidatos: 178, notaMinima: 3717 }
            ]
          },
          {
            ano: 2021,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 2, notaMinima: "n/a" },
              { tipo: 'publica', vagas: 8, candidatos: 77, notaMinima: 3055 },
              { tipo: 'universal', vagas: 9, candidatos: 151, notaMinima: 4341 }
            ]
          },
          {
            ano: 2022,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: 4, candidatos: 3, notaMinima: 1492 },
              { tipo: 'publica', vagas: 15, candidatos: 45, notaMinima: 2346 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 14, candidatos: 83, notaMinima: 3888 }
            ]
          },
          {
            ano: 2023,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 1, notaMinima: 2194 },
              { tipo: 'publica_negro', vagas: 4, candidatos: 3, notaMinima: 1866 },
              { tipo: 'publica', vagas: 15, candidatos: 34, notaMinima: 2545 },
              { tipo: 'pcd', vagas: 2, candidatos: 1, notaMinima: "n/a" },
              { tipo: 'universal', vagas: 14, candidatos: 60, notaMinima: 3761 }
            ]
          },
          {
            ano: 2024,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 4, notaMinima: 2396 },
              { tipo: 'publica_negro', vagas: 4, candidatos: 4, notaMinima: 1735 },
              { tipo: 'publica', vagas: 5, candidatos: 33, notaMinima: 3329 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 17, candidatos: 78, notaMinima: 4035 }
            ]
          },
          {
            ano: 2025,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 4, notaMinima: 2485 },
              { tipo: 'publica_negro', vagas: 4, candidatos: 3, notaMinima: 2169 },
              { tipo: 'publica', vagas: 5, candidatos: 26, notaMinima: 3206 },
              { tipo: 'pcd', vagas: 2, candidatos: 2, notaMinima: 2694 },
              { tipo: 'universal', vagas: 17, candidatos: 48, notaMinima: 4000 }
            ]
          }
        ],
        analise: "Curso com alta concorrência e um dos maiores salários."
      },
  
      // ============================================================
      // CURSO 2: Direito (ID 2 - dados reais)
      // ============================================================
      {
        id: 2,
        nome: 'Direito',
        turno: 'Noturno',
        salariosAtuais: [
          {
            cargo: 'Advogado CBO',
            salario: 5639.49,
            referencia: 'https://www.salario.com.br/profissao/advogado-cbo-241005/'
          }
        ],
        cotas: [
          {
            ano: 2016,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 19, notaMinima: 2635 },
              { tipo: 'publica', vagas: 10, candidatos: 228, notaMinima: 3139 },
              { tipo: 'universal', vagas: 13, candidatos: 434, notaMinima: 4004 }
            ]
          },
          {
            ano: 2017,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 19, notaMinima: 3220 },
              { tipo: 'publica', vagas: 10, candidatos: 208, notaMinima: 3746 },
              { tipo: 'universal', vagas: 13, candidatos: 388, notaMinima: 4266 }
            ]
          },
          {
            ano: 2018,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 15, notaMinima: 2869 },
              { tipo: 'publica', vagas: 10, candidatos: 210, notaMinima: 3635 },
              { tipo: 'universal', vagas: 13, candidatos: 299, notaMinima: 4534 }
            ]
          },
          {
            ano: 2019,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 9, notaMinima: 2652 },
              { tipo: 'publica', vagas: 11, candidatos: 173, notaMinima: 2730 },
              { tipo: 'universal', vagas: 13, candidatos: 284, notaMinima: 3397 }
            ]
          },
          {
            ano: 2020,
            tipoCota: [
              { tipo: 'negro', vagas: 5, candidatos: 7, notaMinima: "n/a" },
              { tipo: 'publica', vagas: 21, candidatos: 189, notaMinima: 3563 },
              { tipo: 'universal', vagas: 26, candidatos: 273, notaMinima: 4373 }
            ]
          },
          {
            ano: 2021,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 12, notaMinima: 3163 },
              { tipo: 'publica', vagas: 10, candidatos: 133, notaMinima: 3861 },
              { tipo: 'universal', vagas: 13, candidatos: 323, notaMinima: 4700 }
            ]
          },
          {
            ano: 2022,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 9, notaMinima: 2966 },
              { tipo: 'publica_negro', vagas: 5, candidatos: 13, notaMinima: 2187 },
              { tipo: 'publica', vagas: 21, candidatos: 143, notaMinima: 3002 },
              { tipo: 'pcd', vagas: 3, candidatos: 2, notaMinima: 2457 },
              { tipo: 'universal', vagas: 20, candidatos: 254, notaMinima: 4422 }
            ]
          },
          {
            ano: 2023,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 10, notaMinima: 2543 },
              { tipo: 'publica_negro', vagas: 5, candidatos: 19, notaMinima: 2316 },
              { tipo: 'publica', vagas: 21, candidatos: 169, notaMinima: 3663 },
              { tipo: 'pcd', vagas: 3, candidatos: 3, notaMinima: 3250 },
              { tipo: 'universal', vagas: 20, candidatos: 149, notaMinima: 4361 }
            ]
          },
          {
            ano: 2024,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 8, notaMinima: 3549 },
              { tipo: 'publica_negro', vagas: 5, candidatos: 18, notaMinima: 3401 },
              { tipo: 'publica', vagas: 7, candidatos: 123, notaMinima: 3829 },
              { tipo: 'pcd', vagas: 3, candidatos: 3, notaMinima: 2809 },
              { tipo: 'universal', vagas: 20, candidatos: 210, notaMinima: 4669 }
            ]
          },
          {
            ano: 2025,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 13, notaMinima: 3740 },
              { tipo: 'publica_negro', vagas: 5, candidatos: 18, notaMinima: 3936 },
              { tipo: 'publica', vagas: 7, candidatos: 149, notaMinima: 4238 },
              { tipo: 'pcd', vagas: 3, candidatos: 6, notaMinima: 3113 },
              { tipo: 'universal', vagas: 20, candidatos: 225, notaMinima: 4920 }
            ]
          }
        ],
        analise: "Curso tradicional com alta concorrência e notas elevadas."
      },
  
      // ============================================================
      // CURSO 3: Educação Física - Bacharelado (ID 3 - dados reais)
      // ============================================================
      {
        id: 3,
        nome: 'Educação Física - Bacharelado',
        turno: 'Integral',
        salariosAtuais: [
          {
            cargo: 'Personal Training CBO',
            salario: 2982.86,
            referencia: 'https://www.salario.com.br/profissao/personal-training-cbo-224120/'
          }
        ],
        cotas: [
          {
            ano: 2016,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 4, notaMinima: 2006 },
              { tipo: 'publica', vagas: 7, candidatos: 96, notaMinima: 2469 },
              { tipo: 'universal', vagas: 9, candidatos: 118, notaMinima: 2633 }
            ]
          },
          {
            ano: 2017,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 2, notaMinima: 1728 },
              { tipo: 'publica', vagas: 7, candidatos: 60, notaMinima: 2145 },
              { tipo: 'universal', vagas: 9, candidatos: 89, notaMinima: 2809 }
            ]
          },
          {
            ano: 2018,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 3, notaMinima: 2102 },
              { tipo: 'publica', vagas: 7, candidatos: 60, notaMinima: 2323 },
              { tipo: 'universal', vagas: 9, candidatos: 95, notaMinima: 2891 }
            ]
          },
          {
            ano: 2019,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 5, notaMinima: 2258 },
              { tipo: 'publica', vagas: 7, candidatos: 44, notaMinima: 2192 },
              { tipo: 'universal', vagas: 9, candidatos: 109, notaMinima: 3045 }
            ]
          },
          {
            ano: 2020,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica', vagas: 15, candidatos: 45, notaMinima: 2101 },
              { tipo: 'universal', vagas: 18, candidatos: 90, notaMinima: 2680 }
            ]
          },
          {
            ano: 2021,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 3, notaMinima: 1567 },
              { tipo: 'publica', vagas: 8, candidatos: 39, notaMinima: 2709 },
              { tipo: 'universal', vagas: 9, candidatos: 62, notaMinima: 2907 }
            ]
          },
          {
            ano: 2022,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 4, notaMinima: 2936 },
              { tipo: 'publica_negro', vagas: 4, candidatos: 7, notaMinima: 1927 },
              { tipo: 'publica', vagas: 15, candidatos: 65, notaMinima: 2438 },
              { tipo: 'pcd', vagas: 2, candidatos: 3, notaMinima: 1666 },
              { tipo: 'universal', vagas: 14, candidatos: 72, notaMinima: 3009 }
            ]
          },
          {
            ano: 2023,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 2, notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: 4, candidatos: 5, notaMinima: 2446 },
              { tipo: 'publica', vagas: 15, candidatos: 45, notaMinima: 2367 },
              { tipo: 'pcd', vagas: 2, candidatos: 2, notaMinima: 1243 },
              { tipo: 'universal', vagas: 14, candidatos: 76, notaMinima: 3247 }
            ]
          },
          {
            ano: 2024,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: 5, candidatos: 9, notaMinima: 1976 },
              { tipo: 'publica', vagas: 6, candidatos: 68, notaMinima: 2869 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 18, candidatos: 85, notaMinima: 3278 }
            ]
          },
          {
            ano: 2025,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 6, notaMinima: 2288 },
              { tipo: 'publica_negro', vagas: 5, candidatos: 9, notaMinima: 2215 },
              { tipo: 'publica', vagas: 6, candidatos: 75, notaMinima: 2934 },
              { tipo: 'pcd', vagas: 2, candidatos: 5, notaMinima: 2267 },
              { tipo: 'universal', vagas: 18, candidatos: 84, notaMinima: 3554 }
            ]
          }
        ],
        analise: "Curso com concorrência moderada e menor salário entre os analisados."
      },
  
      // ============================================================
      // CURSO 4: Engenharia de Alimentos (ID 4 - dados reais)
      // ============================================================
      {
        id: 4,
        nome: 'Engenharia de Alimentos',
        turno: 'Integral',
        salariosAtuais: [
          {
            cargo: 'Engenheiro de Alimentos CBO',
            salario: 5758.32,
            referencia: 'https://www.salario.com.br/profissao/engenheiro-de-alimentos-cbo-222205/'
          }
        ],
        cotas: [
          {
            ano: 2016,
            tipoCota: [
              { tipo: 'negro', vagas: 1, candidatos: 4, notaMinima: "n/a" },
              { tipo: 'publica', vagas: 6, candidatos: 35, notaMinima: 2249 },
              { tipo: 'universal', vagas: 7, candidatos: 51, notaMinima: 2883 }
            ]
          },
          {
            ano: 2017,
            tipoCota: [
              { tipo: 'negro', vagas: 1, candidatos: 1, notaMinima: 2113 },
              { tipo: 'publica', vagas: 7, candidatos: 20, notaMinima: 2381 },
              { tipo: 'universal', vagas: 7, candidatos: 37, notaMinima: 2764 }
            ]
          },
          {
            ano: 2018,
            tipoCota: [
              { tipo: 'negro', vagas: 1, candidatos: 2, notaMinima: "n/a" },
              { tipo: 'publica', vagas: 6, candidatos: 27, notaMinima: 2349 },
              { tipo: 'universal', vagas: 8, candidatos: 38, notaMinima: 2900 }
            ]
          },
          {
            ano: 2019,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica', vagas: 7, candidatos: 15, notaMinima: 2400 },
              { tipo: 'universal', vagas: 8, candidatos: 38, notaMinima: 2816 }
            ]
          },
          {
            ano: 2020,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 1, notaMinima: 1907 },
              { tipo: 'publica', vagas: 12, candidatos: 11, notaMinima: 2155 },
              { tipo: 'universal', vagas: 15, candidatos: 35, notaMinima: 2382 }
            ]
          },
          {
            ano: 2021,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica', vagas: 8, candidatos: 13, notaMinima: 2051 },
              { tipo: 'universal', vagas: 7, candidatos: 27, notaMinima: 3239 }
            ]
          },
          {
            ano: 2022,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: 3, candidatos: 1, notaMinima: 1694 },
              { tipo: 'publica', vagas: 12, candidatos: 11, notaMinima: 1859 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 11, candidatos: 23, notaMinima: 2279 }
            ]
          },
          {
            ano: 2023,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 1, notaMinima: 3353 },
              { tipo: 'publica_negro', vagas: 3, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica', vagas: 12, candidatos: 15, notaMinima: 1611 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 11, candidatos: 21, notaMinima: 2885 }
            ]
          },
          {
            ano: 2024,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica', vagas: 4, candidatos: 11, notaMinima: 1840 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 11, candidatos: 14, notaMinima: 2148 }
            ]
          },
          {
            ano: 2025,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: 3, candidatos: 2, notaMinima: 2714 },
              { tipo: 'publica', vagas: 4, candidatos: 8, notaMinima: 2354 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 11, candidatos: 12, notaMinima: 2192 }
            ]
          }
        ],
        analise: "Curso com baixa concorrência e boas oportunidades de mercado."
      },
  
      // ============================================================
      // CURSO 5: Turismo (ID 5 - dados reais)
      // ============================================================
      {
        id: 5,
        nome: 'Turismo',
        turno: 'Matutino',
        salariosAtuais: [
          {
            cargo: 'Turismólogo CBO',
            salario: 3889.84,
            referencia: 'https://www.salario.com.br/profissao/turismologo-cbo-122520/'
          }
        ],
        cotas: [
          {
            ano: 2016,
            tipoCota: [
              { tipo: 'negro', vagas: 1, candidatos: 3, notaMinima: 2209 },
              { tipo: 'publica', vagas: 6, candidatos: 13, notaMinima: 1900 },
              { tipo: 'universal', vagas: 7, candidatos: 40, notaMinima: 2223 }
            ]
          },
          {
            ano: 2017,
            tipoCota: [
              { tipo: 'negro', vagas: 1, candidatos: 1, notaMinima: "n/a" },
              { tipo: 'publica', vagas: 4, candidatos: 19, notaMinima: 2590 },
              { tipo: 'universal', vagas: 5, candidatos: 29, notaMinima: 2892 }
            ]
          },
          {
            ano: 2018,
            tipoCota: [
              { tipo: 'negro', vagas: 1, candidatos: 1, notaMinima: 2181 },
              { tipo: 'publica', vagas: 8, candidatos: 14, notaMinima: 1932 },
              { tipo: 'universal', vagas: 9, candidatos: 18, notaMinima: 2387 }
            ]
          },
          {
            ano: 2019,
            tipoCota: [
              { tipo: 'negro', vagas: 1, candidatos: 2, notaMinima: 1117 },
              { tipo: 'publica', vagas: 6, candidatos: 18, notaMinima: 2399 },
              { tipo: 'universal', vagas: 8, candidatos: 25, notaMinima: 2619 }
            ]
          },
          {
            ano: 2020,
            tipoCota: [
              { tipo: 'negro', vagas: 3, candidatos: 1, notaMinima: "n/a" },
              { tipo: 'publica', vagas: 12, candidatos: 7, notaMinima: 2161 },
              { tipo: 'universal', vagas: 15, candidatos: 14, notaMinima: 1656 }
            ]
          },
          {
            ano: 2021,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 1, notaMinima: 2602 },
              { tipo: 'publica', vagas: 6, candidatos: 5, notaMinima: 2184 },
              { tipo: 'universal', vagas: 7, candidatos: 8, notaMinima: 2243 }
            ]
          },
          {
            ano: 2022,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: 1, notaMinima: 1759 },
              { tipo: 'publica_negro', vagas: 3, candidatos: 3, notaMinima: 1848 },
              { tipo: 'publica', vagas: 12, candidatos: 9, notaMinima: 1960 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 11, candidatos: 10, notaMinima: 1759 }
            ]
          },
          {
            ano: 2023,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica', vagas: 12, candidatos: 8, notaMinima: 2091 },
              { tipo: 'pcd', vagas: 2, candidatos: 1, notaMinima: 2767 },
              { tipo: 'universal', vagas: 11, candidatos: 7, notaMinima: 1406 }
            ]
          },
          {
            ano: 2024,
            tipoCota: [
              { tipo: 'negro', vagas: "n/a", candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: 3, candidatos: 2, notaMinima: 2797 },
              { tipo: 'publica', vagas: 4, candidatos: 7, notaMinima: 2539 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 11, candidatos: 6, notaMinima: 2434 }
            ]
          },
          {
            ano: 2025,
            tipoCota: [
              { tipo: 'negro', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica_negro', vagas: 3, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'publica', vagas: 4, candidatos: 1, notaMinima: 1737 },
              { tipo: 'pcd', vagas: 2, candidatos: "n/a", notaMinima: "n/a" },
              { tipo: 'universal', vagas: 11, candidatos: 4, notaMinima: 1987 }
            ]
          }
        ],
        analise: "Curso com menor concorrência e boa relação custo-benefício."
      }
    ]
  };
  
  // Log para debug
  console.log('✅ Banco de dados carregado com', db.cursos.length, 'cursos:');
  db.cursos.forEach(c => console.log(`  - ${c.nome}`));