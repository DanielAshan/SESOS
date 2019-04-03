exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("users",
    {
        id: "id",
        username: {
            type: "varchar(100)",
            notNull: true,
        },
        password: {
            type: "varchar(100)",
            notNull: true,
        },
        first_name: {
            type: "varchar(100)",
            notNull: true,
        },
        last_name: {
            type: "varchar(100)",
            notNull: true,
        },
        email: {
            type: "varchar(200)",
            notNull: true,
        },
        createdAt: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp")
          }
    });
};

exports.down = (pgm) => {

};
