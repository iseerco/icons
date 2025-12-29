import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonBattery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9.005,9h5v2h-5v-2Zm14.995,3.788v2.212h-2.33l-.449,3.394c-.195,1.485-1.474,2.606-2.974,2.606h-2.247v3H3v-4.709c0-.46-.162-.909-.457-1.263C.668,15.776-.219,12.919,.046,9.983,.501,4.946,4.457,.792,9.453,.106c4.036-.554,7.909,1.057,10.348,4.312,1.182,1.46,2.296,4.016,3.476,6.722l.724,1.647Zm-6.995-3.788h-1v-.5c0-.827-.673-1.5-1.5-1.5H6.005v6H14.505c.827,0,1.5-.673,1.5-1.5v-.5h1v-2Z"/>
</svg>

);
