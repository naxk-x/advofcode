const { read } = require("../utils");
const part1 = require("./part-1.js");
const part2 = require("./part-2.js");

describe("Part 1", () => {
  // Part 1
  it.each([
    ["1,0,0,0,99", "2,0,0,0,99"],
    ["2,3,0,3,99", "2,3,0,6,99"],
    ["2,4,4,5,99,0", "2,4,4,5,99,9801"],
    ["1,1,1,4,99,5,6,0,99", "30,1,1,4,2,5,6,0,99"]
  ])('An input of %s requires an output of "%s"', (input, expected) => {
    expect(part1(input).join(",")).toBe(expected);
  });

  // Actual test, Part 1
  it("should produce the correct value for the input data", async () => {
    const data = await read(__dirname, "./data.txt");

    // Once you have a working computer, the first step is to restore the gravity assist program (your puzzle input) to the "1202 program alarm" state it had just before the last computer caught fire. To do this, before running the program, replace position 1 with the value 12 and replace position 2 with the value 2. What value is left at position 0 after the program halts?
    const noun = 12;
    const verb = 2;

    const [first_value] = part1(data, noun, verb);
    expect(first_value).toMatchSnapshot();
  });
});

describe("Part 2", () => {
  // Actual test, Part 2
  it("should produce the correct value for the input data", async () => {
    const input = await read(__dirname, "./data.txt");

    for (var noun = 0; noun < 100; noun++) {
      for (var verb = 0; verb < 100; verb++) {
        const [first_value] = part2(input, noun, verb);
        if (first_value === 19690720) {
          return;
        }
      }
    }

    expect(100 * noun + verb).toMatchSnapshot();
  });
});
