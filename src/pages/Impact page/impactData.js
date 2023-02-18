const dataDate = new Date();
const date = dataDate.getDate();
const month = dataDate.getMonth();
const Year = dataDate.getFullYear();
const formatDate = `${date}-${month}-${Year}`;

const ImpactData = [
  {
    id: "1",
    date: formatDate,
    Auther: ["Kiran Ahmad", "Iqra Ahmad"],
    paragraph:
      "It is a program for playing chess which helps players learn coordinates.",
  },
  {
    id: "2",
    date: formatDate,
    Auther: ["Kiran Ahmad", "Iqra Ahmad"],
    paragraph:
      "It is a program for playing chess which helps players learn coordinates.",
  },
];
export default ImpactData;
