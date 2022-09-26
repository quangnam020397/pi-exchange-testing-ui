const BE_CONFIG = {
  BASE_URL: '${BE_URL}',
  PREFIX: '${BE_PREFIX}',
  VERSION: '${BE_VERSION}',
};

const MCE_CONFIG = {
  API_KEY: 'my-api-key',
};

export const environment = {
  production: true,
  BE_CONFIG,
  MCE_CONFIG,
};
