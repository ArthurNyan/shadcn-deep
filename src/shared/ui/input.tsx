import * as React from "react"
import clsx, { type ClassValue } from "clsx"

function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, id, ...props }, ref) => {
    const inputId = React.useId();
    const [hasValue, setHasValue] = React.useState(false);

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border-transparent bg-grey-200 px-4 py-4 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/40 focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-800 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          onBlur={(e) => {
            setHasValue(e.target.value !== "")
          }}
          onChange={(e) => setHasValue(e.target.value !== "")}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={id || inputId}
          className={cn(
            "absolute left-3 top-3 px-1 text-muted-foreground/40 transition-all duration-200",
            "peer-focus:-translate-y-7 peer-focus:scale-85 peer-focus:text-green-800 z-10",
            hasValue && "-translate-y-7 scale-75 bg-primary top-4 label-shadow left-0",
            "bg-transparent",
            "pointer-events-none",
          )}
        >
          {label}
        </label>
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
