const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Subtituation'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

const events = new Set(gameEvents.values())
console.log(events);

gameEvents.delete(64);

console.log(`Mot su kien da dien ra trung binh ${90 / gameEvents.size} phut`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`Mot su kien da dien ra trung binh ${90 / gameEvents.size} phut`);

for(const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min} : ${event}`);
}