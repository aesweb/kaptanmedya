import React from 'react';

const OrganizationCard = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center gap-12 px-12 py-12 xl:gap-32 xl:flex-row">
        <div>
          <div className="mb-10">
            <div className="mb-2">Wedding Ceremony</div>
            <div>DÜĞÜN & DAVET</div>
          </div>
          <div className="max-w-xl text-sm">
            Hayalini kurduğunuz düğün, unutulmaz anları, ilk dansınız, aileler
            ve konuklarınız ile birlikte unutulmayacak bir gün ve hatırladıkça
            mutluluk yaşatacak muhteşem bir gece için sizlerle birlikteyiz.
            Bugüne kadar mutluluk içerisinde evliliğe ilk adımını atan yüzlerce
            çiftimizin yanında olduğumuz gibi…
          </div>
        </div>
        <div>image</div>
      </div>
    </div>
  );
};

export default OrganizationCard;
