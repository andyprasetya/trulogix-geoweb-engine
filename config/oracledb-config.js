module.exports = {
  user          : process.env.NODE_ORACLEDB_USER || "__UPDATE_ME_AS_NECESSARY__",
  password      : process.env.NODE_ORACLEDB_PASSWORD || "__UPDATE_ME_AS_NECESSARY__",
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "[__HOST/IP__]:[__PORT__]/[__TNS_NAME__]",
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
