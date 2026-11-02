import 'dotenv/config';
import { writeFileSync, mkdirSync } from 'fs';

// One bundle per environment, both served by the stage gateway (testapi.easydmarc.am).
const specs = [
  { env: 'EASYDMARC_PUBLIC_API_SPEC_URL', file: 'specs/easydmarc-openapi.json' },
  { env: 'EASYDMARC_DEV_API_SPEC_URL', file: 'specs/easydmarc-openapi-dev.json' },
];

mkdirSync('specs', { recursive: true });
for (const { env, file } of specs) {
  const url = process.env[env];
  if (!url) {
    console.error(`${env} env variable is not set`);
    process.exit(1);
  }
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Failed to download ${env}: ${response.status} ${response.statusText}`);
    process.exit(1);
  }
  writeFileSync(file, await response.text());
  console.log(`Spec saved to ${file}`);
}
