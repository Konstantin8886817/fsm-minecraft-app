import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import MainPage from './MainPage'

const MOCK_BUTTON_TEXT = 'Smelt'

describe('MainPage component unit tests', () => {
  test('Renders without crashing', () => {
    const {getByText} = render(<MainPage />)

    expect(getByText('Sand')).toBeInTheDocument()
    expect(getByText('Add Item')).toBeInTheDocument()
    expect(getByText('Coal')).toBeInTheDocument()
    expect(getByText('Add Fuel')).toBeInTheDocument()
    expect(getByText(MOCK_BUTTON_TEXT)).toBeInTheDocument()
  })

  test('Calls onClick prop when button clicked', () => {
    const handleClick = jest.fn()

    const {queryByText} = render(<MainPage onClick={handleClick()} />)
    fireEvent.click(queryByText(MOCK_BUTTON_TEXT))

    expect(handleClick).toHaveBeenCalledTimes(1);
  })

  test('Buttons disabled if itemQuantity and fuelQuantity are empty', () => {
    const {queryByText} = render(<MainPage />)

    expect(queryByText('Add Item')).toBeDisabled();
    expect(queryByText('Add Fuel')).toBeDisabled();
  })
})
