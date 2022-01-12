export interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

const mountains2: Mountain[] = []

export function findNameOfTallestMountain(mountainsArray: Mountain[]): string {
  return mountainsArray.reduce((acuum, mountain) => {
    return (acuum = mountain.height > acuum.height ? mountain : acuum);
  }, mountainsArray[0])?.name || '';
  
}
console.log(findNameOfTallestMountain(mountains))
console.log(findNameOfTallestMountain(mountains2))
