import { execSync } from 'node:child_process';

const { VITE_DISTRIBUTION } = process.env;

if (!['appx', 'appx-dev', 'mac', 'mas', 'mas-dev', 'snap'].includes(VITE_DISTRIBUTION)) {
  console.error(`Unsupported distribution: ${VITE_DISTRIBUTION}`);
  process.exit(1);
}

function forgePlatform(distribution) {
  switch (distribution) {
    case 'mac':
