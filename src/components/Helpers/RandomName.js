export default function randomName() {
  const colors = [
    "red",
    "blue",
    "green",
    "black",
    "orange",
    "pink",
    "purple",
    "cyan",
    "yellow",
  ];
  const greekLetter = [
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "Epsilon",
    "Zeta",
    "Theta",
    "Iota",
    "Phi",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const greeks = greekLetter[Math.floor(Math.random() * greekLetter.length)];
  return color + greeks;
}
