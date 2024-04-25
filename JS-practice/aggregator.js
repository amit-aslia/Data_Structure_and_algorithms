const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

/*
  [
  {
    "user": "Bill",
    "skill": [
      "css",
      "javascript"
    ]
  },
  {
    "user": "Chad",
    "skill": [
      "javascript"
    ]
  },
  {
    "user": "Sue",
    "skill": [
      "css",
      "javascript",
      "html"
    ]
  }
]
*/

const aggregate = (arr, primary, secondary) => {
  const result = {};
  for (const elem of arr) {
    if (result[elem[primary]]) {
      result[elem[primary]] = [...result[elem[primary]], elem[secondary]];
    } else {
      result[elem[primary]] = [elem[secondary]];
    }
  }
  const output = Object.keys(result).map((elem) => {
    return {
      [primary]: elem,
      [secondary]: result[elem],
    };
  });
  return output;
};

console.log(aggregate(endorsements, "user", "skill"));
