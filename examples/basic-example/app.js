/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import dynamics from 'dynamics.js';
import bonzo from 'bonzo';

import IsometricGrid, { Cell } from '../../src';

import img1 from '../shared/img/1.jpg';
import img2 from '../shared/img/2.jpg';
import img3 from '../shared/img/3.jpg';
import img4 from '../shared/img/4.jpg';
import img5 from '../shared/img/5.jpg';
import img6 from '../shared/img/6.jpg';
import img7 from '../shared/img/7.jpg';

import styles from './stylesheets/app.scss';
import '../shared/favicon/favicon.ico';

class App extends Component {
  render() {
    const projectName = 'React Isometric Grid';
    const authorName = 'Wei-Wei Wu';
    const authorUrl = 'https://github.com/wuweiweiwu';
    const githubUrl = 'https://github.com/wuweiweiwu/react-isometric-grid';

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <div>
        <section className={styles['page-header']}>
          <h1 className={styles['project-name']}>{projectName}</h1>

          <h2 className={styles['project-tagline']}>
            Isometric grid layout and animation for presenting photos and
            projects
          </h2>
        </section>
        <section className={styles['main-content']}>
          <h3>Demo</h3>
          <div className={styles.wrapper} style={{ height: '700px' }}>
            <div className={styles.component}>
              <IsometricGrid
                shadow
                transform="rotateX(45deg) rotateZ(45deg)"
                onGridLoaded={() =>
                  bonzo(
                    document.getElementsByClassName(styles.wrapper)[0]
                  ).addClass(styles['grid-loaded'])
                }
                stackItemsAnimation={{
                  properties(pos) {
                    return {
                      translateZ: (pos + 1) * 30,
                      rotateZ: getRandomInt(-4, 4),
                    };
                  },
                  options(pos, itemstotal) {
                    return {
                      type: dynamics.bezier,
                      duration: 500,
                      points: [
                        { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                        { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
                      ],
                      delay: (itemstotal - pos - 1) * 40,
                    };
                  },
                }}
                style={{
                  height: '500px',
                  width: '800px',
                  position: 'absolute',
                  left: '25%',
                }}
              >
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img1, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img2, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img3, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img4, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img5, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img6, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img7, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img1, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
                <Cell
                  href="https://dribbble.com/fuviz"
                  layers={[img2, '#ac5cf5', '#5db4eb', '#5debb4']}
                  title="Random Title"
                />
              </IsometricGrid>
            </div>
          </div>
          <a href={githubUrl}>Documentation on Github</a>
          <br />
          <a href="storybook/index.html">More examples on Storybook</a>
          <footer className={styles['site-footer']}>
            <span className={styles['site-footer-owner']}>
              <a href={githubUrl}>{projectName}</a> is maintained by{' '}
              <a href={authorUrl}>{authorName}</a>.
            </span>

            <span className={styles['site-footer-credits']}>
              This page was generated by{' '}
              <a href="https://pages.github.com">GitHub Pages</a> using the{' '}
              <a href="https://github.com/jasonlong/cayman-theme">
                Cayman theme
              </a>{' '}
              by <a href="https://twitter.com/jasonlong">Jason Long</a>.
            </span>
          </footer>
        </section>

        <a href={githubUrl}>
          <img
            style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
            src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
          />
        </a>
      </div>
    );
  }
}

export default App;
