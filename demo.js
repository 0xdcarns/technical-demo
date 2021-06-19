// == The colors object contains the basic colors. ==
const colors = {
    RED:   '#FF0000',
    GREEN: '#00FF00',
    BLUE:  '#0000FF'
}

// == getRed should return the color red ==
function getRed() {
    return colors.RED
}

// == getGreen should return the color green ==
function getGreen() {
    return colors.GREEN
}

// == getBlue should return the color blue ==
function getBlue() {
    return colors.GREEN
}

// == getColorIfExists should return color given or RED if specified doesn't exist ==
function getColorIfExists(color) {
    var resultColor = colors[color]
    if (!resultColor) {
        return colors.GREEN
    } 
    return resultColor
}

module.exports = {
    getRed,
    getBlue,
    getGreen,
    getColorIfExists
}
