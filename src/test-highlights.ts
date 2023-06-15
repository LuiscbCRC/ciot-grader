/*
data structure:
{
  content: {
    text
  },
  position: {
    boundingRect: {
      x1,
      y1,
      x2,
      y2,
      width,
      height,
      pageNumber
    },
    rects: [
      {
        x1,
        y1,
        x2,
        y2,
        width,
        height,
        pageNumber
      }
    ],
    pageNumber
  },
  comment: {
    text,
    grade
  },
  id
}
*/

export const testHighlights = {
  "/1006_220301_Legality101_NA_PRACTICE_7845_Q1-0.pdf": [
    
  ],
  "https://arxiv.org/pdf/1604.02480.pdf": [
    {
      content: {
        text: "SSA",
      },
      position: {
        boundingRect: {
          x1: 816.4599609375,
          y1: 360.1875,
          x2: 848.4677734375,
          y2: 380.1875,
          width: 1019.9999999999999,
          height: 1319.9999999999998,
          pageNumber: 1,
        },
        rects: [
          {
            x1: 816.4599609375,
            y1: 360.1875,
            x2: 848.4677734375,
            y2: 380.1875,
            width: 1019.9999999999999,
            height: 1319.9999999999998,
            pageNumber: 1,
          },
        ],
        pageNumber: 1,
      },
      comment: {
        text: "Static Single Assignment",
        grade: "😎",
      },
      id: "29668244118038056",
    },
  ],
};
