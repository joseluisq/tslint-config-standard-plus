import { LintResult } from 'tslint'
import { createLinter, TSLintShortFailure } from './linter'

describe('tslint standard plus', () => {
  const results: TSLintShortFailure[] = []
  let rawResults: LintResult

  const settings = {
    typescript: {
      configFile: 'test/tsconfig.json'
    },
    tslint: {
      configFile: 'tslint.json',
      options: {
        fix: false,
        formatter: 'json'
      }
    }
  }

  const asRelativePath = (path: string) => path.replace(process.cwd() + '/', '')

  beforeAll(() => {
    rawResults = createLinter(settings).getResult()

    const { failures } = rawResults

    for (let i = 0; i < failures.length; i++) {
      const rawFailure = failures[i]

      results.push({
        id: i,
        failure: rawFailure.getFailure(),
        fileName: asRelativePath(rawFailure.getFileName()),
        ruleName: rawFailure.getRuleName()
      })
    }
  })

  test('should contains a valid raw results object', () => {
    expect(rawResults).toBeTruthy()
  })

  test('should contains a valid results array', () => {
    expect(results).toBeTruthy()
    expect(Array.isArray(results)).toBeTruthy()
    expect(results.length).toBeGreaterThan(0)
  })

  test('should match current snapshot', () => {
    expect(results).toMatchSnapshot()
  })

  test('should contains 26 errors', () => {
    expect(rawResults.errorCount).toBe(26)
  })

  test('should contains 7 warnings', () => {
    expect(rawResults.warningCount).toBe(7)
  })
})
