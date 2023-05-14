import React from 'react';
import Feature from '../../components/feature/Feature';
import './aboutapp.css';

const AboutApp = () => (
  <div className="gpt3__whatgpt3 section__margin" id="aboutapp">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is MLAAS?" text="MLAAS is a platform that provides hands-on machine learning models ready to use for you. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="#models">Explore the Models</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Time-saving" text="MLAAS platform is designed to be user-friendly, with intuitive interfaces that make it easy to navigate and use. Whether you're a data scientist or a business user, you can quickly start exploring and deploying a variety of pre-trained machine learning models on our platform without needing extensive technical knowledge. With just a few clicks, you can integrate our models into your own applications and workflows, saving you time and effort." />
      <Feature title="Ready to use" text="MLAAS platform enables you to streamline your machine learning workflows and make rapid progress, saving you valuable time. With our platform, you can easily automate and scale your machine learning tasks, allowing you to spend more time on your core business objectives. Our platform provides a range of pre-built features that can help you to accomplish common tasks with ease, such as data pre-processing, model training, and deployment. By leveraging our platform, you can accelerate your development cycle and gain a competitive edge." />
      <Feature title="Customizability" text="MLAAS platform offers a high degree of customizability, allowing you to tailor our machine learning models to your specific business needs. Our platform provides a range of pre-trained models that you can use out of the box, or you can fine-tune these models to your specific use case using your own data. Additionally, you can train your own models from scratch, using your own algorithms and hyperparameters, and integrate these models into your workflows seamlessly. Our platform also provides APIs that allow you to build custom pipelines and workflows, enabling you to integrate our platform into your existing applications. With MLAAS platform, you have the flexibility to customize our machine learning models to your unique business requirements." />
    </div>
  </div>
);

export default AboutApp;