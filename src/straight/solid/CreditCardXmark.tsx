import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CreditCardXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 12c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm3.536 8.121-1.414 1.414-2.121-2.121-2.121 2.121-1.414-1.414 2.121-2.121-2.121-2.121 1.414-1.414 2.121 2.121 2.121-2.121 1.414 1.414-2.121 2.121zm2.464-15.121h-24v-2c0-1.657 1.343-3 3-3h18c1.657 0 3 1.343 3 3zm-6 5c2.393 0 4.534 1.056 6 2.721v-5.721h-24v11h10c0-4.418 3.582-8 8-8zm-12.5 4c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/></svg>
);
