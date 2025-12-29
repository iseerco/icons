import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBagSeedling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,13.758v3.242h-3v-3.288c-2.102-.555-4.728-2.156-4.467-6.712,3.319.052,5.06,1.78,5.971,3.505.917-1.724,2.665-3.452,5.993-3.505.262,4.67-2.384,6.242-4.497,6.758Zm8.5,5.953l1.716,4.289H.284l1.716-4.289V4.289L.284,0h23.432l-1.716,4.289v15.422Zm-3,.289V4H5v16h14Z"/>
</svg>

);
