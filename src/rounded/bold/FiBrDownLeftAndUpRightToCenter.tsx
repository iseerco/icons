import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDownLeftAndUpRightToCenter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.561,2.561l-4.286,4.286,2.537,2.537c.574,.574,.158,1.564-.659,1.569l-7.242,.047c-.506,.003-.914-.404-.911-.911l.047-7.242c.005-.817,.996-1.232,1.569-.659l2.537,2.537L21.439,.439c.586-.586,1.535-.586,2.121,0,.586,.585,.586,1.536,0,2.121ZM10.089,13l-7.242,.047c-.817,.005-1.232,.995-.659,1.569l2.537,2.537L.439,21.439c-.586,.585-.586,1.536,0,2.121,.293,.293,.677,.439,1.061,.439s.768-.146,1.061-.439l4.286-4.286,2.537,2.537c.574,.574,1.564,.158,1.569-.659l.047-7.242c.003-.506-.404-.914-.911-.911Z"/></svg>

);
