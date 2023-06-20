import { render, screen } from '@testing-library/react'
import Home from '../../src/app/page.jsx'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('tests home', () => {
        render(<Home />)
        const title = screen.getByText(/Better design for your digital products./i)
        expect(title).toBeInTheDocument()
    })
})