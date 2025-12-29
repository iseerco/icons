import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBluetoothCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm4.764-14.741l-4.892-4.259h-.872v6.803l-3.673-3.181-.654,.756,4.196,3.634-4.195,3.609,.652,.758,3.674-3.161v6.782h.87l4.896-4.204-4.367-3.782,4.365-3.756Zm-4.764-2.822l3.236,2.817-3.236,2.785V5.437Zm3.234,10.356l-3.234,2.777v-5.578l3.234,2.801Z"/>
</svg>

);
