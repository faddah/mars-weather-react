const barometerFormatted = (pressure) =>
    `${parseFloat(pressure / 100).toFixed(4)} mb`;

export default barometerFormatted;