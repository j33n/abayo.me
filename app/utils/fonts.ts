import { Exo_2, Sacramento } from "next/font/google";

export const exo2 = Exo_2({
  weight: ["100", "200", "100", "300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const sacramento = Sacramento({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
});
