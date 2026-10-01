type JsTsKata = {
  id: number;
  title: string;
  status: string;
  githubLink: string;
  liveDemo: string;
  concepts: readonly string[];
  description?: string;
};

export const jsTsKatas: readonly JsTsKata[] = [
  {
    id: 1,
    title: "Valid Palindrome",
    status: "Completed",
    description:
      "Given a string s, return true if it is a palindrome, or false otherwise.",
    githubLink:
      "https://github.com/kanan-mehta/JS-TS-Kata/tree/main/src/katas/valid-palindrome",
    liveDemo:
      "https://kanan-js-ts-kata.vercel.app/katas/strings/valid-palindrome",
    concepts: ["palindrome", "two-pointers", "string-normalization"],
  },
];
