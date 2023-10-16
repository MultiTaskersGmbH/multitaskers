import Link from "next/link";
import clsx from "clsx";

const variantStyles = {
  primary:
    "bg-[#85c7c9] text-sm font-semibold text-white shadow-sm hover:bg-teal-500",
  secondary:
    "bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
);

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    "inline-flex items-center justify-center gap-2 rounded-md px-3.5 py-2.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:transition-none",
    variantStyles[variant],
    className,
  );

  return typeof props.href === "undefined" ? (
    <button className="{className}" {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
