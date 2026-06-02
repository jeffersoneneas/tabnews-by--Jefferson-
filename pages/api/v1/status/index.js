import database from "infra/database";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  // VERSION DB
  const databaseVersionResult = await database.query("SHOW server_version;");
  const version = databaseVersionResult[0].server_version;

  // MAX CONNECTIONS
  const databaseMaxConnectionResult = await database.query(
    "SHOW max_connections;",
  );
  const max_connections = parseInt(
    databaseMaxConnectionResult[0].max_connections,
  );

  const databaseName = process.env.POSTGRES_DB;
  // OPENED CONNECTIONS
  const databaseOpenedConnections = await database.query({
    text: "SELECT COUNT(*) FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const opened_connections = parseInt(databaseOpenedConnections[0].count);

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: version,
        max_connections: max_connections,
        opened_connections: opened_connections,
      },
    },
  });
}

export default status;
