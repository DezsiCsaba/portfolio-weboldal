export function getPathGenDefaultConf() {
  return {
    frequency: null,
    width: 1440,
    height: 320,
    amplitude: 40,
    offset: 160,
    step: 10
  }
}

export function generatePath(conf = { ...getPathGenDefaultConf() }) {
  if (conf.frequency === null) {
    conf.frequency = 2 * Math.PI / conf.width
  }

  let path = `M0,${conf.offset}`
  const step = conf.step // smaller step = smoother curve
  for (let x = step; x <= conf.width; x += step) {
    const y = conf.offset + conf.amplitude * Math.sin(conf.frequency * x)
    path += ` L${x},${y.toFixed(2)}`
  }
  path += ` L${conf.width},${conf.height} L0,${conf.height} Z` // close at bottom
  return path
}
