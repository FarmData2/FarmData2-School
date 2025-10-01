// modules/farm_fd2_school/vite.config.js
import { fileURLToPath, URL } from 'node:url';
import glob from 'file:///home/fd2dev/FarmData2/node_modules/glob/glob.js';
import { defineConfig } from 'file:///home/fd2dev/FarmData2/node_modules/vite/dist/node/index.js';
import { viteStaticCopy } from 'file:///home/fd2dev/FarmData2/node_modules/vite-plugin-static-copy/dist/index.js';
import vue from 'file:///home/fd2dev/FarmData2/node_modules/@vitejs/plugin-vue/dist/index.mjs';
import { exec } from 'child_process';
import Components from 'file:///home/fd2dev/FarmData2/node_modules/unplugin-vue-components/dist/vite.mjs';
import { BootstrapVueNextResolver } from 'file:///home/fd2dev/FarmData2/node_modules/unplugin-vue-components/dist/resolvers.mjs';
var __vite_injected_original_import_meta_url =
  'file:///home/fd2dev/FarmData2/modules/farm_fd2_school/vite.config.js';
var viteConfig = {
  root: 'modules/farm_fd2_school/src/entrypoints',
  publicDir: '../public',
  base: '/fd2_school/',
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
    viteStaticCopy({
      // Copy the Drupal module stuff...
      targets: [
        {
          src: '../module/*.yml',
          dest: '.',
        },
        {
          src: '../module/Controller',
          dest: 'src/',
        },
      ],
    }),
    {
      // This plugin runs after a build and clears the drupal cache so that
      // the live farmos server shows the most recent content.
      name: 'afterBuild',
      closeBundle: async () => {
        await exec(
          'docker exec fd2_farmos drush cr',
          (error, stderr, stdout) => {
            if (error) {
              console.error(`error:  ${error.message}`);
              return;
            }
            if (stderr) {
              console.error(`stderr: ${stderr}`);
              return;
            }
            console.log(`Rebuilding drupal cache...
  ${stdout}`);
          }
        );
      },
    },
  ],
  build: {
    outDir: '../../dist/fd2_school',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('modules/farm_fd2_school/src/entrypoints/*/*.html')
          .map((dir) => {
            let key = dir.split('/').at(-2) + '/' + dir.split('/').at(-1);
            return [key, dir];
          })
      ),
      output: {
        // Ensures that the entry point and css names are not hashed.
        entryFileNames: '[name]/[name].js',
        assetFileNames: '[name]/[name].[ext]',
        chunkFileNames: '[name]/[name].js',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(
        new URL('./src/', __vite_injected_original_import_meta_url)
      ),
      '@comps': fileURLToPath(
        new URL('../../components/', __vite_injected_original_import_meta_url)
      ),
      '@libs': fileURLToPath(
        new URL('../../library/', __vite_injected_original_import_meta_url)
      ),
      '@css': fileURLToPath(
        new URL('../css/', __vite_injected_original_import_meta_url)
      ),
    },
  },
};
console.log('Building: ');
console.log(viteConfig.build.rollupOptions.input);
var vite_config_default = defineConfig(viteConfig);
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9kdWxlcy9mYXJtX2ZkMl9zY2hvb2wvdml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9mZDJkZXYvRmFybURhdGEyL21vZHVsZXMvZmFybV9mZDJfc2Nob29sXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9mZDJkZXYvRmFybURhdGEyL21vZHVsZXMvZmFybV9mZDJfc2Nob29sL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2ZkMmRldi9GYXJtRGF0YTIvbW9kdWxlcy9mYXJtX2ZkMl9zY2hvb2wvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgZ2xvYiBmcm9tICdnbG9iJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IEJvb3RzdHJhcFZ1ZU5leHRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5cbmxldCB2aXRlQ29uZmlnID0ge1xuICByb290OiAnbW9kdWxlcy9mYXJtX2ZkMl9zY2hvb2wvc3JjL2VudHJ5cG9pbnRzJyxcbiAgcHVibGljRGlyOiAnLi4vcHVibGljJyxcbiAgYmFzZTogJy9mZDJfc2Nob29sLycsXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0Jvb3RzdHJhcFZ1ZU5leHRSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICB2aXRlU3RhdGljQ29weSh7XG4gICAgICAvLyBDb3B5IHRoZSBEcnVwYWwgbW9kdWxlIHN0dWZmLi4uXG4gICAgICB0YXJnZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICcuLi9tb2R1bGUvKi55bWwnLFxuICAgICAgICAgIGRlc3Q6ICcuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJy4uL21vZHVsZS9Db250cm9sbGVyJyxcbiAgICAgICAgICBkZXN0OiAnc3JjLycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICAgIHtcbiAgICAgIC8vIFRoaXMgcGx1Z2luIHJ1bnMgYWZ0ZXIgYSBidWlsZCBhbmQgY2xlYXJzIHRoZSBkcnVwYWwgY2FjaGUgc28gdGhhdFxuICAgICAgLy8gdGhlIGxpdmUgZmFybW9zIHNlcnZlciBzaG93cyB0aGUgbW9zdCByZWNlbnQgY29udGVudC5cbiAgICAgIG5hbWU6ICdhZnRlckJ1aWxkJyxcbiAgICAgIGNsb3NlQnVuZGxlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGV4ZWMoXG4gICAgICAgICAgJ2RvY2tlciBleGVjIGZkMl9mYXJtb3MgZHJ1c2ggY3InLFxuICAgICAgICAgIChlcnJvciwgc3RkZXJyLCBzdGRvdXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBlcnJvcjogICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0ZGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVidWlsZGluZyBkcnVwYWwgY2FjaGUuLi5cXG4gICR7c3Rkb3V0fWApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuLi8uLi9kaXN0L2ZkMl9zY2hvb2wnLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgZ2xvYlxuICAgICAgICAgIC5zeW5jKCdtb2R1bGVzL2Zhcm1fZmQyX3NjaG9vbC9zcmMvZW50cnlwb2ludHMvKi8qLmh0bWwnKVxuICAgICAgICAgIC5tYXAoKGRpcikgPT4ge1xuICAgICAgICAgICAgbGV0IGtleSA9IGRpci5zcGxpdCgnLycpLmF0KC0yKSArICcvJyArIGRpci5zcGxpdCgnLycpLmF0KC0xKTtcbiAgICAgICAgICAgIHJldHVybiBba2V5LCBkaXJdO1xuICAgICAgICAgIH0pXG4gICAgICApLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgZW50cnkgcG9pbnQgYW5kIGNzcyBuYW1lcyBhcmUgbm90IGhhc2hlZC5cbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0vW25hbWVdLmpzJyxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdbbmFtZV0vW25hbWVdLltleHRdJyxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdbbmFtZV0vW25hbWVdLmpzJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQGNvbXBzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLi8uLi9jb21wb25lbnRzLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0BsaWJzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLi8uLi9saWJyYXJ5LycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0Bjc3MnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4uL2Nzcy8nLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc29sZS5sb2coJ0J1aWxkaW5nOiAnKTtcbmNvbnNvbGUubG9nKHZpdGVDb25maWcuYnVpbGQucm9sbHVwT3B0aW9ucy5pbnB1dCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh2aXRlQ29uZmlnKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxlQUFlLFdBQVc7QUFDL1YsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sU0FBUztBQUNoQixTQUFTLFlBQVk7QUFDckIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxnQ0FBZ0M7QUFQMkosSUFBTSwyQ0FBMkM7QUFTclAsSUFBSSxhQUFhO0FBQUEsRUFDZixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMseUJBQXlCLENBQUM7QUFBQSxJQUN4QyxDQUFDO0FBQUEsSUFDRCxlQUFlO0FBQUE7QUFBQSxNQUViLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0Q7QUFBQTtBQUFBO0FBQUEsTUFHRSxNQUFNO0FBQUEsTUFDTixhQUFhLFlBQVk7QUFDdkIsY0FBTTtBQUFBLFVBQ0o7QUFBQSxVQUNBLENBQUMsT0FBTyxRQUFRLFdBQVc7QUFDekIsZ0JBQUksT0FBTztBQUNULHNCQUFRLE1BQU0sV0FBVyxNQUFNLE9BQU8sRUFBRTtBQUN4QztBQUFBLFlBQ0Y7QUFDQSxnQkFBSSxRQUFRO0FBQ1Ysc0JBQVEsTUFBTSxXQUFXLE1BQU0sRUFBRTtBQUNqQztBQUFBLFlBQ0Y7QUFDQSxvQkFBUSxJQUFJO0FBQUEsSUFBaUMsTUFBTSxFQUFFO0FBQUEsVUFDdkQ7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsTUFDYixPQUFPLE9BQU87QUFBQSxRQUNaLEtBQ0csS0FBSyxrREFBa0QsRUFDdkQsSUFBSSxDQUFDLFFBQVE7QUFDWixjQUFJLE1BQU0sSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxNQUFNLElBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQzVELGlCQUFPLENBQUMsS0FBSyxHQUFHO0FBQUEsUUFDbEIsQ0FBQztBQUFBLE1BQ0w7QUFBQSxNQUNBLFFBQVE7QUFBQTtBQUFBLFFBRU4sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxVQUFVLHdDQUFlLENBQUM7QUFBQSxNQUNyRCxVQUFVLGNBQWMsSUFBSSxJQUFJLHFCQUFxQix3Q0FBZSxDQUFDO0FBQUEsTUFDckUsU0FBUyxjQUFjLElBQUksSUFBSSxrQkFBa0Isd0NBQWUsQ0FBQztBQUFBLE1BQ2pFLFFBQVEsY0FBYyxJQUFJLElBQUksV0FBVyx3Q0FBZSxDQUFDO0FBQUEsSUFDM0Q7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxRQUFRLElBQUksWUFBWTtBQUN4QixRQUFRLElBQUksV0FBVyxNQUFNLGNBQWMsS0FBSztBQUVoRCxJQUFPLHNCQUFRLGFBQWEsVUFBVTsiLAogICJuYW1lcyI6IFtdCn0K
