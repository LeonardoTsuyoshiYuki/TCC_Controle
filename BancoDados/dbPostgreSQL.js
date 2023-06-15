const { Pool } = require('pg');

const pool = new Pool({
    user: 'seu_usuario',
    host: 'seu_host',
    database: 'seu_banco_de_dados',
    password: 'sua_senha',
    port: sua_porta,
  });
  