// codewars
function getSize(width, height, depth){
    let surfaceArea = 2 * (depth * width + width * height + height * depth);
    let volume = depth * width * height;
    return [surfaceArea, volume];
}