const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')
const test = require('blue-tape')

const OUT_FILENAME = path.join(__dirname, 'rules.out')
const TSLINT_BIN = require.resolve('tslint/bin/tslint')
const TSLINT_CMD = `node ${TSLINT_BIN} --config ../tslint.js --project tsconfig.json "rules/**/*.ts"`

test('tslint standard', (t) => {
  exec(TSLINT_CMD, { cwd: __dirname }, (err, stdout, stderr) => {
    t.ok(err)

    const out = relatify(stdout, __dirname).trim()

    if (process.env.GENERATE_ASSETS) {
      return fs.writeFile(OUT_FILENAME, out, (err) => {
        t.notOk(err)
        t.end()
      })
    }

    fs.readFile(OUT_FILENAME, 'utf8', (err, result) => {
      t.notOk(err)

      t.equal(out.trim(), result.trim())
      t.equal(stderr, '')

      t.end()
    })
  })
})

/**
 * Remove all absolute paths when persisting.
 */
function relatify (stdout, dirname) {
  let index

  while ((index = stdout.indexOf(dirname)) > -1) {
    stdout = stdout.substr(0, index) + stdout.substr(index + dirname.length)
  }

  return stdout
}
