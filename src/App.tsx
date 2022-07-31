import Hero from '../src/stories/Hero/Hero';

import './App.css';

const App = () => {
  return (
      <>
        <div className="container">
          <Hero
              id={1}
              title={'Mountain'}
              img={
                'https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80'
              }
              content={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis tellus et libero feugiat, vitae dignissim augue pulvinar.'
              }
              // Change this value to true to see the loading animation

              loading={false}
          />
        </div>
      </>
  );
};

export default App;
