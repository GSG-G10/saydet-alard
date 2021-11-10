import React, { useContext, useState } from 'react';
import { Spin } from 'antd';
import CityInformation from './CityInformation';
import NavBar from '../../components/common/NavBar';
import BackgroundImg from '../../components/BackgroundImg';
import StoryCard from '../../components/common/Story';
import { AuthContext } from '../../context/AuthContext';
import { CityContext } from '../../context/CityContext';
import ScrollSpy from '../../components/common/ScrollSpy';
import Search from '../../components/common/search';
import HeaderTitle from '../../components/common/Title';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';
import StoryForm from '../../components/uploadStoryForm';

function City() {
  const { userData } = useContext(AuthContext);
  const { cityData: cityInfo } = useContext(CityContext);
  const [visibleAddStory, setVisibleAddStory] = useState(false);
  const { stories, cityData } = cityInfo;
  return (
    <div className="city-page">
      <NavBar />
      <ScrollSpy eleOfList={['عن المدينة', 'قصص']} />

      <Search />

      {cityData ? (
        <>
          <BackgroundImg
            img={cityData.image}
            quotation={cityData.quotation}
            cityName={cityData.name}
          />
          <div id="section-0" className="section-info">
            <CityInformation cityData={cityData} />
          </div>

          <div id="section-1" className="section-stories">

            <div className="title-container">
              <HeaderTitle text="القصص" level={1} className="stories-title" />
              {userData?.id && (
                <Button
                  text="أضف قصتك"
                  type="default"
                  btnHandler={() => { setVisibleAddStory(true); }}
                  load={false}
                />
              )}
              {visibleAddStory && (
                <StoryForm
                  visible={visibleAddStory}
                  setVisible={setVisibleAddStory}
                />
              )}
            </div>
            {stories?.length ? (
              stories.map((story) => (
                <StoryCard
                  key={story.id}
                  storyInfo={story}
                  userInfo={userData?.id ? userData.id : null}
                />
              ))
            ) : (
              <HeaderTitle text="لا يوجد قصص مضافة إلى هذه المدينة" level={2} />
            )}
          </div>
        </>
      ) : (
        <Spin />
      )}

      <Footer />
    </div>
  );
}

export default City;
