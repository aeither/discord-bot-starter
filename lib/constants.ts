import { load } from '../deps.ts'

// export dotenv to Deno.env https://www.woolha.com/tutorials/deno-using-deno-env-and-read-environment-variables-files
await load({ export: true })
/**
 * Deno env
 */
export const DISCORD_BOT_TOKEN = Deno.env.get('DISCORD_BOT_TOKEN') as string
if (!DISCORD_BOT_TOKEN) throw new Error('DISCORD_BOT_TOKEN not found')

export const DISCORD_BOT_ID = BigInt(atob(DISCORD_BOT_TOKEN.split('.')[0]))
