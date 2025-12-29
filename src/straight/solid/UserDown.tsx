import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.398 5.207-3.339 3.339c-.293.293-.682.454-1.095.454s-.803-.161-1.096-.454l-3.339-3.339 1.414-1.414 2.056 2.055v-5.848h2v5.778l1.984-1.985 1.414 1.414zm-12.398 10.793h-7c-2.206 0-4 1.794-4 4v4h15v-4c0-2.206-1.794-4-4-4zm-3.5-2c3.033 0 5.5-2.467 5.5-5.5s-2.467-5.5-5.5-5.5-5.5 2.467-5.5 5.5 2.467 5.5 5.5 5.5z"/></svg>
);
