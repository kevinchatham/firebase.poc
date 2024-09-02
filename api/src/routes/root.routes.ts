import { Hono } from 'hono';
import { userCollection } from '../firestore';

const rootRoutes = new Hono();

rootRoutes.get('/', async (c) => {
  try {
    const query = await userCollection.get();
    const users = query.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return c.json(users);
  } catch (error) {
    console.error(error);
    c.status(500);
    return c.json({ error: `An error occurred: ${JSON.stringify(error)}` });
  }
});

rootRoutes.get('/:name', async (c) => {
  const username = c.req.param('name');

  try {
    const userSnapshot = await userCollection
      .where('name', '==', username)
      .get();

    if (userSnapshot.empty) {
      c.status(404);
      return c.json({ error: 'User not found' });
    }
    const userDoc = userSnapshot.docs[0];
    const user = {
      id: userDoc.id,
      ...userDoc.data(),
    };
    return c.json(user);
  } catch (error) {
    console.error(error);
    c.status(500);
    return c.json({ error: `An error occurred: ${JSON.stringify(error)}` });
  }
});

export default rootRoutes;
