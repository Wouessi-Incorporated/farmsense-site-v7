import { useRouter } from 'next/router';
import {useEffect} from 'react';
const VideoSection = () => {
  const router = useRouter();
  const isFr = router.locale === 'fr';

  console.log("isFr is " + isFr);
  /*
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
   */

    
  return (
    <div className="hero-video">
      <div className="hero-video-inner">
        <div className="video-placeholder">
          {isFr ? (
            // French video placeholder - replace with actual video embed code
            <div className="video-container">
              <video
                
                controls preload="none"
                poster="/images/farmsense-video-thumbnail.jpg"
                title="FarmSense Video In English"
              
              >
                <source src="/images/farmsense-video-fr.mp4"
                  type="video/mp4"

                />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            // English video placeholder - replace with actual video embed code
            <div className="video-container">
              <video
                key={isFr}
                controls preload="none"
                poster="/images/farmsense-video-thumbnail.jpg"
                title="FarmSense Video In English"
              
              >
                <source src="/images/farmsense-video-en.mp4"
                  type="video/mp4"

                />
                Your browser does not support the video tag.
              </video>
            </div>


          )}
        </div>
      </div>
      <style jsx>{`
       
        .video-container {
          
          max-width: 800px;
          border-radius:8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .video-container video{
          width: 100%;
          height:auto;
          display:block;
          border-radius:8px;
          

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
