import sql from 'mssql';

const config: sql.config = {
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || '',
  database: process.env.DB_NAME || '',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function executeQuery(query: string): Promise<any[] | null> {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    console.error('Error executing SQL query:', error);
    return null;
  }
}

export default config;

