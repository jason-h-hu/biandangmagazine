import bands1 from './rubber_bands_1.svg';
import bands2 from './rubber_bands_2.svg';
import bands3 from './rubber_bands_3.svg';
import bands4 from './rubber_bands_4.svg';
import bands5 from './rubber_bands_5.svg';
import bands6 from './rubber_bands_6.svg';


export default function getRandomBands(count=1) {
  let res = []
  const pool = [bands1, bands2, bands3, bands4, bands5, bands6];
  while (count > 0) {
    const randomIndex = Math.floor(pool.length * Math.random());
    res = res.concat(pool.splice(randomIndex, 1));
    count--;
  }
  return res;
}