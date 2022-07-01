import { CustomButton } from '../CustomButton'

describe('CustomButton', () => {
  it('Should render label', () => {
    const tree = <CustomButton text={'helly'} onPress={() => null} />
    expect(tree).toBeTruthy()
  })
})
