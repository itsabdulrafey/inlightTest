import React from "react";
import { Heading, Img } from "./..";

export default function Header2({ ...props }) {
  return (
    <header {...props}>
      <div className="flex w-full items-center justify-between gap-5 md:flex-col">
        <Img src="images/img_image_19.png" alt="imagenineteen" className="h-[98px] w-[98px] object-cover md:w-full" />
        <ul className="flex flex-wrap gap-[60px] p-[18px] md:gap-5">
          <li>
            <a href="eFXplus" target="_blank" rel="noreferrer" className="self-end">
              <Heading size="s" as="h6" className="text-center">
                eFXplus
              </Heading>
            </a>
          </li>
          <li>
            <a href="Notifications" target="_blank" rel="noreferrer">
              <Heading size="s" as="h6" className="text-center">
                Notifications
              </Heading>
            </a>
          </li>
          <li>
            <a href="Pricing" target="_blank" rel="noreferrer" className="self-end">
              <Heading size="s" as="h6" className="text-center">
                Pricing
              </Heading>
            </a>
          </li>
          <li>
            <a href="FAQs" target="_blank" rel="noreferrer">
              <Heading size="s" as="h6" className="text-center">
                FAQs
              </Heading>
            </a>
          </li>
          <li>
            <a href="About" target="_blank" rel="noreferrer">
              <Heading size="s" as="h6" className="text-center">
                About
              </Heading>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
