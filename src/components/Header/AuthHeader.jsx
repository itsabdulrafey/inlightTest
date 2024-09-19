import React from "react";
import { Heading, AuthHeading, Img } from "./..";

export default function AuthHeader({ ...props }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
      }}
      {...props}
      className="container-xs"
    >
      <Img
        src="images/img_image_19.png"
        alt="imagenineteen"
        className="h-[98px] w-[98px] object-cover md:w-[60px] md:h-[60px]"
      />
      <ul className="flex flex-wrap gap-[60px] md:gap-5 items-center justify-center">
        <li>
          <a href="#" className="self-end">
            <AuthHeading
              size="s"
              as="h6"
              className="text-center !text-gray-900_01 md:text-sm"
            >
              eFXplus
            </AuthHeading>
          </a>
        </li>
        <li>
          <a href="#" className="self-start">
            <AuthHeading
              size="s"
              as="h6"
              className="text-center !text-gray-900_01 md:text-sm"
            >
              Notifications
            </AuthHeading>
          </a>
        </li>
        <li>
          <a href="#" className="self-end">
            <AuthHeading
              size="s"
              as="h6"
              className="text-center !text-gray-900_01 md:text-sm"
            >
              Pricing
            </AuthHeading>
          </a>
        </li>
        <li>
          <a href="#" className="self-start">
            <AuthHeading
              size="s"
              as="h6"
              className="text-center !text-gray-900_01 md:text-sm"
            >
              FAQs
            </AuthHeading>
          </a>
        </li>
        <li>
          <a href="#" className="self-start">
            <AuthHeading
              size="s"
              as="h6"
              className="text-center !text-gray-900_01 md:text-sm"
            >
              About
            </AuthHeading>
          </a>
        </li>
      </ul>
    </header>
  );
}
