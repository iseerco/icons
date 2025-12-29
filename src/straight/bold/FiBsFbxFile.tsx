import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFbxFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4 21h17v3h-20v-21c0-1.654 1.346-3 3-3h11.382l5.618 5.665v3.335h-3v-1h-5v-5h-9zm12.651-7.612c0 .542-.188 1.037-.493 1.438.498.438.818 1.072.818 1.786 0 1.319-1.069 2.388-2.388 2.388h-2.588v-8h2.263c1.319 0 2.388 1.069 2.388 2.388zm-3.059.796h.671c.44 0 .796-.356.796-.796s-.356-.796-.796-.796h-.671zm1.792 2.428c0-.44-.356-.796-.796-.796h-.996v1.592h.996c.44 0 .796-.356.796-.796zm-4.384-4.013v-1.6h-4v8h1.6v-3h2.4v-1.6h-2.4v-1.801h2.4zm12-1.6h-1.812l-1.088 2.182-1.088-2.182h-1.812l1.994 4-1.994 4h1.812l1.088-2.182 1.088 2.182h1.812l-1.994-4z"/></svg>
);
