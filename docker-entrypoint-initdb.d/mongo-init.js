print('Start #################################################################');

db = db.getSiblingDB('xbase');
db.createUser({
    user: 'xuser',
    pwd: '654321',
    roles: [{role: 'readWrite', db: 'xbase'}],
});
db.createCollection('users');
db.createCollection('prompts');

print('END #################################################################');