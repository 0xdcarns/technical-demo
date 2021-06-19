const { expect, it } = require('@jest/globals')
const demo = require('./demo')

it('Retrieve Red', () => {
    // == red test ==
    expect(demo.getRed()).toBe('#FF0000')
})

it('Retrieve Green', () => {
    // == green test ==
    expect(demo.getGreen()).toBe('#00FF00')
})

it('Retrieve Blue', () => {
    // == blue test ==
    expect(demo.getBlue()).toBe('#0000FF')
})

it('Retrieve manual color blue', () => {
    // == manual blue ==
    expect(demo.getColorIfExists('BLUE')).toBe('#0000FF')
}) 

it('Retrieve red if wrong color provided', () => {
    // == manual wrong color ==
    expect(demo.getColorIfExists('WRONG')).toBe('#FF0000')
})
