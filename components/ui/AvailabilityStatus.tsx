import { useTranslations } from "next-intl";
import { FunctionComponent } from "react";

interface AvailabilityStatusProps {
  available?: boolean;
}

const AvailabilityStatus: FunctionComponent<AvailabilityStatusProps> = ({
  available,
}) => {
  const t = useTranslations("status");
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${
          available ? "bg-green-700" : "bg-red-500"
        } h-6 w-6 rounded-full animate-pulse`}
      />
      <p className={`${available ? "text-green-700" : "text-red-500"} text-xl`}>
        {available ? t("available") : t("busy")}.
      </p>
    </div>
  );
};

export default AvailabilityStatus;
