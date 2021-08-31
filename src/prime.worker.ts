function isPrime(candidate: number, prims: number[]): boolean {
  let result:boolean = true;
  prims.forEach((value: number) => {
    // vorbedingung: value stets kleiner als candidate
    if (value > 1 && candidate % value === 0) {
      result=false;
    }
  });
  return result;
}

function computeFromHere(ende: number, print: (p: number) => void): void {
  let prims: number[] = [];
  let p = 2;
  while (p < ende || ende === -1) {
    if (isPrime(p, prims)) {
      console.log('### new prim ' + p);
      prims.push(p);
      print(p);
    } else {
      console.log('keine primzahl: ' + p);
    }
    p++;
  }
}

export const generatePrims = async (endNumer: number, printprime: (p: number) => void) => {
  return new Promise<void>(resolve => {
    computeFromHere(endNumer, printprime);
    resolve();
  });
};

