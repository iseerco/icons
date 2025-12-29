import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBatterySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.035,18.914c.604-.635,.965-1.49,.965-2.414v-.5h2V8h-2v-.5c0-1.93-1.57-3.5-3.5-3.5H6.121L1.81-.311-.311,1.811,22.189,24.311l2.121-2.121-3.276-3.276Zm-2.535-11.914c.275,0,.5,.224,.5,.5v9c0,.114-.036,.211-.091,.288L9.121,7h9.379Zm-6.45,10l3,3H0V4.95l3,3v9.05H12.05Z"/></svg>

);
