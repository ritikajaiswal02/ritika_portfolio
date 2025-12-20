import React, { useEffect } from 'react';
import carPriceImg from '../assets/images/carprice.png';
import socialImg from '../assets/images/social.png';
import lungImg from '../assets/images/lung.png';
import airImg from '../assets/images/air.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/MLProjectsPage.css';

const MLProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const mlProjects = [
    {
      id: 1,
      title: 'Car Price Prediction',
      description: 'End-to-end car price prediction with exploratory analysis, multiple regressors, and a Flask web app powered by the final Random Forest model.',
      tech: ['Python', 'Flask', 'Random Forest', 'Pandas', 'scikit-learn'],
      link: 'https://carpred.pythonanywhere.com/',
      github: 'https://github.com/ritikajaiswal02/CarPricePrediction_ML_1',
      image: carPriceImg,
    },
    {
      id: 2,
      title: 'Social Network Ads Prediction',
      description: 'Classification model predicting user purchase decisions based on age and estimated salary using Random Forest Classifier deployed with Flask.',
      tech: ['Python', 'Flask', 'Random Forest', 'Pandas', 'scikit-learn'],
      link: 'https://socialnetworkads.pythonanywhere.com/',
      github: 'https://github.com/ritikajaiswal02/SocialNetworkAds_ML_2',
      image: socialImg,
    },
    {
      id: 3,
      title: 'Lung Cancer Prediction',
      description: 'Machine learning classification system predicting lung cancer risk based on patient symptoms and medical data using optimized ML algorithms.',
      tech: ['Python', 'Flask', 'Machine Learning', 'Pandas', 'scikit-learn'],
      link: 'https://lcsystem.pythonanywhere.com/',
      github: 'https://github.com/ritikajaiswal02/LungCancerPrediction_ML_3',
      image: lungImg,
    },
    {
      id: 4,
      title: 'Air Quality Clustering',
      description: 'KMeans clustering model analyzing PM2.5 pollution data of Indian cities, categorizing air quality into six levels with real-time predictions via Flask.',
      tech: ['Python', 'Flask', 'KMeans', 'Pandas', 'scikit-learn'],
      link: 'https://airqualityindex.pythonanywhere.com/',
      github: 'https://github.com/ritikajaiswal02/AirQualityClustering_ML_4',
      image: airImg,
    },
  ];

  return (
    <>
      <Header />
      <section className="ml-projects-page">
        <div className="container">
          <h1 className="ml-page-title animate-fade-in-up">
            Machine Learning <span className="highlight">Projects</span>
          </h1>

          <div className="ml-projects-grid">
            {mlProjects.map((project) => (
              <div key={project.id} className="ml-project-card animate-fade-in-up">
                {project.image && (
                  <div className="ml-project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className="ml-project-overlay"></div>
                <div className="ml-project-body">
                  <div className="ml-project-header">
                    <h3 className="ml-project-title">{project.title}</h3>
                  </div>

                  <p className="ml-project-description">{project.description}</p>

                  <div className="ml-project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="ml-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="ml-project-links">
                    {project.link !== '#' && (
                      <a href={project.link} className="ml-project-link" target="_blank" rel="noreferrer">
                        <span>View Project</span>
                        <span className="ml-arrow">→</span>
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a href={project.github} className="ml-github-link" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.78 2.72 1.27 3.39.97.11-.76.41-1.27.75-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.68 5.41-5.24 5.7.42.36.8 1.09.8 2.2 0 1.59-.02 2.88-.02 3.27 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MLProjectsPage;
