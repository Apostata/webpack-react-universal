import fs from 'fs';
import path from 'path';

const nodeModules = path.resolve(__dirname, "../node_modules");
const externals = fs
    .readdirSync(nodeModules)
    .filter(x=> !/\bin|react-universal-component|webpack-flush-chunks/.test(x))
    .reduce((externals, mod) =>{
        externals[mod] = `commonjs ${mod}`;
        return externals;
    },{});
    //pegar tudo do node_modules, menos bin. react-universal...

externals["react-dom/server"] = "commonjs react-dom/server";
export default externals;