const likes = (names) => {
  const totalLikes = names.length;

  switch (totalLikes) {
    case 0:
      return "no one likes this";

    case 1:
      return `${names[0]} likes this`;

    case 2:
      return `${names[0]} and ${names[1]} like this`;

    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    default:
      const [name1, name2, ...rest] = names;

      return `${name1}, ${name2} and ${rest.length} others like this`;
  }
};

module.exports = likes;
