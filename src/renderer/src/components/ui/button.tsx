import clsx from "clsx"

type ButtonSize = "sm" | "md" | "lg"
type ButtonVariant = "primary" | "outline" | "secondary" | "danger" | ""

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
}

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  disabled?: boolean
  as?: React.ElementType
  [key: string]: any
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "sm",
  className = "",
  disabled = false,
  as = "button",
  ...props
}) => {
  const base =
    "flex items-center justify-center rounded-xl font-semibold transition-all duration-300 select-none focus:outline-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-void-primary text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-[1.02] border-none",
    outline:
      "border border-void-border text-void-text-secondary hover:border-void-primary hover:text-void-primary bg-void-card/50 backdrop-blur-sm shadow-xl",
    secondary:
      "bg-void-border text-white hover:bg-void-border-secondary shadow-lg border-none",
    danger:
      "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white shadow-lg shadow-red-500/10",
    "": "",
  }

  const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none"

  return (
    <button
      className={clsx(
        base,
        sizes[size as ButtonSize],
        variants[variant as ButtonVariant],
        disabled ? disabledClasses : "",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
