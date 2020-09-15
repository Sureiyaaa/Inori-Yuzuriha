module.exports = async (client, error) => {
    client.logger.log(`[${new Date().toLocaleString()}] Error > ${JSON.stringify(error)}`, "error");
};