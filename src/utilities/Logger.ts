import winston = require('winston');

export class Logger{
    static logger = winston.createLogger({
        level : 'verbose',
        transports :[
          new winston.transports.Console({
            level:'info',
            format:winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()

            )
          })

        ]
    });
}