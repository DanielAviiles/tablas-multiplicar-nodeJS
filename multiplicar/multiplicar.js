const fs = require('fs');
const colors = require('colors/safe');

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(colors.red(`El valor digitado ${base}, no es un numero`));
      return;
    }
    let data = '';

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base*(i)}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err)
        reject(err);
      else
        resolve(`tabla-${base}-al-${limite}.txt`);
      // console.log('El archivo ha sido creado!');
    });
  });
}

let listarTabla = (base, limite) => {
  console.log(`Tabla del ${base}`.green);
  for (let i = 1; i < limite; i++) {
    console.log(`${base} * ${i} = ${base*(i)}\n`);
  }
}

module.exports = {
  crearArchivo,
  listarTabla
}