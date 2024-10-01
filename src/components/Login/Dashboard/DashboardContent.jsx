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
          { name: 'PROFILE', image: IMAGES.Profiling },
          { name: 'AUDIT REPORT', image: IMAGES.Audit },
          { name: 'ADS GENERATION', image: IMAGES.citation },
          { name: 'CONTENT IDEAS', image: IMAGES.contentc },
          { name: 'KEYWORD ANALYTICS', image: IMAGES.Analytics },
          { name: 'COMPETITORS ANALYSIS', image: IMAGES.competitor },
          { name: 'ARTICLE WRITING', image: IMAGES.Article },
          { name: 'KEYWORD RESEARCH', image: IMAGES.keyword },
          { name: 'CHAT BOT', image: IMAGES.keyword },
          { name: 'SETTINGS', image: IMAGES.setting },
        ].map(({ name, image }) => (
          <Card key={name} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
