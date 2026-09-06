# Calculadora Nutricional

Calculadora de TMB (Taxa Metabólica Basal), TDEE (gasto calórico total) e distribuição de macronutrientes, desenvolvida a pedido de uma nutricionista para uso com pacientes.

## Funcionalidades

- Cálculo de TMB pela fórmula de Mifflin-St Jeor
- Cálculo de TDEE com base no nível de atividade física
- Ajuste calórico automático conforme o objetivo (perder peso, manter ou ganhar massa)
- Distribuição de macronutrientes (proteína, carboidrato e gordura)

## Como usar

1. Preencha sexo, idade, peso e altura
2. Selecione o nível de atividade física
3. Escolha o objetivo (perder, manter ou ganhar peso)
4. Clique em "Calcular" para ver o resultado

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Fórmulas utilizadas

**TMB (Mifflin-St Jeor):**
- Homem: `10 × peso + 6.25 × altura − 5 × idade + 5`
- Mulher: `10 × peso + 6.25 × altura − 5 × idade − 161`

**TDEE:** TMB × fator de atividade (1.2 a 1.9)

**Macros:**
- Proteína: 2g por kg de peso corporal
- Gordura: 25% das calorias totais
- Carboidrato: calorias restantes

## Aviso

Esta ferramenta é um auxílio de cálculo e não substitui avaliação nutricional profissional individualizada.