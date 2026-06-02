import database from "infra/database";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  // Querys
  const databaseVersionResult = await database.query("SHOW server_version;");
  const version = databaseVersionResult[0].server_version;

  const databaseMaxConnection = await database.query("SHOW max_connections;");
  const max_connections = parseInt(databaseMaxConnection[0].max_connections);

  const databaseOpenedConnections = await database.query(
    "SELECT COUNT(*) from pg_stat_activity;",
  );

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
