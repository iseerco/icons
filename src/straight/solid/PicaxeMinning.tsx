import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PicaxeMinning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m-.01 16.606 11.268-11.267c-2.146-1.807-4.642-2.848-7.258-3.339l-.027-2c4.089 0 7.426.935 9.779 2.845l1.151-1.151 1.414 1.414-1.152 1.152c1.904 2.352 2.835 5.686 2.835 9.767l-2-.027c-.49-2.611-1.528-5.103-3.329-7.246l-11.267 11.266zm24.01 7.433h-24v-2h12.586l2-2h4.414v-3.414l3-3v-13.625h2zm-16-6.705 3 2.205 2-3.038-2.201-2.5-2.799 1.264v2.07z"/></svg>
);
