import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "@/components/AppLink";

const videoId = "7594636350515596551";
const videoUrl = `https://www.tiktok.com/@startek.digital/video/${videoId}`;
const playerUrl = `https://www.tiktok.com/player/v1/${videoId}?autoplay=1&muted=1&controls=1&music_info=1&description=1&rel=0`;

export function TikTokFeature() {
  return (
    <section className="section tiktok-feature" aria-labelledby="tiktok-feature-title">
      <div className="container tiktok-feature-layout">
        <div className="tiktok-feature-copy">
          <p className="eyebrow"><span>+</span>Inside Startek Digital</p>
          <div className="tiktok-feature-icon" aria-hidden="true"><Play size={22}/></div>
          <h2 id="tiktok-feature-title">Your Growth Partner in the Digital World.</h2>
          <p>Meet the social media marketing agency helping businesses grow through digital marketing, branding and social media.</p>
          <Link className="outline-button" href={videoUrl} target="_blank" rel="noopener noreferrer">
            Watch on TikTok <ArrowUpRight size={16} aria-hidden="true"/>
          </Link>
        </div>
        <div className="tiktok-player-shell">
          <iframe
            src={playerUrl}
            title="Startek Digital agency introduction on TikTok"
            loading="lazy"
            allow="autoplay; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
