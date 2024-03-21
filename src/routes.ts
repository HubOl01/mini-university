import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',  
  SCHEDULE: 'schedule',
  MOODLE: 'moodle',
  NOTES: 'notes',
  SETTINGS: 'settings'
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.SCHEDULE, `/${DEFAULT_VIEW_PANELS.SCHEDULE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MOODLE, `/${DEFAULT_VIEW_PANELS.MOODLE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.NOTES, `/${DEFAULT_VIEW_PANELS.NOTES}`, []),
      createPanel(DEFAULT_VIEW_PANELS.SETTINGS, `/${DEFAULT_VIEW_PANELS.SETTINGS}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
