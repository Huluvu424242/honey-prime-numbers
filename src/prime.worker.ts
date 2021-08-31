
function  computeFromHere( start: number, print):void{
  let p = start;
  while(true) {
    print(p)
    p++;
  }
}

export const generatePrims = (startNumber: number, printprime: (p: number) => void) => {
  return new Promise(() => {
    computeFromHere(startNumber, printprime);
  });
};

