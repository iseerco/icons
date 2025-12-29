import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TalentAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,14H6v-2c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v2Zm-6-6c-2.206,0-4-1.794-4-4S9.794,0,12,0s4,1.794,4,4-1.794,4-4,4Zm-2.176,15.926l-.48-.362.869-2.717-2.212-1.231v-.615h2.899l.784-3h.648l.784,3h2.883v.611l-2.197,1.273.884,2.686-.504.349-2.173-1.68-2.183,1.687Zm-7.997-3l-.48-.362.869-2.717L.003,16.615v-.615h2.899l.784-3h.648l.784,3h2.883v.611l-2.197,1.273.884,2.686-.504.349-2.173-1.68-2.183,1.687Zm15.996,0l-.48-.362.869-2.717-2.212-1.231v-.615h2.899l.784-3h.648l.784,3h2.883v.611l-2.197,1.273.884,2.686-.504.349-2.173-1.68-2.183,1.687Z"/>
</svg>

);
