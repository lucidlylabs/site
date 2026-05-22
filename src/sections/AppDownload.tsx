import { AppStoreBadge, PlayStoreBadge } from '../components/AppBadge'

const APP_STORE_URL =
  'https://apps.apple.com/in/app/lucidly-defi-earn-platform/id6761696081'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=finance.lucidly.app'

/* App download strip — sits between Hero and About-us. Centered pill row
   with both store links. Compact vertical padding so it reads as a quiet
   handoff between sections rather than a section of its own. */
export function AppDownload() {
  return (
    <section
      style={{
        paddingTop: 'clamp(16px, 2vw, 28px)',
        paddingBottom: 'clamp(28px, 3.5vw, 48px)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'flex-start', gap: 12, flexWrap: 'wrap' }}
      >
        <AppStoreBadge href={APP_STORE_URL} />
        <PlayStoreBadge href={PLAY_STORE_URL} />
      </div>
    </section>
  )
}
