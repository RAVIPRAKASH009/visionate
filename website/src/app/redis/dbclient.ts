import { createClient, RedisClientType } from "redis";

declare global {
  var redisDbClient: any;
}


async function getRedisClient(): Promise<RedisClientType> {
  if (!global.redisDbClient) {
    global.redisDbClient = createClient({
      url: process.env.REDIS_URL,
    });

    global.redisDbClient.on("error", (err:Error) => {
      console.error("Redis Client Error", err);
    });

    await global.redisDbClient.connect();
  }

  return global.redisDbClient;
}

const client = await getRedisClient();

client.on("error", (err: any) => console.log("Redis Client Error", err));

export { client as redisDbClient };
