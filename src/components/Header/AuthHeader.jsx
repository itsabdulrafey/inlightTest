import React from "react";
import { Heading,AuthHeading, Img } from "./..";

export default function AuthHeader({ ...props }) {
  return (
    <header {...props} className="container-xs">
      <Img src="images/img_image_19.png" alt="imagenineteen" className="h-[98px] w-[98px] object-cover md:w-full" />
      <ul className="flex flex-wrap gap-[60px] md:gap-5">
        <li>
          <a href="#" className="self-end">
            <AuthHeading size="s" as="h6" className="text-center !text-gray-900_01">
              eFXplus
            </AuthHeading>
          </a>
        </li>
        <li>
          <a href="#" className="self-start">
            <AuthHeading size="s" as="h6" className="text-center !text-gray-900_01">
              Notifications
            </AuthHeading>
          </a>
        </li>
        <li>
          <a href="#" className="self-end">
            <AuthHeading size="s" as="h6" className="text-center !text-gray-900_01">
              Pricing
            </AuthHeading>
          </a>
        </li>
        <li>
          <a href="#" className="self-start">
            <AuthHeading size="s" as="h6" className="text-center !text-gray-900_01">
              FAQs
            </AuthHeading>
          </a>
        </li>
        <li>
          <a href="#" className="self-start">
            <AuthHeading size="s" as="h6" className="text-center !text-gray-900_01">
              About
            </AuthHeading>
          </a>
        </li>
      </ul>
    </header>
  );
}