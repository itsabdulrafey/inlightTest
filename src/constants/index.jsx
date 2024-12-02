import imagess from "assets/images/image 3.svg";
import images2 from "assets/images/shutterstock_2349592357 1 (1).svg";
import images3 from "assets/images/shutterstock_1890281956 1.svg";
import images4 from "assets/images/productImage4.svg";
export const cardsData = [
  {
    id: 0,
    color: "white",
    text: "skyblue",
    image: imagess,
    data: {
      heading1: "eFX ",
      heading2: "Plus HD",
      heading3: "est. USD 199*",
      heading4: "The Standard eFX Trades",
      paragraphs: [
        "Offers institutional Discretionary FX positions in G10 currencies.",
        "Derived from sophisticated Institutional Research and LSEG-Refinitiv IFR.",
        "Features ad-hoc placement with dynamic Entry/Stops/Targets adjustments.",
        "Typically maintains 10-15 active trades in orders.",
      ],
    },
  },
  {
    id: 1,
    color: "white",
    text: "salmon",
    image: images2,
    data: {
      heading1: "eFX ",
      heading2: "Edge",
      heading3: "est. USD 299*",
      heading4: "The Sentiment Trades",
      paragraphs: [
        "Sentiment-based FX positions in G10 currencies.",
        "Generated from eFX’s medium and short term indicators.",
        "Features time-optimized placements and closings.",
        "Delivers an average of 10 new trades every week.",
      ],
    },
  },
  {
    id: 2,
    color: "white",
    text: "lightgreen",
    image: images3,
    data: {
      heading1: "eFX ",
      heading2: "Alpha",
      heading3: "est. USD 399*",
      heading4: "The Systematic Trades",
      paragraphs: [
        "Sentiment-based FX positions in G10 currencies.",
        "Provides quant-based trades for data-driven decision making.",
        "Built on robust institutional mark to market targets and eFX’s comprehensive ledgers.",
        "Features system-orchestrated placements and closings.",
        "Maintains a stable portfolio of 60+ trades.",
      ],
    },
  },
  {
    id: 3,
    color: "white",
    text: "khaki",
    image: images4,
    data: {
      heading1: "eFX ",
      heading2: "Apex",
      heading3: "est. USD 899*",
      heading4: "The Most Powerful Big-Data Stream",
      paragraphs: [
        "Plus, Edge, and Alpha datasets.",
        "Exclusive trades in selective G10 crosses.",
        "Allows API access requests for seamless integration into existing systems.",
        "An average of 100 trades for diversified trading.",
      ],
    },
  },
];
