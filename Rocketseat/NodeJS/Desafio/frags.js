function getFlagValue(flag) {
  const index = process.argv.indexOF(flag) + 1
  return process.argv[index]
}
module.exports = getFlagValue