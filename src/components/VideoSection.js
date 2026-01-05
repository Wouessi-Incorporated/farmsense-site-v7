import { useRouter } from 'next/router';

const VideoSection = () => {
  const router = useRouter();
  const isFr = router.locale === 'fr';

  const videoContent = {
    en: {
      label: 'Live & recorded presentations',
      description: 'This area is reserved for the official FARMSENSE video presentation. It supports MP4, YouTube/Vimeo embeds and live broadcast (RTMP/HLS) for national programme launches and investor briefings.',
      playText: 'Play FARMSENSE introduction'
    },
    fr: {
      label: 'Présentation & diffusion en direct',
      description: 'Cette zone est réservée à la vidéo officielle de présentation FARMSENSE. Elle supporte les vidéos MP4, les intégrations YouTube/Vimeo et les diffusions en direct pour les lancements nationaux et les sessions avec les partenaires.',
      playText: 'Lancer la vidéo FARMSENSE'
    }
  };

  const content = videoContent[router.locale] || videoContent.en;

  return (
    <div className="hero-video">
      <div className="hero-video-inner">
        <div className="hero-video-label">{content.label}</div>
        <p>{content.description}</p>
        <div className="video-placeholder">
          {isFr ? (
            // French video placeholder - replace with actual video embed code
            <div className="video-container">
              <div className="video-overlay">
                <div className="play-button">▶</div>
                <p>Vidéo en français</p>
              </div>
              <img 
                src="/images/video-placeholder-fr.jpg" 
                alt="FARMSENSE vidéo de présentation en français"
                className="video-thumbnail"
              />
            </div>
          ) : (
            // English video placeholder - replace with actual video embed code
            <div className="video-container">
              <div className="video-overlay">
                <div className="play-button">▶</div>
                <p>English video</p>
              </div>
              <img 
                src="/images/video-placeholder-en.jpg" 
                alt="FARMSENSE video presentation in English"
                className="video-thumbnail"
              />
            </div>
          )}
          <div className="video-pill">
            <span>▶</span>
            <span>{content.playText}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .video-placeholder {
          margin-top: 1.5rem;
          text-align: center;
        }
        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto 1rem;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .video-thumbnail {
          width: 100%;
          height: auto;
          display: block;
        }
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.3);
          color: white;
          text-align: center;
          padding: 1rem;
        }
        .play-button {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .video-pill {
          display: inline-flex;
          align-items: center;
          background: #f0f4f8;
          color: #2d3748;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .video-pill:hover {
          background: #e2e8f0;
          transform: translateY(-1px);
        }
        .video-pill span:first-child {
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default VideoSection;
