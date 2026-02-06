import * as React from "react";
import { Input } from "@/components/shared/ui/Input";
import { EyeClosedIcon, EyeIcon } from "@phosphor-icons/react";

const PasswordInput = React.forwardRef(
  ({ className, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative w-full text-Grayscale-600">
        <Input
          type={showPassword ? "text" : "password"}
          className={className}
          error={error}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-Primary-600 hover:text-Primary-700 focus:outline-none transition-all ease-in-out"
        >
          {showPassword ? (
            <EyeIcon className="h-5 w-5 transition-all ease-in-out" />
          ) : (
            <EyeClosedIcon className="h-5 w-5 transition-all ease-in-out" />
          )}
        </button>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
