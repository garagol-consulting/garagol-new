import type { ReactNode } from "react";

// CSS phone bezel (in this site's tokens) that wraps a raw mobile screenshot
// or video. The screenshot provides the color; the frame stays neutral.
export default function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={"phone " + className}>
      <div className="phone__screen">{children}</div>
    </div>
  );
}
