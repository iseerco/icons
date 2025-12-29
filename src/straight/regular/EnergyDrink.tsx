import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnergyDrink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.344 13.249-4.278 4.751h-1.066l1.035-3h-1.714c-.55 0-.944-.569-.785-1.096l2.159-4.904h3.325l-1.301 3h1.955c.642 0 1.025.715.67 1.249zm4.656-5.352v10.205c0 1.293-.306 2.588-.884 3.742l-1.077 2.155h-12.078l-1.078-2.155c-.578-1.154-.883-2.449-.883-3.742v-10.205c0-1.293.306-2.588.884-3.742l1.077-2.155h8.039v-2h2v2h2.039l1.078 2.155c.578 1.154.883 2.449.883 3.742zm-2 0c0-.984-.232-1.969-.672-2.848l-.525-1.05h-9.606l-.525 1.05c-.44.879-.672 1.863-.672 2.848v10.205c0 .984.232 1.969.672 2.848l.525 1.05h9.605l.525-1.05c.44-.879.672-1.863.672-2.848v-10.205z"/></svg>
);
