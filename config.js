configs = {

    environment: 'DEV', // Global switch between DEV and PRD environments. Use
    // this in conjunction with: if (config.environment === "XXX"){doStuffHere}
    // Useful when you wanna separate external API keys from DEV and PRD, or
    // to automatically search for Qlik app NAMES in DEV, and IDS in PRD
    // (see QlikConnection.js)

    devQvfNames: {
        ConsumerSales: 'Consumer Sales.qvf',
        InsuranceClaims: 'Insurance Claims 2021.qvf'
    },

    prdQvfNames: {
        ConsumerSales: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        InsuranceClaims: 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy'
    },

    darkTheme: {
        backgroundColor: '#121212'
    },

    Dashboard1: {
        EURUSD_repeat_delay: 30, // Delay in seconds between each API call
        EURUSD_upchange_color: '#007F0E',
        EURUSD_downchange_color: '#AD0000',
    },



    KPIs: {
        NUMBER_OF_DECIMALS: 1,
        NUMBER_FORMAT: 'pt-BR'
    },

    FinanceiroKPIs: {
        NUMBER_OF_DECIMALS: 0,
        NUMBER_FORMAT: 'pt-BR'
    },

    Financeiro: {
        secondsBetweenExchangeRates: 60,
        hoursBetweenSelic: 1,
        hoursBetweenIPCA: 1
    },

    qvfNames: {
        Paineis: "Carteira de Painéis - (trabajo)(1).qvf",
        Florestal: "Carteira Florestal - (trabajo)(1).qvf",
        PatioMadeira: "Indicadores Pátio de Madeira.qvf",
        CeluloseEQuimicos: "Carteira Celulose e Químicos - (trabajo).qvf",
        EstoqueVsPedidos: 'Análise de Estoque vs Pedidos - Mercado Interno - (trabajo)(1).qvf',
        NovaCOOIS: 'Nova COOIS (validação)(2).qvf',
        ApontamentoProd: 'Apontamento de Produção - Florestal - (trabajo)(2).qvf',
        ContasAPagar: 'Contas a Pagar(1).qvf',
        ContasAReceber: 'Contas a Receber(1).qvf',
    },

    weather: {
        secondsBetweenLocationSwitch: 15,
        hoursBetweenDataFetches: 1
    },

    echartsProducao: {
        legendFont: 'Roboto',
        legendFontSize: '14',
        legendFontColor: '#FFFFFF',

        xAxisFont: 'Roboto',
        xAxisFontSize: '14',
        xAxisFontColor: '#FFFFFF',

        seriesFont: 'Roboto',
        seriesFontSize: '12',
        seriesFontColor: '#FFFFFF',

        monthYearFont: 'Roboto',
        monthYearFontSize: '14',
        monthYearFontColor: '#FFFFFF'
    },

    echartsComercial: {
        legendFont: 'Roboto',
        legendFontSize: '14',
        legendFontColor: '#FFFFFF',

        xAxisFont: 'Roboto',
        xAxisFontSizeSmall: '11',
        xAxisFontSize: '16',
        xAxisFontColor: '#FFFFFF',

        seriesFont: 'Roboto',
        seriesFontSize: '16',
        seriesFontColor: '#FFFFFF'
    },

    echartsSupplyChain: {
        legendFont: 'Roboto',
        legendFontSize: '14',
        legendFontColor: '#FFFFFF',

        xAxisFont: 'Roboto',
        xAxisFontSize: '14',
        xAxisFontSizeSmall: '12',
        xAxisFontColor: '#FFFFFF',

        seriesFont: 'Roboto',
        seriesFontSize: '14',
        seriesFontSizeSmall: '12',
        seriesFontColor: '#FFFFFF'
    },

    

}
