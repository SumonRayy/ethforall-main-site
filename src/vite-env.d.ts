/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_W3M_PROJECT_ID: string;
  readonly VITE_SUREPASS_API_TOKEN: string;
  readonly VITE_MODEL_URL: string;
  readonly VITE_POLYGON_CONTRACT: string;
  readonly VITE_GOERLI_CONTRACT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
