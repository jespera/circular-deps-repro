import { A } from "../generated/a";

console.log("Testing");

const a = A.construct({fa: 42});

console.log("made an A:", JSON.stringify(a.toValue()));