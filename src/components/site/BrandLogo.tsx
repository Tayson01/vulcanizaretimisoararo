import logo from "@/assets/logo-v2.webp";
import logoDark from "@/assets/logo-v2-dark.webp";

export function BrandLogo({ size = "md" }: { size?: "md" | "lg" }) {
  const w =
    size === "lg"
      ? "h-12 w-auto max-w-full sm:h-14"
      : "h-8 w-auto max-w-[10rem] sm:h-9 sm:max-w-[11rem] lg:h-10 lg:max-w-[12rem]";
  return (
    <span className="flex min-w-0 shrink-0 items-center">
      <img
        width={640}
        height={124}
        src={logo}
        alt="Vulcanizare Non Stop Timișoara"
        className={`shrink-0 object-contain object-left block ${w} dark:hidden`}
      />
      <img
        width={640}
        height={124}
        src={logoDark}
        loading="lazy"
        alt="Vulcanizare Non Stop Timișoara"
        className={`hidden shrink-0 object-contain object-left ${w} dark:!block`}
      />
    </span>
  );
}
