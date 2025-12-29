import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hammer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.507,13.785L5.127,23.117c-.628,.636-1.477,.93-2.31,.88-.7-.042-1.388-.327-1.926-.858-1.177-1.164-1.189-3.067-.026-4.243L10.274,9.533l4.232,4.252Zm6.469-6.188l-4.96-5.009C12.849-.535,9.631-.166,7.994,.331c-.69,.211-1.202,.752-1.371,1.449-.168,.689,.035,1.396,.541,1.894l8.871,8.912,4.941-4.989Zm2.17,2.191l-.762-.77-4.937,4.986,.719,.722c.524,.528,1.118,.831,2.133,.886,.806,.044,1.563-.318,2.131-.893l.712-.722c1.143-1.157,1.147-3.044,.005-4.21Z"/></svg>

);
