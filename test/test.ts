import * as expect from 'expect'
import { describe, it } from 'mocha'
import { getMinimumChange, getSortedSquareArray } from '../src/app'

describe('Test Suite', function () {
  describe('Non-Constructible Change', function () {
    it('First case', async () => {
      const coins: Array<number> = [5, 7, 1, 1, 2, 3, 22]
      const result = getMinimumChange(coins)
      expect(result).toBe(20)
    })
    it('Second case', async () => {
      const coins: Array<number> = [1, 1, 1, 1, 1]
      const result = getMinimumChange(coins)
      expect(result).toBe(6)
    })
    it('Third case', async () => {
      const coins: Array<number> = [1, 5, 1, 1, 1, 10, 15, 20, 100]
      const result = getMinimumChange(coins)
      expect(result).toBe(55)
    })
  })

  describe('Sorted Squared Array', function () {
    it('First case', async () => {
      const array: Array<number> = [1, 2, 3, 5, 6, 8, 9]
      const result = getSortedSquareArray(array)
      expect(result).toStrictEqual([1, 4, 9, 25, 36, 64, 81])
    })
    it('Second case', async () => {
      const array: Array<number> = [-2, -1]
      const result = getSortedSquareArray(array)
      expect(result).toStrictEqual([1, 4])
    })
    it('Third case', async () => {
      const array: Array<number> = [-10, -5, 0, 5, 10]
      const result = getSortedSquareArray(array)
      expect(result).toStrictEqual([0, 25, 25, 100, 100])
    })
  })


})
