import sql from 'mssql';
import config from './dbconnect'; // Adjust path if needed

async function testConnection(): Promise<void> {
  try {
    const pool = await sql.connect(config);
    console.log('Connected successfully!');
    await pool.close(); // Cleanly close the connection
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection();

