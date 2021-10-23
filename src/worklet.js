/**
 * 
 */
class DrawnLine {
  static get inputProperties() {
    return [
      '--drawn-line-color', 
      '--drawn-line-wiggle', 
      '--drawn-line-strength',
      '--drawn-line-segment-size',
      '--drawn-line-curve-range'
    ]
  }
  paint(ctx, geom, props) {
    // segmentation of the width
    const segmentTargetLength = props.get('--drawn-line-segment-size').value || 12; // approximate length of each segment
    const segments = Math.floor(geom.width / segmentTargetLength); // how many segments are possible?
    const segmentLength = geom.width / segments; // get the accurate length of each segment

    const randomYRange = props.get('--drawn-line-curve-range').value || 1;
    const lineStrength = props.get('--drawn-line-strength').value || 2;
    const verticalBasePos = geom.height - lineStrength - randomYRange;
    const fuzzyness = props.get('--drawn-line-wiggle').value || 1;
    
    const color = props.get('--drawn-line-color').toString() || 'black';
    
    const randomBetween = (_min, _max) => {
      return Math.random() * (_max - _min) + _min;
    };
    
    // got the idea from this article for the "fuzz": https://29a.ch/2010/2/10/hand-drawn-lines-algorithm-javascript-canvas-html5
    const fuzz = (_x, _f = fuzzyness) => _x + Math.random()*_f - _f/2;
    
    ctx.beginPath();
    ctx.moveTo(0, verticalBasePos);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineStrength;
      for (let i = 0; i < segments; i++) {
        let prevPos = (geom.width / segments) * i; // the previous position 
        let nextPos = prevPos + segmentLength; // what the curve is drawing towards
        let randomY = randomBetween(verticalBasePos+randomYRange, verticalBasePos-randomYRange); // randomize the curve's end-position
        let randomCpY = randomBetween(verticalBasePos+randomYRange, verticalBasePos-randomYRange);
        
        ctx.quadraticCurveTo(
          prevPos + fuzz(segmentLength/2), fuzz(randomCpY),
          nextPos, fuzz(randomY)
        );
      }
    
      ctx.stroke();
    ctx.closePath();
    
  }
}

registerPaint("drawn-line", DrawnLine);
