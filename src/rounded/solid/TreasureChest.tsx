import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TreasureChest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,.072c.327-.047,.661-.072,1-.072h10c.339,0,.673,.025,1,.072V9h-3c0-1.654-1.346-3-3-3s-3,1.346-3,3h-3V.072Zm14,8.928h4v-2c0-2.787-1.637-5.198-4-6.324V9Zm-5,2v1c0,1.654-1.346,3-3,3s-3-1.346-3-3v-1H0v8c0,2.414,1.721,4.435,4,4.899V14c0-.552,.447-1,1-1s1,.448,1,1v10h12V14c0-.552,.447-1,1-1s1,.448,1,1v9.899c2.279-.465,4-2.485,4-4.899V11H15Zm-11-2V.676C1.637,1.802,0,4.213,0,7v2H4Zm8,4c.552,0,1-.449,1-1v-3c0-.551-.448-1-1-1s-1,.449-1,1v3c0,.551,.448,1,1,1Z"/></svg>

);
