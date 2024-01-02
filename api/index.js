//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;
// Sincronizamos la tabla/ creamos la tabla
// Syncing all the models at once.
conn.sync({ force: true }).then(() => { // el force: true elimina la tabla y luego la vuelve a crear  
  // Cambiarlo a { alter: true } que aplica los cambios necesarios a la tabla actual para que coincida con el modelo
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  });
});
