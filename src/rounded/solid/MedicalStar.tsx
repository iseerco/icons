import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MedicalStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.862,16.892l-7.989-4.892,7.989-4.892c.471-.288.619-.903.33-1.375-.288-.47-.902-.619-1.375-.33l-7.858,4.812V1c0-.553-.447-1-1-1s-1,.447-1,1v9.215L3.101,5.403c-.473-.289-1.087-.14-1.375.33-.289.472-.141,1.087.33,1.375l7.989,4.892-7.989,4.892c-.471.288-.619.903-.33,1.375.188.308.517.478.854.478.178,0,.358-.048.521-.147l7.858-4.812v9.215c0,.553.447,1,1,1s1-.447,1-1v-9.215l7.858,4.812c.163.1.344.147.521.147.337,0,.665-.17.854-.478.289-.472.141-1.087-.33-1.375Z"/></svg>

);
