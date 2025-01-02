import React from 'react';
import Img from '../assets/img.jpg'

const homeVariations = [
  {
    id: 1,
    title: 'Home I',
    images: [
      {
        type: 'banner',
        urls: [{Img}, {Img}, {Img}]
      },
      {
        type: 'products',
        urls: [
          {Img},
          {Img},
         {Img},
         {Img},
         {Img},
       {Img}
        ]
      },
      {
        type: 'landscape',
        url:     {Img}
      }
    ]
  },
  {
    id: 2,
    title: 'Home II',
    images: [
      {
        type: 'icons',
        urls: [{Img}, {Img}, {Img}]
      },
      {
        type: 'fashion',
        urls: [{Img}, {Img}]
      },
      {
        type: 'products',
        urls: [
          {Img},
          {Img},
         {Img},
         {Img},
       {Img},
      {Img},
      {Img},
    {Img}
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Home III',
    images: [
      {
        type: 'featured',
        urls: [{Img}, {Img}, {Img}]
      },
      {
        type: 'products',
        urls: [
          {Img},
          {Img},
         {Img},
         {Img},
       {Img},
      {Img},
      {Img},
    {Img}
        ]
      },
      {
        type: 'landscape',
        url:    {Img}
      }
    ]
  },
  {
    id: 4,
    title: 'Home IV',
    images: [
      {
        type: 'featured',
        urls: [{Img}, {Img}, {Img}]
      },
      {
        type: 'products',
        urls: [
          {Img},
          {Img},
         {Img},
         {Img},
       {Img},
      {Img},
      {Img},
    {Img}
        ]
      },
      {
        type: 'landscape',
        url:   {Img}
      }
    ]
  }
];

function HomeVariation({ variation }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="p-4">
        {variation.images.map((section, idx) => (
          <div key={idx} className="mb-4">
            {section.type === 'banner' && (
              <div className="grid grid-cols-3 gap-2">
                {section.urls.map((url, i) => (
                  <img key={i} src={url} alt="" className="w-full h-auto object-cover rounded" />
                ))}
              </div>
            )}
            {section.type === 'products' && (
              <div className="grid grid-cols-3 gap-2">
                {section.urls.map((url, i) => (
                  <div key={i} className="relative group">
                    <img src={url} alt="" className="w-full h-auto object-cover rounded" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            )}
            {section.type === 'landscape' && (
              <img src={section.url} alt="" className="w-full h-auto object-cover rounded" />
            )}
            {section.type === 'icons' && (
              <div className="flex justify-center gap-8 mb-6">
                {section.urls.map((url, i) => (
                  <img key={i} src={url} alt="" className="w-12 h-12 object-contain" />
                ))}
              </div>
            )}
            {section.type === 'fashion' && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {section.urls.map((url, i) => (
                  <img key={i} src={url} alt="" className="w-full h-auto object-cover rounded" />
                ))}
              </div>
            )}
            {section.type === 'featured' && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                {section.urls.map((url, i) => (
                  <img key={i} src={url} alt="" className="w-full h-auto object-cover rounded" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t">
        <h3 className="text-xl font-semibold text-center">{variation.title}</h3>
      </div>
    </div>
  );
}

function HomeVariations() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {homeVariations.map((variation) => (
          <HomeVariation key={variation.id} variation={variation} />
        ))}
      </div>
    </div>
  );
}

export default HomeVariations;

