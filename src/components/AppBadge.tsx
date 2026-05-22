/* App store / Play store pill buttons. Styled to match Launch App in the
   nav: light lavender pill with accent-ink label, neumorphic shadow,
   subtle hover lift. */
import type { ReactNode } from 'react'

interface BadgeProps {
  href: string
  /** Pixel height of the pill. Defaults to 44. */
  height?: number
}

interface PillProps extends BadgeProps {
  icon: ReactNode
  label: string
  ariaLabel: string
}

function PillBadge({ href, icon, label, ariaLabel, height = 44 }: PillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        height,
        padding: '0 22px',
        borderRadius: 99,
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '-0.005em',
        color: 'var(--accent-ink)',
        background: 'rgba(127, 86, 217, 0.15)',
        boxShadow: '-4px -4px 5px 0 #FFF, 4px 4px 5px 0 rgba(0, 0, 0, 0.04)',
        whiteSpace: 'nowrap',
        transition: 'background .15s ease, transform .15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(127, 86, 217, 0.24)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(127, 86, 217, 0.15)'
        e.currentTarget.style.transform = 'none'
      }}
    >
      {icon}
      {label}
    </a>
  )
}

function AppleMark() {
  return (
    <svg width="14" height="16" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function GooglePlayMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.6 1.8L13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-.9V2.7c0-.4.2-.7.6-.9z"
        fill="#0F9D58"
      />
      <path d="M13.8 12l3.2-3.2L6 2.4c-.1-.1-.3-.1-.4-.2L13.8 12z" fill="#F4B400" />
      <path d="M17 8.8L13.8 12l3.2 3.2 4-2.3c.6-.4.6-1.2 0-1.6L17 8.8z" fill="#DB4437" />
      <path d="M5.6 21.8c.1-.1.3-.1.4-.2L17 15.2 13.8 12 5.6 21.8z" fill="#4285F4" />
    </svg>
  )
}

export function AppStoreBadge({ href, height }: BadgeProps) {
  return (
    <PillBadge
      href={href}
      height={height}
      icon={<AppleMark />}
      label="App Store"
      ariaLabel="Download on the App Store"
    />
  )
}

export function PlayStoreBadge({ href, height }: BadgeProps) {
  return (
    <PillBadge
      href={href}
      height={height}
      icon={<GooglePlayMark />}
      label="Google Play"
      ariaLabel="Get it on Google Play"
    />
  )
}
