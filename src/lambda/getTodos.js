const db = {
  todos: ['do the first thing', 'do the another thing', 'plz do this'],
};

export function handler(event, context, callback) {
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ todos: db.todos }),
  });
}
