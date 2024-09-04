module.exports ={
    preset:"jest-playwright-preset",
    verbose:true,
    testTimeout:850000,
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    testRunner:"jasmine2",
    reporters: ["default",
    ["jest-junit",{outputDirectory:"reports",outputName:"report.xml"}],
    "jest-allure"],
    testMatch:["<rootDir>/tests/test/**/?(*.)(test|spec).ts",
    "**/*.spec.ts",],
    transform:{
        "^.+\\.ts$":"ts-jest",
    },
    workerIdleMemoryLimit:0.2,
}