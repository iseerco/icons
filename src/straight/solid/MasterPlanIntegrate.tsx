import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MasterPlanIntegrate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,2.5v5.5h-4v2c0,1.103-.897,2-2,2h-5v3.446s1.795-1.794,1.795-1.794l1.414,1.414-2.888,2.889c-.726,.727-1.911,.728-2.638,0l-2.889-2.889,1.414-1.414,1.792,1.792v-3.445H6c-1.103,0-2-.897-2-2v-2H0V2.5C0,1.122,1.121,0,2.5,0H7.5c1.379,0,2.5,1.122,2.5,2.5v5.5H6v2h12v-2h-4V2.5c0-1.378,1.121-2.5,2.5-2.5h5c1.379,0,2.5,1.122,2.5,2.5Zm-3,12.5h-2.139l-4.165,4.138c-1.493,1.484-3.904,1.483-5.397,0l-4.161-4.137H3c-1.657,0-3,1.343-3,3v6H24v-6c0-1.657-1.343-3-3-3Z"/>
</svg>

);
