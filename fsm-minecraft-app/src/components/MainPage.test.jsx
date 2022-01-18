import '@testing-library/jest-dom'
import React from 'react'
import {render} from '@testing-library/react'
import MainPage from './MainPage'

describe('MainPage component unit tests', () => {
    test('Renders without crashing', () => {
        const {getByText} = render(<MainPage />)

        expect(getByText('Sand')).toBeInTheDocument();
    })
})