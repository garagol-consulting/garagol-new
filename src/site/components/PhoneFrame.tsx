import type { ReactNode } from "react";

// Premium phone frame in this site's tokens: gradient bezel, Dynamic Island,
// soft offset shadow, optional purple glow and caption. The screenshot provides
// the color; the frame stays neutral. Wraps a raw <img>/<video> as children.
export default function PhoneFrame({
  children,
  glow = false,
  caption,
  className = "",
}: {
  children: ReactNode;
  glow?: boolean;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={"pf " + className}>
      <div className="pf__stage">
        {glow && <div className="pf__glow" aria-hidden="true" />}
        <div className="pf__bezel">
          <div className="pf__screen">
            <div className="pf__island" aria-hidden="true" />
            {children}
          </div>
        </div>
      </div>
      {caption && <div className="pf__cap">{caption}</div>}
    </div>
  );
}
