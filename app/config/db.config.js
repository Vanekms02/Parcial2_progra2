module.exports = {
    HOST: "ep-square-sunset-ad86rsqh-pooler.c-2.us-east-1.aws.neon.tech",
    DB: "neondb",
    USER: "neondb_owner",
    PASSWORD: "npg_fa9mMrTLuC3N",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
};