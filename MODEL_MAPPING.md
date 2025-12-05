# @iseer/icons - Model Mapping Document

> Icon naming conventions, conversion rules, and component mapping for the Iseer icon library.

## Overview

The `@iseer/icons` library contains **37,007 icons** across 8 style variants. This document describes how icon files map to React components and provides guidance for developers integrating the library.

## Variant Structure

### Icon Variants

| Variant | Weight | Icon Count | Prefix Code | Import Path |
|---------|--------|------------|-------------|-------------|
| Rounded | Regular | 4,681 | `fi-rr-` | `@iseer/icons/rounded/regular` |
| Rounded | Thin | 4,498 | `fi-rt-` | `@iseer/icons/rounded/thin` |
| Rounded | Bold | 4,681 | `fi-rb-` | `@iseer/icons/rounded/bold` |
| Rounded | Solid | 4,639 | `fi-rs-` | `@iseer/icons/rounded/solid` |
| Straight | Regular | 4,663 | `fi-sr-` | `@iseer/icons/straight/regular` |
| Straight | Thin | 4,515 | `fi-st-` | `@iseer/icons/straight/thin` |
| Straight | Bold | 4,665 | `fi-sb-` | `@iseer/icons/straight/bold` |
| Straight | Solid | 4,665 | `fi-ss-` | `@iseer/icons/straight/solid` |

### Prefix Code Reference

```
fi-{variant}{weight}-{icon-name}.svg

Variant Codes:
  r = rounded
  s = straight

Weight Codes:
  r = regular
  t = thin
  b = bold
  s = solid

Examples:
  fi-rr-home.svg     → Rounded Regular
  fi-rt-home.svg     → Rounded Thin  
  fi-rb-home.svg     → Rounded Bold
  fi-rs-home.svg     → Rounded Solid
  fi-sr-home.svg     → Straight Regular
  fi-st-home.svg     → Straight Thin
  fi-sb-home.svg     → Straight Bold
  fi-ss-home.svg     → Straight Solid
```

## Naming Convention Mapping

### SVG to Component Name Conversion

| SVG Filename | Component Name | Rule Applied |
|--------------|----------------|--------------|
| `fi-rr-home.svg` | `Home` | Basic conversion |
| `fi-rr-arrow-right.svg` | `ArrowRight` | Hyphen to PascalCase |
| `fi-rr-shopping-cart.svg` | `ShoppingCart` | Multi-word conversion |
| `fi-rr-0.svg` | `Zero` | Number to word |
| `fi-rr-1.svg` | `One` | Number to word |
| `fi-rr-3d.svg` | `ThreeD` | Number prefix |
| `fi-rr-5g-lock.svg` | `FiveGLock` | Number prefix with word |
| `fi-rr-360-degrees.svg` | `ThreeSixZeroDegrees` | All numbers converted |
| `fi-rr-404.svg` | `FourZeroFour` | Multi-digit number |

### Conversion Rules

1. **Remove File Extension**: Strip `.svg` from filename
2. **Remove Prefix**: Strip `fi-{variant}{weight}-` prefix
3. **Handle Leading Numbers**: Convert starting digits to words
   - `0` → `Zero`, `1` → `One`, `2` → `Two`, `3` → `Three`, `4` → `Four`
   - `5` → `Five`, `6` → `Six`, `7` → `Seven`, `8` → `Eight`, `9` → `Nine`
4. **Convert to PascalCase**: Split by hyphens, capitalize each word

## Common Icon Mappings

### Navigation Icons

| React Component | SVG Filename | Description |
|-----------------|--------------|-------------|
| `Home` | `fi-{xx}-home.svg` | Home/main page |
| `ArrowRight` | `fi-{xx}-arrow-right.svg` | Right arrow |
| `ArrowLeft` | `fi-{xx}-arrow-left.svg` | Left arrow |
| `ArrowUp` | `fi-{xx}-arrow-up.svg` | Up arrow |
| `ArrowDown` | `fi-{xx}-arrow-down.svg` | Down arrow |
| `AngleSmallRight` | `fi-{xx}-angle-small-right.svg` | Chevron right |
| `AngleSmallLeft` | `fi-{xx}-angle-small-left.svg` | Chevron left |
| `AngleSmallUp` | `fi-{xx}-angle-small-up.svg` | Chevron up |
| `AngleSmallDown` | `fi-{xx}-angle-small-down.svg` | Chevron down |

### Action Icons

| React Component | SVG Filename | Description |
|-----------------|--------------|-------------|
| `Add` | `fi-{xx}-add.svg` | Plus/add action |
| `Search` | `fi-{xx}-search.svg` | Search/magnifier |
| `Settings` | `fi-{xx}-settings.svg` | Settings/gear |
| `User` | `fi-{xx}-user.svg` | User profile |
| `Edit` | `fi-{xx}-edit.svg` | Edit/pencil |
| `Trash` | `fi-{xx}-trash.svg` | Delete |
| `Download` | `fi-{xx}-download.svg` | Download |
| `Upload` | `fi-{xx}-upload.svg` | Upload |

