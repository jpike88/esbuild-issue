import child from 'child_process';

export function test() {
  process.chdir('client');

  const result = child.spawnSync('npx ng serve --configuration=development', {
    stdio: 'inherit',
    shell: true,
  });
  if (result.status !== 0) {
    throw new Error('Angular build failed!');
  }
}
