import { defineConfig, devices } from '@playwright/test'
import type { TestOptions } from './test-options/test-options'

export const setupDir = 'playwright/.setup'
export const setupFile = `${setupDir}/user.json`

export default defineConfig<TestOptions>({
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:8080/',
  },
  projects: [
    // Setup project
    { name: 'setup', testDir: './test-setup/', testMatch: '*' },
    {
      name: 'chromium',
      testDir: './tests/',
      use: {
        ...devices['Desktop Chrome'],
        // Use "database" with existing accounts
        storageState: setupFile,
      },
      dependencies: ['setup'],
    },
  ],
})