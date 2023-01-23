import React from "react";
import BaseIcon from "./BaseIcon";
/**
 * Props
 */
interface Props {
  icons: string[];
}
/**
 * IconsChip
 * @param param0
 * @returns
 */
const IconsChip = ({ icons, ...props }: Props) => {
  return (
    <div className="flex">
      {icons.map((v, k) => (
        <div
          className="bg-slate-200 rounded-full p-2 mx-1 flex-none"
          key={`icon-${k}`}
        >
          <BaseIcon path={v} size="1.5rem" className="fill-slate-800" />
        </div>
      ))}
    </div>
  );
};

export default IconsChip;
