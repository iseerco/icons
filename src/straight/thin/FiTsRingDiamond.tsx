import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRingDiamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.283,6.294l2.759-3.649-2.645-2.645h-4.795l-2.645,2.645,2.759,3.649c-3.861,1.013-6.717,4.532-6.717,8.706,0,4.962,4.038,9,9,9s9-4.038,9-9c0-4.174-2.856-7.693-6.717-8.706Zm-1.783-.28v-2.124l2.894-.724-2.202,2.912c-.228-.03-.458-.052-.691-.065Zm-2.483-5.014h3.967l1.191,1.191-3.174.793-3.174-.793,1.191-1.191Zm-1.41,2.167l2.894.724v2.124c-.233.013-.463.035-.691.065l-2.202-2.912Zm3.394,19.833c-4.411,0-8-3.589-8-8S7.589,7,12,7s8,3.589,8,8-3.589,8-8,8Z"/>
</svg>

);
