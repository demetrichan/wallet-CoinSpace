import { fileURLToPath } from 'node:url';
import { init } from '@sentry/electron';
import log from 'electron-log';
import { Menu, app, net, protocol } from 'electron';
