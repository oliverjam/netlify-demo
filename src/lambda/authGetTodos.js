const db = {
  'oliverjamesphillips@gmail.com': {
    todos: ['do the first thing', 'do the another thing', 'plz do this'],
  },
  'oliver.phillips@ticketmaster.co.uk': {
    todos: ['different todos', 'important work', 'also some iccp stuff'],
  },
};

export function handler(event, context, callback) {
  console.log(event);
  const { identity, user } = context.clientContext;
  const { email } = user;
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ todos: db[email].todos }),
  });
}
