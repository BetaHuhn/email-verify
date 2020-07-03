import app from './server';
import log from "./utils/log";

/**
 * Connect to database and listen to given port
 */
async function startServer() {
    try {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => log.log("listening on port " + PORT));
    } catch (error) {
      log.error("Server setup failed");
      log.error(error);
      process.exit(1);
    }
}
startServer();