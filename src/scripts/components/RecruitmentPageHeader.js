import React from "react";

function RecruitmentPageHeader() {
  return (
    <header className="recruitment-page__header">
      <iframe
        className="recruitment-page__video"
        title="Become a Knight of Omega Delta Phi"
        width="900"
        height="675"
        src="https://www.youtube.com/embed/UNZqm3dxd2w"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </header>
  );
}

export default RecruitmentPageHeader;