const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

async function initializeDatabase() {
  let conn;
  try {
    // Verify MySQL connection
    console.log('Conecting to MySQL...');
    
    conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      multipleStatements: true
    });

    console.log('✅ Connected to MySQL');

    // Read and execute SQL script to create and initialize the database
    const sqlFile = path.join(__dirname, 'database.sql');
    const sqlScript = fs.readFileSync(sqlFile, 'utf8');

    console.log('Executing SQL script...');

    await conn.query(sqlScript);

    console.log('✅ Database initialized successfully!');
    console.log(`\n✅ Now you can run: npm run dev\n`);

    // Advice for next steps if something goes wrong
  } catch (error) {
    console.error('❌ Error to initialize database:', error.message);
    console.log('\n Make sure that:');
    console.log('   1. MySQL is running');
    console.log('   2. The .env file has correct credentials');
    console.log('   3. The user has permissions to create databases\n');
    process.exit(1);
  } finally {
    if (conn) await conn.end();
  }
}

initializeDatabase();
