import React from 'react';
import Card from './Card';
import { IMAGES } from '../../../constants/images.js';

const DashboardContent = () => {
  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <div className="text-2xl text-center font-bold text-black-800 mb-6">Full Services to Grow Your Business</div>
      <div className="text-m text-gray-600 text-center mb-6">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { name: 'PROFILE', image: IMAGES.Profiling, route:'/profile' },
          { name: 'AUDIT REPORT', image: IMAGES.Audit,route:'/audit-report'  },
          { name: 'ADS GENERATION', image: IMAGES.citation,route:'/ads-generation'  },
          // { name: 'CONTENT IDEAS', image: IMAGES.contentc ,route:'/content-ideas' },
          { name: 'KEYWORD ANALYTICS', image: IMAGES.Analytics,route:'/keyword-analytics'  },
          { name: 'COMPETITORS ANALYSIS', image: IMAGES.competitor,route:'/competetitors-analytics'  },
          { name: 'ARTICLE WRITING', image: IMAGES.Article,route:'/article-writings'  },
          { name: 'KEYWORD RESEARCH', image: IMAGES.keyword ,route:'/keyword-research' },
          { name: 'CHAT BOT', image: IMAGES.keyword,route:'/chat-bot'  },
          // { name: 'SETTINGS', image: IMAGES.setting,route:'/settings'  },
        ].map(({ name, image }) => (
          <Card key={name} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
