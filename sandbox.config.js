// This checkout belongs only to the dedicated AI development backend.
// App IDs are public identifiers, not credentials.
export const SANDBOX_APP_ID = '6acc848435108a05bf31c202';

export function assertSandboxEnvironment(env = {}) {
  if (env.VITE_BASE44_APP_ID !== SANDBOX_APP_ID) {
    throw new Error('[AI sandbox] An explicit, matching sandbox Base44 App ID is required.');
  }
  if (String(env.VITE_BASE44_BACKEND_URL || '').trim()) {
    throw new Error('[AI sandbox] External Base44 backend URLs are forbidden; use the sandbox origin.');
  }
  for (const flag of ['VITE_USE_SERVER_AUTH', 'VITE_USE_D1_API', 'VITE_USE_SERVER_DATA_SYNC', 'VITE_STANDALONE_LOCAL']) {
    if (env[flag] && env[flag] !== 'false') {
      throw new Error(`[AI sandbox] ${flag} must stay disabled.`);
    }
  }
  if (String(env.VITE_WEBSOCKET_ENDPOINT || '').trim()) {
    throw new Error('[AI sandbox] External websocket connections are forbidden.');
  }
  return { appId: SANDBOX_APP_ID, serverUrl: '' };
}
