import { Configuration, ILinterOptions, Linter } from 'tslint'
import { IConfigurationFile } from 'tslint/lib/configuration'

/** Linter settings which includes Typescript and TSLint configurations */
export interface TSLinterSettings {
  typescript: {
    configFile: string
    projectDirectory?: string
  }
  tslint: {
    configFile: string
    options: ILinterOptions
  }
}

/** Creates a new Linter (TSLint instance) */
export function createLinter ({ typescript, tslint }: TSLinterSettings) {
  const program = Linter.createProgram(typescript.configFile, typescript.projectDirectory)
  const linter = new Linter(tslint.options, program)
  const files = Linter.getFileNames(program)

  files.forEach((file) => {
    let fileContents = ''
    let configuration: IConfigurationFile | undefined = undefined
    const sourceFile = program.getSourceFile(file)

    if (sourceFile) {
      fileContents = sourceFile.getFullText()
      configuration = Configuration.findConfiguration(tslint.configFile, file).results
    }

    linter.lint(file, fileContents, configuration)
  })

  return linter
}