### Communication Icons

| React Component | SVG Filename | Description |
|-----------------|--------------|-------------|
| `Bell` | `fi-{xx}-bell.svg` | Notification bell |
| `Envelope` | `fi-{xx}-envelope.svg` | Email/message |
| `Comment` | `fi-{xx}-comment.svg` | Comment bubble |
| `Phone` | `fi-{xx}-phone.svg` | Phone call |
| `Video` | `fi-{xx}-video.svg` | Video call |

### Status Icons

| React Component | SVG Filename | Description |
|-----------------|--------------|-------------|
| `Check` | `fi-{xx}-check.svg` | Checkmark/success |
| `Cross` | `fi-{xx}-cross.svg` | X/close |
| `Exclamation` | `fi-{xx}-exclamation.svg` | Warning |
| `Info` | `fi-{xx}-info.svg` | Information |
| `Question` | `fi-{xx}-question.svg` | Help |

### Media Icons

| React Component | SVG Filename | Description |
|-----------------|--------------|-------------|
| `Play` | `fi-{xx}-play.svg` | Play media |
| `Pause` | `fi-{xx}-pause.svg` | Pause media |
| `Stop` | `fi-{xx}-stop.svg` | Stop media |
| `VolumeUp` | `fi-{xx}-volume-up.svg` | Volume high |
| `VolumeMute` | `fi-{xx}-volume-mute.svg` | Muted |

> **Note**: Replace `{xx}` with the appropriate variant code (e.g., `rr`, `sr`, `rb`, etc.)

## CDN Access

Icons are available via CDN for direct use:

```
https://edge.iseer.co/icons/{variant}/{weight}/svg/{filename}.svg

Examples:
https://edge.iseer.co/icons/rounded/regular/svg/fi-rr-home.svg
https://edge.iseer.co/icons/straight/bold/svg/fi-sb-arrow-right.svg
```

## Directory Structure

```
@iseer/icons/
├── icons/                    # Source SVG files
│   ├── rounded/
│   │   ├── regular/svg/      # 4,681 icons (fi-rr-*.svg)
│   │   ├── thin/svg/         # 4,498 icons (fi-rt-*.svg)
│   │   ├── bold/svg/         # 4,681 icons (fi-rb-*.svg)
│   │   └── solid/svg/        # 4,639 icons (fi-rs-*.svg)
│   └── straight/
│       ├── regular/svg/      # 4,663 icons (fi-sr-*.svg)
│       ├── thin/svg/         # 4,515 icons (fi-st-*.svg)
│       ├── bold/svg/         # 4,665 icons (fi-sb-*.svg)
│       └── solid/svg/        # 4,665 icons (fi-ss-*.svg)
├── src/                      # Generated React components
│   ├── index.ts              # Main entry point
│   ├── types.ts              # TypeScript definitions
│   ├── rounded/
│   │   ├── regular/          # Component files + index.ts
│   │   ├── thin/
│   │   ├── bold/
│   │   └── solid/
│   └── straight/
│       ├── regular/
│       ├── thin/
│       ├── bold/
│       └── solid/
└── dist/                     # Built output
```

## Component Interface

All icon components share the same props interface:

```typescript
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /** Icon size (width and height) @default 24 */
  size?: number | string;
  
  /** Icon color (uses currentColor by default) @default 'currentColor' */
  color?: string;
  
  /** Additional CSS class names */
  className?: string;
}
```

## Usage Examples

### Direct Import (Tree-Shakeable)

```tsx
// Import from main package
import { Home, Search, Settings } from '@iseer/icons';

// Import from specific variant (smaller bundle)
import { Home } from '@iseer/icons/rounded/regular';
import { ArrowRight } from '@iseer/icons/straight/bold';
```

### Component Usage

```tsx
// Basic usage
<Home />

// With custom size
<Search size={32} />

// With custom color
<Settings color="#3b82f6" />

// With className for framework integration
<User className="text-primary dark:text-white" />
```

## Migration from Flaticon UIcons

If migrating from Flaticon UIcons, use this mapping:

| Original Class | New Component | Import |
|----------------|---------------|--------|
| `fi-rr-home` | `<Home />` | `@iseer/icons/rounded/regular` |
| `fi-sr-home` | `<Home />` | `@iseer/icons/straight/regular` |
| `fi-tr-angle-small-down` | `<AngleSmallDown />` | `@iseer/icons/rounded/thin` |
| `fi-br-arrow-right` | `<ArrowRight />` | `@iseer/icons/rounded/bold` |
| `fi-ss-add` | `<Add />` | `@iseer/icons/straight/solid` |

---

**Total Icons**: 37,007  
**Variants**: 8 (2 styles × 4 weights)  
**Format**: SVG (24×24 viewBox)  
**License**: Apache 2.0

Made with ❤️ by [Iseer](https://iseer.co)
