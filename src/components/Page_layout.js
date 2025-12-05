import React from "react";

export default function PageLayout({ header, footer, children }) {
  return (
    <div>
      <div>{header}</div>
      <main>{children}</main>
      <div>{footer}</div>
    </div>
  );
}
