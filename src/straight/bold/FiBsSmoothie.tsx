import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSmoothie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 8h-1.146c-.612-3.209-3.145-5.742-6.354-6.354v-1.646h-3v1.646c-3.209.612-5.742 3.145-6.354 6.354h-1.146v3h1.115l.996 13h13.778l1-13h1.111zm-4.255 0h-3.245v-3.245c1.545.49 2.755 1.7 3.245 3.245zm-6.245-3.245v3.245h-3.245c.49-1.545 1.7-2.755 3.245-3.245zm0 6.245v3c-.236-.021-.473-.042-.742-.042-.95 0-1.736.155-2.383.36l-.255-3.318zm-2.611 10-.273-3.551c.357-.199 1.06-.491 2.142-.491.881 0 1.43.192 2.125.437.809.284 1.726.605 3.118.605.483 0 .927-.048 1.35-.113l-.239 3.113zm8.7-6.217c-.454.122-.986.217-1.589.217s-1.053-.094-1.5-.231v-3.769h3.38z"/></svg>
);
