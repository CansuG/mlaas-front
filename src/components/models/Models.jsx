import React from 'react';
import Model from '../../components/model/Model';
import './models.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Try it, <br /> Most in demand models.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        
      </div>
      <div className="gpt3__blog-container_groupB">
        <Model  date="Sep 26, 2021" name="text sentiment" text="description1" />
        <Model  date="Sep 26, 2021" name="question answer" text="description2" />
        <Model  date="Sep 26, 2021" name="translate" text="description3" />
        <Model  date="Sep 26, 2021" name="summarization" text="description4" />
        <Model  date="Sep 26, 2021" name="blogpostgenerator" text="description5" />
      </div>
    </div>
  </div>
);

export default Blog;