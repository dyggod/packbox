import { App } from 'vue';

const modules = import.meta.globEager('./**/index.ts');

const plugins: any[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  plugins.push(...modList);
});

export default function setupPlugins(app: App) {
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
}
