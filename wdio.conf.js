exports.config = {
    // Definindo o ambiente do WebDriverIO
    runner: 'local',
    path: '/',
    specs: [
        './tests/features/**/*.feature'  // Caminho para os arquivos .feature
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554', // ou o nome do seu dispositivo
        'appium:app': './apk/calculator.apk', // Caminho para o seu APK
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.darkempire78.opencalculator', // nome do pacote do seu app
        'appium:appActivity': 'com.darkempire78.opencalculator/.activities.MainActivity', // atividade principal encontrada
        'appium:noReset': true, // Não resetar o app a cada execução
        'appium:fullContextList': true,
        'appium:newCommandTimeout': 240
    }],
    logLevel: 'info', // nível de log
    bail: 0,
    baseUrl: 'http://127.0.0.1:4723/wd/hub', // URL do servidor Appium
    waitforTimeout: 10000, // Tempo de espera
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        ['appium']
    ],
    framework: 'cucumber', // ou 'mocha' se estiver usando Mocha
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./tests/steps/**/*.js'], // Caminho para os arquivos de steps
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: false,
        source: true
    },
    before: () => {
        // Configurações iniciais antes dos testes, se necessário
    },
    after: () => {
        // Limpeza ou configurações após os testes, se necessário
    },
};
