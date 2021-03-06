import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import photoUploader from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await photoUploader({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
