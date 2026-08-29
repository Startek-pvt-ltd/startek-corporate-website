import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "@/components/AppLink";

const videos = [
  { id: "7594636350515596551", label: "Startek Digital agency introduction" },
  { id: "7610387187787500820", label: "Startek Digital featured video" },
];

const playerOptions = "controls=1&music_info=1&description=1&rel=0";

export function TikTokFeature() {
  return (
    <section className="section tiktok-feature" aria-labelledby="tiktok-feature-title">
      <div className="container tiktok-feature-layout">
        <div className="tiktok-feature-copy">
          <p className="eyebrow"><span>+</span>Inside Startek Digital</p>
          <div className="tiktok-feature-icon" aria-hidden="true"><Play size={22}/></div>
          <h2 id="tiktok-feature-title">Your Growth Partner in the Digital World.</h2>
          <p>Meet the social media marketing agency helping businesses grow through digital marketing, branding and social media. Press play to watch with sound.</p>
          <Link className="outline-button" href="https://www.tiktok.com/@startek.digital" target="_blank" rel="noopener noreferrer">
            Follow on TikTok <ArrowUpRight size={16} aria-hidden="true"/>
          </Link>
        </div>
        <div className="tiktok-player-grid">
          {videos.map((video) => (
            <div className="tiktok-player-shell" key={video.id}>
              <iframe
                src={`https://www.tiktok.com/player/v1/${video.id}?${playerOptions}`}
                title={`${video.label} on TikTok`}
                loading="lazy"
                allow="fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
