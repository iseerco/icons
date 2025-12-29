import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WalletIncome = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.5,14.5c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm.483-4.501c.539,0,1.077-.205,1.487-.614l2.707-2.707-1.414-1.414-1.764,1.763V0h-2V7.059l-1.779-1.78-1.414,1.414,2.69,2.691c.41,.409,.948,.614,1.486,.614Zm3.017,.685v11.317H3.5c-.827,0-1.5-.673-1.5-1.5V9.816c.314,.112,.648,.184,1,.184H15.284l-1.999-2H3c-.552,0-1-.449-1-1s.448-1,1-1H13v-2H3C1.517,4,.29,5.084,.051,6.5h-.051v14c0,1.93,1.57,3.5,3.5,3.5H24V8.683l-2,2Z"/>
</svg>

);
