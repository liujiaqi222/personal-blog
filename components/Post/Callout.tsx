import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import {
  Info, 
  AlertTriangle, 
  AlertOctagon, 
  CheckCircle, 
  LucideProps, 
} from "lucide-react";

type CalloutType = "default" | "danger" | "warning" | "info" | "success";


const iconMap: Record<CalloutType, React.ElementType<LucideProps>> = {
  default: Info,
  danger: AlertOctagon, 
  warning: AlertTriangle,
  info: Info,
  success: CheckCircle,
};

const Callout = ({ type = "default", children, ...props }: PropsWithChildren<{ type?: CalloutType }>) => {
  const IconComponent = iconMap[type];

  return (
    <div
      className={cn(
        "my-6 rounded-md border-l-4 px-4 py-1 w-full dark:max-w-none",
        {
          "border-gray-600 bg-gray-100 dark:border-gray-400 dark:bg-gray-800": type === "default",
          "border-red-700 bg-red-100 dark:border-red-500 dark:bg-red-900/30": type === "danger",
          "border-yellow-600 bg-yellow-100 dark:border-yellow-500 dark:bg-yellow-900/30": type === "warning",
          "border-blue-600 bg-blue-100 dark:border-blue-500 dark:bg-blue-900/30": type === "info",
          "border-green-600 bg-green-100 dark:border-green-500 dark:bg-green-900/30": type === "success",
        }
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-start", 
          {
            "text-gray-900 dark:text-gray-300": type === "default",
            "text-red-900 dark:text-red-300": type === "danger",
            "text-yellow-900 dark:text-yellow-300": type === "warning",
            "text-blue-900 dark:text-blue-300": type === "info",
            "text-green-900 dark:text-green-300": type === "success",
          }
        )}
      >
        {IconComponent && (
          <IconComponent
            className="my-6 mr-2 h-5 w-5 flex-shrink-0" 
            aria-hidden="true" 
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default Callout;
