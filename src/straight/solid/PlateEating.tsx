import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlateEating = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.373,0,0,5.373,0,12c0,5.223,3.342,9.654,8,11.303V15h-.5c-1.378,0-2.5-1.122-2.5-2.5V7h2v5.5c0,.276,.224,.5,.5,.5h.5V7h2v6h.5c.276,0,.5-.224,.5-.5V7h2v5.5c0,1.378-1.122,2.5-2.5,2.5h-.5v8.82c.652,.11,1.317,.18,2,.18,1.405,0,2.747-.254,4-.697v-4.509c-1.529-1.861-2.037-3.756-1.998-5.462,.121-3.077,1.666-5.25,2.606-6.102,.535-.497,1.388-.122,1.392,.507v14.645c3.583-2.076,6-5.942,6-10.381C24,5.373,18.627,0,12,0Z"/>
</svg>

);
