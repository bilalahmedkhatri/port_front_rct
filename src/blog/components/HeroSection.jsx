import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const dummyPosts = [
  {
    id: '001',
    category: 'Financing',
    date: 'Oct 16, 2024',
    title: 'Whispers of Wisdom',
    image: '/images/finance-runner.jpg',
  },
  {
    id: '002',
    category: 'Lifestyle',
    date: 'Oct 25, 2024',
    title: 'Ink-Stained Insights',
    image: '/images/lifestyle-field.jpg',
  },
  {
    id: '003',
    category: 'Community',
    date: 'Dec 4, 2024',
    title: 'Musings in Grayscale',
    image: '/images/community-portrait.jpg',
  }
];

const HeroSection = () => {
  return (
    <HeroContainer>
      <LeftSection>
        <PostGrid>
          {dummyPosts.map((post, index) => (
            <PostCard key={post.id}>
              <PostImage src={post.image} alt={post.title} />
              <PostContent>
                <PostMeta>
                  <CategoryTag>{post.category}</CategoryTag>
                  <PostDate>{post.date}</PostDate>
                </PostMeta>
                <PostNumber>{`00${index + 1}`}</PostNumber>
                <PostTitle>{post.title}</PostTitle>
                <ArrowLink>
                  <ArrowIcon>→</ArrowIcon>
                </ArrowLink>
              </PostContent>
            </PostCard>
          ))}
        </PostGrid>
      </LeftSection>

      <RightSection>
        <MainContent>
          <MainTitle>Journey Through Life's Spectrum</MainTitle>
          <WelcomeText>
            Welcome to Ash Gray's Blog: A Realm of Reflection, Inspiration, and
            Discovery, Where Words Illuminate Paths of Meaning and Thoughts
            Unravel the Mysteries of Life's Spectrum.
          </WelcomeText>
          <ActionButtons>
            <JoinButton>Join Now</JoinButton>
            <SocialLinks>
              <SocialIcon>
                <img src="/icons/instagram.svg" alt="Instagram" />
              </SocialIcon>
              <SocialIcon>
                <img src="/icons/facebook.svg" alt="Facebook" />
              </SocialIcon>
              <SocialIcon>
                <img src="/icons/medium.svg" alt="Medium" />
              </SocialIcon>
            </SocialLinks>
          </ActionButtons>
        </MainContent>
        <HeroImage src="/images/hero-writer.jpg" alt="Writer at work" />
      </RightSection>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.article`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #f8f8f8;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 1.5rem;
  position: relative;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CategoryTag = styled.span`
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
`;

const PostDate = styled.span`
  color: #666;
  font-size: 0.875rem;
`;

const PostNumber = styled.span`
  font-size: 1rem;
  color: #999;
  margin-bottom: 0.5rem;
  display: block;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 600;
`;

const ArrowLink = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  background: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.25rem;
`;

const RightSection = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #f8f8f8;
`;

const MainContent = styled.div`
  padding: 3rem;
  position: relative;
  z-index: 2;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WelcomeText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const JoinButton = styled.button`
  background: #333;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #444;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f0f0f0;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    height: 300px;
  }
`;

export default HeroSection;