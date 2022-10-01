
mongo -- "$MONGO_INITDB_DATABASE" <<EOF
    var admin = db.getSiblingDB('admin');
    admin.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD');

    db = db.getSiblingDB('xbase')

    db.createUser({
      user: 'xuser',
      pwd: '654321',
      roles: [{ role: 'readWrite', db: 'xbase' }],
    });
    db.createCollection('users')
    db.createCollection('prompts')
EOF