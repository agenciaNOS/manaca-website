import { render } from '@testing-library/react'
import Index from '../pages/index'
import '@testing-library/jest-dom'

describe('Index', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index />)
    expect(asFragment()).toMatchSnapshot()
  })
})