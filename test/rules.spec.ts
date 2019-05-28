import { LintResult } from 'tslint'
import { createLinter } from './linter'

describe('tslint standard plus', () => {
  let results: LintResult

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

  beforeAll(() => {
    const linter = createLinter(settings)
    results = linter.getResult()
  })

  test('should contains a valid result object', () => {
    expect(results).toBeTruthy()
  })
})
