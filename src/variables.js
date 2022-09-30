

export const Flex = (justify, direction, align) => `
  display: flex;
  justify-content : ${justify || "center"};
  flex-direction : ${direction || "row"};
  align-items : ${align || "center"};
`