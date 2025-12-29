import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlugCircleBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm2.731,7.493h0s-2.385,3.45-2.385,3.45l-1.659-1.117,1.963-2.824h-2.035c-.509,0-.994-.244-1.297-.652-.303-.409-.462-.969-.249-1.431,.48-1.04,2.478-3.854,2.478-3.854l1.664,1.109-1.845,2.828h2.029c.592,0,1.133,.324,1.413,.846,.28,.522,.25,1.151-.077,1.645Zm-10.731-1.493v6h-2v-6h-1c-3.309,0-6-2.691-6-6v-4H0v-2H4V0h2V6h6V0h2V6h4v2h-1v2.069c-3.945,.493-7,3.852-7,7.931Z"/>
</svg>

);
