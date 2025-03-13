"use client"

import React, { useState } from 'react';
import { recommendationData } from '@/lib/data';
import Indicators from '@/components/common/indicators';
import RecommendationCard from '@/components/common/cards/recommendationCard';


function RecommendationHolder() {
  const itemsPerPage = 3;
  const totalItems = recommendationData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);


  const startIndex = currentPage * itemsPerPage;
  const visibleRecommendations = recommendationData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Navigation handlers
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGoToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div>
      {/* Recommendations */}
      <div className='p-5 lg:p-0 lg:leftRightSpacing flex flex-col lg:flex-row gap-10 mb-10 md:mb-32'>
        {visibleRecommendations.map((item, index) => (
          <RecommendationCard
            key={index}
            image={item.image}
            name={item.name}
            rating={item.rating}
            occupation={item.occupation}
            opinion={item.opinion}
          />
        ))}
      </div>

      {/* Indicators */}
      <Indicators
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
        onGoToPage={handleGoToPage}
      />
    </div>
  );
}

export default RecommendationHolder;